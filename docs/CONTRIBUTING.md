# Contributing Guidelines

Guidelines for contributing to the portfolio platform repository.

---

## 🛠️ Development Setup & Quality Standards

1. **Clone & Install**:
   ```bash
   git clone https://github.com/gomugomucode/Portfolio.git
   cd Portfolio
   npm install
   ```

2. **Run Quality Gates**:
   - `npx tsc --noEmit` — 100% Type Safety.
   - `npm run lint` — Zero ESLint errors.
   - `npm run test` — All Vitest unit tests pass.
   - `npm run build` — Successful bundle build and SSG pre-rendering.
