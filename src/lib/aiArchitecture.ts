/**
 * AI Readiness Type Architecture & RAG / Embedding Interface Contracts
 */

export interface DocumentChunk {
  id: string;
  sourceType: "project" | "blog" | "skill" | "bio";
  title: string;
  url: string;
  content: string;
  metadata: Record<string, string | number | boolean>;
  embedding?: number[]; // 1536-dimensional vector for OpenAI text-embedding-3-small or Gemini
}

export interface SemanticSearchQuery {
  query: string;
  topK?: number;
  minSimilarityScore?: number;
  filterSourceType?: "project" | "blog" | "skill";
}

export interface SemanticSearchResult {
  chunk: DocumentChunk;
  similarityScore: number;
}

export interface RAGContext {
  relevantChunks: DocumentChunk[];
  formattedPrompt: string;
  totalTokens: number;
}

export interface AIChatMessage {
  id: string;
  role: "user" | "assistant" | "system";
  content: string;
  timestamp: string;
  citations?: { title: string; url: string }[];
}

export interface AIProviderConfig {
  provider: "gemini" | "openai" | "anthropic" | "local_ollama";
  modelName: string;
  temperature: number;
  maxTokens: number;
}
