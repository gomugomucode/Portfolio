# Engineering Decision Rationale & Architectural Tradeoffs

Detailed architectural trade-off evaluations and technology selection rationale.

---

## 1. Why React 18 + Vite?
- **Rationale**: Instant HMR development, sub-second production builds, virtual DOM reconciliation, and ecosystem component flexibility.
- **Tradeoff**: Client-side rendering requires explicit static pre-rendering scripts (`prerender.mjs`) to ensure optimal Search Engine indexing.
- **Alternatives Rejected**: Vanilla HTML/JS (lacks state management), Gatsby (slow build times and heavy GraphQL schema overhead).

---

## 2. Why Next.js 16 (App Router)?
- **Rationale**: Built-in hybrid Server Components, streaming SSR, zero-bundle-size server logic, and edge route handlers.
- **Alternatives Rejected**: Custom SSR Express Server (high maintenance overhead for server hydration and cache headers).

---

## 3. Why Rust + Solana Anchor?
- **Rationale**: 400ms transaction finality, sub-cent fees, and zero garbage collection latency.
- **Alternatives Rejected**: Solidity / EVM (12-15s block finality and gas fee volatility make micro-transactions unviable).

---

## 4. Why PostgreSQL + Prisma ORM?
- **Rationale**: Strong ACID guarantees, declarative schema migrations, type-safe auto-generated TypeScript queries, and foreign key enforcement.
- **Alternatives Rejected**: MongoDB (lack of schema constraints increases risk of data corruption in transactional e-commerce platforms).
