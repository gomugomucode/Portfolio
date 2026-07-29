/**
 * Enterprise Resilient API Client with AbortController, Exponential Backoff & Retry Logic
 */

export class ApiError extends Error {
  public status: number;
  public statusText: string;
  public timestamp: string;

  constructor(message: string, status: number = 500, statusText: string = "Internal Error") {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.statusText = statusText;
    this.timestamp = new Date().toISOString();
  }
}

export interface RequestOptions extends RequestInit {
  timeoutMs?: number;
  retries?: number;
  retryDelayMs?: number;
  backoffFactor?: number;
}

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

/**
 * Perform fetch with timeout support and exponential backoff retry logic
 */
export const apiClient = {
  fetch: async <T = unknown>(
    url: string,
    options: RequestOptions = {}
  ): Promise<T> => {
    const {
      timeoutMs = 8000,
      retries = 2,
      retryDelayMs = 1000,
      backoffFactor = 2,
      ...fetchOptions
    } = options;

    let attempt = 0;
    let lastError: Error | null = null;

    while (attempt <= retries) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

      // If user passed a custom signal, combine it
      if (fetchOptions.signal) {
        fetchOptions.signal.addEventListener("abort", () => controller.abort());
      }

      try {
        const response = await fetch(url, {
          ...fetchOptions,
          signal: controller.signal,
        });

        clearTimeout(timeoutId);

        if (!response.ok) {
          throw new ApiError(
            `HTTP ${response.status}: ${response.statusText} when requesting ${url}`,
            response.status,
            response.statusText
          );
        }

        // Return raw text if caller requests text or parse JSON
        const contentType = response.headers.get("content-type") || "";
        if (contentType.includes("application/json") || contentType.includes("json")) {
          const data = await response.json();
          return data as T;
        } else {
          const textData = await response.text();
          return textData as T;
        }
      } catch (err: unknown) {
        clearTimeout(timeoutId);
        
        const isAbortError = err instanceof Error && err.name === "AbortError";
        const errorMessage = isAbortError
          ? `Request timed out after ${timeoutMs}ms for ${url}`
          : err instanceof Error
          ? err.message
          : "Unknown Network Error";

        lastError = err instanceof ApiError ? err : new ApiError(errorMessage);

        // Don't retry if aborted manually by caller or max retries reached
        if (attempt >= retries || fetchOptions.signal?.aborted) {
          break;
        }

        attempt++;
        const delay = retryDelayMs * Math.pow(backoffFactor, attempt - 1);
        await sleep(delay);
      }
    }

    throw lastError || new ApiError(`Failed to fetch ${url}`);
  },

  get: async <T = unknown>(url: string, options?: RequestOptions): Promise<T> => {
    return apiClient.fetch<T>(url, { ...options, method: "GET" });
  },

  post: async <T = unknown>(url: string, body: unknown, options?: RequestOptions): Promise<T> => {
    return apiClient.fetch<T>(url, {
      ...options,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
      body: typeof body === "string" ? body : JSON.stringify(body),
    });
  },
};
