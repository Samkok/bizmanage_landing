import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://bizmanage.xtremon.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "BizManage | Small Business Command Center",
    template: "%s | BizManage",
  },
  description:
    "BizManage helps small business owners track sales, inventory, expenses, and teams from a single mobile dashboard.",
  openGraph: {
    title: "BizManage | Small Business Command Center",
    description:
      "Run every part of your small business from your phone with BizManage.",
    url: siteUrl,
    siteName: "BizManage",
    images: [
      {
        url: "/assets/mockups/dashboard.svg",
        width: 1200,
        height: 630,
        alt: "BizManage mobile preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BizManage | Small Business Command Center",
    description:
      "Manage sales, inventory, team access, and reports wherever you are.",
    images: ["/assets/mockups/dashboard.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-slate-50 text-slate-900 antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
