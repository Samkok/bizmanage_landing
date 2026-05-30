import Image from "next/image";
import Link from "next/link";
import { FAQ } from "./components/faq";

const features = [
  {
    title: "Sales tracking",
    description: "Visualize daily revenue by channel and spot cash-flow gaps early.",
    icon: "💰",
  },
  {
    title: "Inventory management",
    description: "Monitor stock levels in real time and get low-inventory alerts.",
    icon: "📦",
  },
  {
    title: "Expenses logging",
    description: "Snap receipts, tag expenses, and keep every deduction organized.",
    icon: "🧾",
  },
  {
    title: "Basic reports",
    description: "Generate weekly snapshots that highlight trends that matter.",
    icon: "📊",
  },
  {
    title: "Customer management",
    description: "Keep customer notes, orders, and loyalty perks in one place.",
    icon: "👥",
  },
  {
    title: "Team member roles",
    description: "Assign permissions so everyone sees exactly what they need.",
    icon: "🛡️",
  },
  {
    title: "Multi-business switching",
    description: "Jump between storefronts or locations without logging out.",
    icon: "🔁",
  },
];

const steps = [
  {
    title: "Download & connect",
    description:
      "Install BizManage, link your sales channels, and import products in minutes.",
  },
  {
    title: "Customize workflows",
    description:
      "Set up expense categories, inventory alerts, and user roles that fit your team.",
  },
  {
    title: "Track live activity",
    description:
      "See sales, stock, and spending as they happen with clean dashboards.",
  },
  {
    title: "Act with confidence",
    description:
      "Use simple reports to plan restocks, manage cash, and coordinate your team.",
  },
];

const reasons = [
  "Lightning-fast experience on any modern phone",
  "Designed for busy owners—one thumb navigation",
  "Works with multiple locations or businesses",
  "Built for mobile-first teams with role-based access",
];

