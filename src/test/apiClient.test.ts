import { describe, it, expect, vi, beforeEach } from "vitest";
import { apiClient, ApiError } from "../lib/apiClient";

describe("Resilient API Client Suite", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("should successfully fetch JSON payload on valid response", async () => {
    const mockPayload = { status: "ok", data: [1, 2, 3] };
    vi.spyOn(global, "fetch").mockResolvedValueOnce({
      ok: true,
      headers: new Headers({ "content-type": "application/json" }),
      json: async () => mockPayload,
    } as Response);

    const data = await apiClient.get<{ status: string }>("https://api.example.com/data");
    expect(data.status).toBe("ok");
  });

  it("should throw ApiError on non-200 HTTP response", async () => {
    vi.spyOn(global, "fetch").mockResolvedValue({
      ok: false,
      status: 404,
      statusText: "Not Found",
      headers: new Headers(),
    } as Response);

    await expect(
      apiClient.get("https://api.example.com/notfound", { retries: 0 })
    ).rejects.toThrow(ApiError);
  });
});
