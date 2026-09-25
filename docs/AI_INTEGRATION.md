# AI Integration Architecture Blueprint

Architecture Blueprint for Future Gemini & RAG Vector Search Enhancements.

---

## 1. Vector Search & Embeddings Pipeline

```
  +--------------------+       +-----------------------+       +---------------------+
  | Projects & Articles| ----> | Chunking & Embeddings | ----> | Vector Index        |
  | Content Dataset    |       | (Gemini / OpenAI API) |       | (Pinecone / Local)  |
  +--------------------+       +-----------------------+       +---------------------+
                                                                          |
                                                                          v
  +--------------------+       +-----------------------+       +---------------------+
  | Visitor Search /   | ----> | Context Assembly      | ----> | LLM Response        |
  | Chat Input Query   |       | (Top K Chunk Retrieval)|      | (Citations & Links) |
  +--------------------+       +-----------------------+       +---------------------+
```

---

## 2. Type Interfaces (`src/lib/aiArchitecture.ts`)

Contracts are pre-built under [`src/lib/aiArchitecture.ts`](../src/lib/aiArchitecture.ts) covering:
- `DocumentChunk`
- `SemanticSearchQuery`
- `RAGContext`
- `AIChatMessage`
