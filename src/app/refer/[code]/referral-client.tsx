"use client";

import { useEffect, useRef, useState } from "react";

// The Supabase anon key is a public (publishable) key — it is designed to be
// shipped in the browser. Calling the edge function directly from the client
// (rather than proxying through our own API route) keeps the visitor's real IP
// intact so the function's per-visitor rate limiting works correctly.
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://jyvnodikbgowmkywxtfh.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5dm5vZGlrYmdvd21reXd4dGZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAxMTY0NjMsImV4cCI6MjA2NTY5MjQ2M30.cWMzMM7xdfSs03yBblp-bqVWBfRiryB2R87e5TVJyKo";

const APP_STORE_URL = "https://apps.apple.com/kh/app/bizmanage/id6747810928";
const DEEP_LINK = (code: string) => `businessmanager://refer/${code}`;
const FINGERPRINT_KEY = "device_fingerprint";

function generateFingerprint(): string {
  return `web_${Date.now()}_${Math.random().toString(36).substring(2, 10)}`;
}

/**
 * Returns a stable per-visitor fingerprint, persisted in localStorage so the
 * same visitor isn't counted twice. Falls back to an ephemeral value when
 * storage is unavailable (e.g. private browsing).
 */
function getDeviceFingerprint(): string {
  try {
    const existing = window.localStorage.getItem(FINGERPRINT_KEY);
    if (existing) return existing;
    const fingerprint = generateFingerprint();
    window.localStorage.setItem(FINGERPRINT_KEY, fingerprint);
    return fingerprint;
  } catch {
    return generateFingerprint();
  }
}

/**
 * Best-effort silent deep-link attempt via a hidden iframe. If the app is
 * installed the OS intercepts the custom scheme; if not, this is a harmless
 * no-op that (unlike navigating the top window) won't surface an error page.
 */
function attemptDeepLinkSilently(code: string) {
  try {
    const iframe = document.createElement("iframe");
    iframe.style.display = "none";
    iframe.src = DEEP_LINK(code);
    document.body.appendChild(iframe);
    window.setTimeout(() => {
      iframe.parentNode?.removeChild(iframe);
    }, 1500);
  } catch {
    // Ignore — the visible "Open in App" button remains as the reliable path.
  }
}

function legacyCopy(text: string): boolean {
  try {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.setAttribute("readonly", "");
    textarea.style.position = "fixed";
    textarea.style.top = "0";
    textarea.style.left = "-9999px";
    document.body.appendChild(textarea);
    textarea.select();
    textarea.setSelectionRange(0, text.length);
    const ok = document.execCommand("copy");
    document.body.removeChild(textarea);
    return ok;
  } catch {
    return false;
  }
}

async function copyToClipboard(text: string): Promise<boolean> {
  if (navigator.clipboard?.writeText) {
    try {
      // Race against a timeout: in some environments writeText neither
      // resolves nor rejects, which would otherwise leave the button
      // unresponsive. If it doesn't settle quickly, fall back to execCommand.
      await Promise.race([
        navigator.clipboard.writeText(text),
        new Promise<never>((_, reject) =>
          setTimeout(() => reject(new Error("clipboard-timeout")), 500),
        ),
      ]);
      return true;
    } catch {
      // Fall through to the legacy path below.
    }
  }
  return legacyCopy(text);
}

export function ReferralClient({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  const [codeInvalid, setCodeInvalid] = useState(false);
  const hasRun = useRef(false);

  // Record the click (fire-and-forget) and attempt the deep link on mount.
  useEffect(() => {
    if (hasRun.current) return;
    hasRun.current = true;

    const controller = new AbortController();

    fetch(`${SUPABASE_URL}/functions/v1/referral-click`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        apikey: SUPABASE_ANON_KEY,
      },
      body: JSON.stringify({
        code,
        device_fingerprint: getDeviceFingerprint(),
      }),
      signal: controller.signal,
    })
      .then((res) => {
        // 400 = code not found. Surface a gentle note but never block the page.
        if (res.status === 400) setCodeInvalid(true);
      })
      .catch(() => {
        // Network/abort errors are non-fatal — the landing page still works.
      });

    const timer = window.setTimeout(() => attemptDeepLinkSilently(code), 500);

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, [code]);

  const handleCopy = async () => {
    const ok = await copyToClipboard(code);
    if (ok) {
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenInApp = () => {
    // User-initiated: navigating the top window is the most reliable trigger.
    window.location.href = DEEP_LINK(code);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-50 via-white to-white px-5 py-12">
      <div className="w-full max-w-md">
        {/* Brand */}
        <div className="mb-8 flex items-center justify-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-lg font-bold text-white shadow-md shadow-blue-600/30">
            B
          </span>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            BizManage
          </span>
        </div>

        {/* Card */}
        <div className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-xl shadow-slate-900/5 sm:p-9">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-50 text-4xl">
            🎉
          </div>

          <h1 className="mt-5 text-center text-2xl font-bold leading-tight text-slate-900 sm:text-[28px]">
            You&apos;ve been invited to BizManage!
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-center text-[15px] leading-relaxed text-slate-600">
            Download BizManage and use this referral code when you sign up. Both
            you and your friend will earn bonus credits!
          </p>

          {/* Referral code */}
          <div className="mt-7">
            <p className="text-center text-xs font-semibold uppercase tracking-wider text-slate-400">
              Your referral code
            </p>
            <button
              type="button"
              onClick={handleCopy}
              aria-label={`Copy referral code ${code}`}
              className={`mt-2 flex w-full items-center justify-between gap-3 rounded-2xl border-2 border-dashed px-5 py-4 transition-all duration-200 ${
                copied
                  ? "scale-[1.015] border-emerald-300 bg-emerald-50"
                  : "border-blue-200 bg-blue-50/60 hover:border-blue-400 hover:bg-blue-50"
              }`}
            >
              <span className="font-mono text-2xl font-bold tracking-[0.3em] text-blue-700 sm:text-3xl">
                {code}
              </span>
              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-colors ${
                  copied ? "text-emerald-600" : "text-blue-600"
                }`}
              >
                {copied ? <CheckIcon /> : <CopyIcon />}
              </span>
            </button>
            <p
              aria-live="polite"
              className={`mt-2 text-center text-sm font-medium text-emerald-600 transition-opacity duration-200 ${
                copied ? "opacity-100" : "opacity-0"
              }`}
            >
              Copied to clipboard!
            </p>
          </div>

          {codeInvalid && (
            <p className="-mt-1 mb-1 text-center text-xs text-amber-600">
              This code may be expired, but you can still download the app below.
            </p>
          )}

          {/* Actions */}
          <div className="mt-5 space-y-3">
            <button
              type="button"
              onClick={handleOpenInApp}
              className="flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-[15px] font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:-translate-y-0.5 hover:bg-blue-700 sm:text-base"
            >
              Open in App
              <ArrowIcon />
            </button>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-2.5 rounded-2xl border border-slate-200 bg-white px-6 py-3.5 text-[15px] font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-900 sm:text-base"
            >
              <AppleIcon />
              Download on the App Store
            </a>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-xs text-center text-xs leading-relaxed text-slate-400">
          Don&apos;t have BizManage yet? Install it, then enter the code above
          when you create your account.
        </p>
      </div>
    </main>
  );
}

function CopyIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      aria-hidden="true"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

function AppleIcon() {
  return (
    <svg
      aria-hidden="true"
      width="18"
      height="18"
      viewBox="0 0 384 512"
      fill="currentColor"
    >
      <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
    </svg>
  );
}
