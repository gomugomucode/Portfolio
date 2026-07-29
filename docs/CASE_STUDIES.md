# Engineering Case Studies & Systems Design

Detailed architectural design documents for featured production software systems built by Anupam Baral.

---

## 1. Yatra — Decentralized Ride-Sharing Protocol (Solana & Rust)

### 📌 Problem & Context
Centralized ride-sharing platforms like Uber or Lyft charge drivers up to 30% in commission fees and lock driver reputational ratings inside proprietary databases.

### 🎯 Key Constraints
1. Sub-second ride matching for real-time passenger experience.
2. Zero transaction spam on the Solana blockchain for 2-second GPS coordinate ticks.
3. Atomic escrow account execution to prevent fraudulent ride cancellations.

### 🏗️ Systems Architecture
- **On-Chain Financial Execution**: Solana Anchor program written in Rust manages atomic ride escrows via Program Derived Address (PDA) accounts.
- **Off-Chain Signaling**: Firebase Realtime Database streams 50ms vehicle telemetry without block limit overhead.

---

## 2. Decoupled E-Learning Platform Architecture

### 📌 Problem & Context
Monolithic LMS platforms frequently crash during synchronized exam windows when tens of thousands of concurrent students query course materials simultaneously.

### 🏗️ Systems Architecture
- **Presentation**: React 18 frontend hosted statelessly on Edge CDNs.
- **Backend Services**: Stateless Node.js / Express microservices querying indexed MySQL read-replicas.
