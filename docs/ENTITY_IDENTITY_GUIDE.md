# Google Entity Identity & Reciprocal Profile Network Guide

**Entity Name:** Anupam Baral  
**Developer Handle / Username:** `@gomugomucode` (`gomugomucode`)  
**Canonical Domain:** `https://anupambaral.com.np`  
**Role:** Full-Stack Developer & AI Engineer  
**Location:** Butwal, Nepal (GMT+5:45)  

---

## 1. The Reciprocal Identity Network Architecture

To ensure search engines (Google, Bing) and AI systems unambiguously connect **Anupam Baral**, **gomugomucode**, and **https://anupambaral.com.np** as the same single person and entity, all authoritative first-party web assets must establish reciprocal, two-way identity signals:

```
                          ┌──────────────────────────┐
                          │   https://github.com/    │
                          │      gomugomucode        │
                          └─────────────┬────────────┘
                                        │ (Website: anupambaral.com.np)
                                        │
┌──────────────────────────┐            ▼            ┌──────────────────────────┐
│   https://medium.com/    │    ┌───────────────┐    │  https://linkedin.com/   │
│     @gomugomucode        │◄───┤ anupambaral.  ├───►│     in/gomugomucode      │
│ (Bio: anupambaral.com.np)│    │    com.np     │    │(Website: anupambaral.    │
└──────────────────────────┘    │ (ProfilePage  │    │           com.np)        │
                                │  + Person     │    └──────────────────────────┘
┌──────────────────────────┐    │   JSON-LD)    │    ┌──────────────────────────┐
│     https://x.com/       │◄───┤               ├───►│   https://youtube.com/   │
│      gomugomucode        │    └───────┬───────┘    │      @gomugomucode       │
│ (Bio: anupambaral.com.np)│            │            │ (Links: anupambaral.     │
└──────────────────────────┘            ▼            │           com.np)        │
                                                     └──────────────────────────┘
```

---

## 2. Platform-by-Platform Profile Configurations

### A. GitHub Profile (`gomugomucode`)

1. **GitHub Profile Settings (`https://github.com/settings/profile`)**:
   - **Name:** `Anupam Baral`
   - **Bio:** `Full-Stack Developer & AI Engineer from Nepal. Building modern web applications with React/Next.js, Python AI microservices, and Solana Web3 protocols.`
   - **URL / Website:** `https://anupambaral.com.np`
   - **Location:** `Butwal, Nepal`
   - **Twitter / X username:** `gomugomucode`

2. **Special Profile Repository (`https://github.com/gomugomucode/gomugomucode/blob/main/README.md`)**:
   Use this exact Markdown in your special profile repository:

```markdown
# Hi, I'm Anupam Baral (@gomugomucode) 👋

**Full-Stack Developer & AI Engineer** based in Butwal, Nepal.

I build production-grade web systems, type-safe Python AI/ML microservices, and decentralized Web3 protocols on Solana.

- 🌐 **Personal Website / Portfolio:** [anupambaral.com.np](https://anupambaral.com.np)
- ✍️ **Engineering Articles & Deep Dives:** [Medium (@gomugomucode)](https://medium.com/@gomugomucode)
- 💼 **Professional Network:** [LinkedIn](https://linkedin.com/in/gomugomucode)
- 🐦 **X (Twitter):** [@gomugomucode](https://x.com/gomugomucode)
- 📬 **Get in Touch:** `contact@anupambaral.com.np`

---

### 🛠️ Core Engineering Stack

- **Frontend:** React, Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion
- **Backend & Cloud:** Python, FastAPI, Node.js, Express, PostgreSQL, MySQL, Supabase, Firebase
- **Web3 & Systems:** Solana, Rust, Anchor Framework, Web3.js
```

---

### B. Medium Author Profile (`@gomugomucode`)

1. **Medium Profile Settings (`https://medium.com/me/settings`)**:
   - **Name:** `Anupam Baral`
   - **Short Bio (160 chars):** `Full-Stack Developer & AI Engineer (@gomugomucode) from Nepal. Writing about system architectures, React, Python AI & Solana. anupambaral.com.np`
   - **Custom Link in About:** `https://anupambaral.com.np`
2. **Article Footers:**
   At the end of your technical articles, include a standardized canonical sign-off:
   > *Written by **Anupam Baral** ([@gomugomucode](https://github.com/gomugomucode)), Full-Stack Developer & AI Engineer based in Nepal. Explore my full portfolio and interactive architecture diagrams at [anupambaral.com.np](https://anupambaral.com.np).*

---

### C. LinkedIn Profile (`in/gomugomucode`)

1. **Headline:** `Full-Stack Developer & AI Engineer | React, Next.js, Python, TypeScript, Solana | anupambaral.com.np`
2. **Contact Info > Website:** `https://anupambaral.com.np` (Label: `Personal Portfolio`)
3. **Custom Link CTA (Top of profile):** `Visit my Portfolio (anupambaral.com.np)`
4. **About Section:**
   > *I am Anupam Baral (@gomugomucode), a Full-Stack Developer and AI Engineer based in Nepal. I specialize in building type-safe web systems using React, Next.js, and TypeScript, engineering Python FastAPI machine learning microservices, and architecting Solana Web3 protocols.*
   > 
   > *Official portfolio & interactive systems playground: https://anupambaral.com.np*

---

### D. X / Twitter (`@gomugomucode`)

1. **Name:** `Anupam Baral`
2. **Bio:** `Full-Stack Developer & AI Engineer (@gomugomucode). React, Next.js, Python AI, Solana Web3. Butwal, Nepal.`
3. **Website:** `https://anupambaral.com.np`
4. **Location:** `Nepal`

---

### E. YouTube (`@gomugomucode`)

1. **Channel Name:** `Anupam Baral`
2. **Handle:** `@gomugomucode`
3. **Links:** Link Title: `Personal Portfolio` &rarr; `https://anupambaral.com.np`

---

## 3. Post-Deployment Verification in Google Search Console

After deploying updates to production:
1. Open [Google Search Console](https://search.google.com/search-console).
2. Go to **Sitemaps** &rarr; Submit `https://anupambaral.com.np/sitemap.xml`.
3. Go to **URL Inspection**:
   - Inspect `https://anupambaral.com.np/` &rarr; Click **Test Live URL** &rarr; Click **Request Indexing**.
   - Inspect `https://anupambaral.com.np/about` &rarr; Click **Request Indexing**.
   - Inspect `https://anupambaral.com.np/projects` &rarr; Click **Request Indexing**.
4. Check **Coverage / Page Indexing** tab after 48-72 hours to verify that Googlebot has processed the rich semantic HTML prerender and indexed the entity pages.
