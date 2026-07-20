import type { Metadata } from "next";
import { ReferralClient } from "./referral-client";

type PageProps = {
  params: Promise<{ code: string }>;
};

// Referral codes are always 8 uppercase alphanumeric characters. We normalize
// whatever arrives in the URL so shared links work regardless of casing.
function normalizeCode(raw: string): string {
  return (raw ?? "").trim().toUpperCase();
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { code } = await params;
  const referralCode = normalizeCode(code);

  const title = "You've been invited to BizManage";
  // No specific reward promise here — this string is the share/OG preview shown
  // in messaging apps, so it must match what the backend actually grants (B8).
  const description = `Use referral code ${referralCode} when you sign up for BizManage, so your friend gets credit for the invite.`;

  return {
    title,
    description,
    // Referral URLs are personal, transient links shared over messaging apps —
    // they shouldn't be indexed by search engines.
    robots: { index: false, follow: false },
    openGraph: {
      title: `${title} 🎉`,
      description,
      type: "website",
    },
    twitter: {
      card: "summary",
      title: `${title} 🎉`,
      description,
    },
  };
}

export default async function ReferPage({ params }: PageProps) {
  const { code } = await params;
  return <ReferralClient code={normalizeCode(code)} />;
}