const faqItems = [
  {
    question: "What is BizManage?",
    answer:
      "BizManage is a mobile-first business management app designed for small business owners. It helps you track sales, manage inventory, log expenses, handle customer relationships, and generate basic reports—all from your phone.",
  },
  {
    question: "Is BizManage free to use?",
    answer:
      "BizManage offers a free trial that includes your first 10 sales transactions. After reaching this limit, if you wish to continue using the app, a paid subscription plan will be required. This allows you to experience the full functionality before committing to a subscription.",
  },
  {
    question: "Can I use BizManage for multiple businesses?",
    answer:
      "Yes! BizManage supports multi-business management. You can switch between different businesses or locations within the app without logging out. Each business operates independently with its own data and team members.",
  },
  {
    question: "How secure is my business data?",
    answer:
      "We use industry-standard security measures including encryption in transit and at rest, Row Level Security (RLS) for data isolation, and secure authentication through Supabase. Each business's data is completely isolated from others.",
  },
  {
    question: "Can I export my data?",
    answer:
      "Yes, you can export your business data in supported formats (CSV, Excel) at any time. We recommend exporting your data regularly as a backup, especially before making significant changes or deletions.",
  },
  {
    question: "Does BizManage process payments?",
    answer:
      "No, BizManage does not process payments. The app records sales transactions and tracks revenue, but all actual payment processing happens through your existing payment systems (POS, online payment gateways, etc.).",
  },
  {
    question: "Can I use BizManage's reports for tax filing?",
    answer:
      "BizManage's reports and analytics are provided for informational purposes only. They are not certified financial statements, audited reports, or tax-compliant documents. For tax filing and compliance, please consult with a certified accountant or tax professional.",
  },
  {
    question: "What happens if I delete my account?",
    answer:
      "Account deletion is permanent and irreversible. All your businesses, sales data, customer information, products, expenses, and uploaded files will be deleted. We recommend exporting your data before deletion. Team members will be notified if a business they're part of is deleted.",
  },
  {
    question: "How to delete an account?",
    answer: (
      <>
        For detailed step-by-step instructions on how to delete your account or
        business, please visit our{" "}
        <Link
          href="/delete-guide"
          className="font-semibold text-slate-900 underline hover:text-slate-700"
        >
          deletion guide page
        </Link>
        . The guide includes important information about what data will be
        deleted and recommendations before deletion.
      </>
    ),
  },
  {
    question: "Is there a desktop version?",
    answer:
      "BizManage is currently optimized for mobile devices (iOS and Android). The app is designed to work seamlessly on phones and tablets, giving you full control of your business operations on the go.",
  },
  {
    question: "How do I get support?",
    answer:
      "You can reach our support team through the contact form on this website or email us at hengsamkok76@gmail.com. We aim to respond within 3-5 business days. For urgent issues, please use the in-app support feature.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <Link href="/" className="text-xl font-semibold text-slate-900">
            BizManage
          </Link>
          <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
            <a href="#features" className="hover:text-slate-900">
              Features
            </a>
            <a href="#how-it-works" className="hover:text-slate-900">
              How it works
            </a>
            <a href="#why-bizmanage" className="hover:text-slate-900">
              Why BizManage
            </a>
            <a href="#faq" className="hover:text-slate-900">
              FAQ
            </a>
            <Link href="/contact" className="hover:text-slate-900">
              Contact
            </Link>
          </nav>
          <Link
            href="/contact"
            className="rounded-full border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 transition hover:border-slate-900 hover:bg-slate-900 hover:text-white"
          >
            Book a demo
          </Link>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-24 px-6 py-16">
        <section className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <span className="inline-flex items-center rounded-full bg-slate-100 px-4 py-1 text-xs font-semibold uppercase tracking-wide text-slate-600">
              Mobile control center
            </span>
            <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl">
              Manage your small business with clarity and control.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              BizManage brings sales, inventory, spending, and team activity
              together so you can keep every location humming—right from your
              phone.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="https://apps.apple.com/us/app/business-manager-pro-a11c2c/id6747810928"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-900/20 transition hover:-translate-y-0.5 hover:bg-slate-800"
              >
                <span aria-hidden="true"></span>
                Download on App Store
              </a>
              <a
                href="https://play.google.com/store/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:-translate-y-0.5 hover:border-slate-900"
              >
                <svg
                  aria-hidden="true"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M3 2l12.5 10L3 22V2zm13.6 10.3l3.4-2.1c1.5-.9 1.5-3.1 0-4l-3.4-2.1-4.6 4.1 4.6 4.1zm0 0l-4.6 4.1 4.6 2.9 3.4-2.1c1.5-.9 1.5-3.1 0-4l-3.4-.9z" />
                </svg>
                Get it on Google Play
              </a>
            </div>
            <div className="mt-10 grid gap-4 text-sm text-slate-600 sm:grid-cols-2">
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-3xl font-semibold text-slate-900">$48.2k</p>
                <p className="mt-1 text-sm text-emerald-600">+12% vs last week</p>
                <p className="mt-2">
                  Live revenue from POS, online, and wholesale channels.
                </p>
              </div>
              <div className="rounded-2xl border border-slate-200 bg-white p-4">
                <p className="text-3xl font-semibold text-slate-900">3</p>
                <p className="mt-1 text-sm text-sky-600">Stores in sync</p>
                <p className="mt-2">
                  Switch between coffee bar, catering, and events instantly.
                </p>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 rounded-[36px] bg-gradient-to-br from-sky-200 via-white to-indigo-100 blur-3xl" />
            <div className="relative flex items-center justify-center gap-4">
              <Image
                src="/assets/mockups/dashboard.svg"
                alt="BizManage dashboard preview"
                width={320}
                height={640}
                className="rounded-[36px] border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-900/10"
                priority
              />
              <Image
                src="/assets/mockups/analytics.svg"
                alt="BizManage analytics preview"
                width={260}
                height={520}
                className="hidden rounded-[30px] border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/5 lg:block"
              />
            </div>
          </div>
        </section>

        <section id="features" className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Features
            </p>
            <h2 className="section-heading mt-2">Everything owners need</h2>
            <p className="section-subtitle">
              BizManage replaces spreadsheets with fast, organized tools that
              work everywhere you do business.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm shadow-slate-900/5 transition hover:-translate-y-1 hover:border-slate-900/30"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-100 text-xl">
                  <span aria-hidden="true">{feature.icon}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="space-y-10 rounded-[40px] border border-slate-200 bg-white/80 p-8 shadow-lg shadow-slate-900/5">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              How it works
            </p>
            <h2 className="section-heading mt-2">
              A clear flow for daily operations
            </h2>
            <p className="section-subtitle">
              From onboarding to daily decisions, BizManage keeps every step
              intuitive so you can stay focused on customers.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-100 bg-slate-50/60 p-6"
              >
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-500">
                  <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white text-base text-slate-900 shadow-sm">
                    {index + 1}
                  </span>
                  Step {index + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="why-bizmanage" className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              Why BizManage
            </p>
            <h2 className="section-heading mt-2">
              Built for owners who move fast
            </h2>
            <p className="section-subtitle">
              Whether you run a single shop or a growing group of locations, you
              get the same clean control panel everywhere.
            </p>
            <ul className="mt-6 space-y-4">
              {reasons.map((reason) => (
                <li key={reason} className="flex items-start gap-3 text-slate-700">
                  <span
                    aria-hidden="true"
                    className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-700"
                  >
                    ✓
                  </span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>
          
        </section>

        <section id="faq" className="space-y-6">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
              FAQ
            </p>
            <h2 className="section-heading mt-2">Frequently asked questions</h2>
            <p className="section-subtitle">
              Everything you need to know about BizManage and how it can help your
              business.
            </p>
          </div>
          <FAQ items={faqItems} />
        </section>
      </main>

      <footer className="mt-24 border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} BizManage. All rights reserved.</p>
          <div className="flex flex-wrap gap-6">
            <Link href="/">Home</Link>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
