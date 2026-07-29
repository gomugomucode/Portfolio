# Enterprise Security & Hardening Specification

Security Architecture, Defense-in-Depth Policies, and OWASP Compliance Guidelines.

---

## 1. Threat Model & Risk Vectors

- **Primary Asset**: User interactive experience, metadata integrity, contact transmission path, and RSS content rendering.
- **Threat Vector 1: Cross-Site Scripting (XSS)**: Untrusted RSS feed titles or content strings containing embedded `<script>` or `<iframe` tags.
  - **Mitigation**: Sanitized with `escapeHtml()` in `src/lib/security.ts` and sanitized DOMParser extraction.
- **Threat Vector 2: Clickjacking / Framing**: Malicious websites embedding portfolio pages inside transparent iFrames.
  - **Mitigation**: Enforced `X-Frame-Options: DENY` and CSP `frame-ancestors 'none'`.
- **Threat Vector 3: Contact Form Flooding / Denial of Service**: Automated bots spamming contact submission endpoints.
  - **Mitigation**: Client-side **Sliding Window Rate Limiter** limiting attempts to 3 per minute, backed by Zod input length caps (`max(3000)`).

---

## 2. HTTP Security Headers Policy (`vercel.json`)

```json
{
  "Strict-Transport-Security": "max-age=63072000; includeSubDomains; preload",
  "X-Frame-Options": "DENY",
  "X-Content-Type-Options": "nosniff",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "camera=(), microphone=(), geolocation=(), payment=()",
  "Content-Security-Policy": "default-src 'self'; script-src 'self' 'unsafe-inline' ...;"
}
```
