import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === "development";

// Kept in sync with the referral page's client, which POSTs click events here.
// If this origin changes, CSP connect-src must change with it or referral
// tracking is silently blocked by the browser.
const supabaseOrigin =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://jyvnodikbgowmkywxtfh.supabase.co";

const contentSecurityPolicy = [
  "default-src 'self'",
  // Next.js injects inline hydration/RSC bootstrap scripts. A nonce-based
  // policy would require middleware, which opts every route out of static
  // generation — so we accept 'unsafe-inline' for scripts and keep the value
  // in the remaining directives (connect-src, frame-ancestors, object-src).
  // Dev additionally needs 'unsafe-eval' for Turbopack HMR.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ""}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  // Dev needs ws:/wss: for the HMR socket.
  `connect-src 'self' ${supabaseOrigin}${isDev ? " ws: wss:" : ""}`,
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
].join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: contentSecurityPolicy },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "X-Frame-Options", value: "DENY" },
  // Referral links carry the code in the path (/refer/ABC12345). This keeps
  // that path out of the Referer header sent to third parties — e.g. when a
  // visitor taps through to the App Store.
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=()",
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
      {
        // Apple requires the AASA file to be served as application/json over
        // HTTPS with no redirects. It has no file extension, so without this it
        // is served as application/octet-stream and iOS silently ignores it.
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
};

export default nextConfig;
