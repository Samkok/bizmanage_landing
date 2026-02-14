import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to Delete Account or Business",
  description:
    "Step-by-step guide on how to delete your BizManage account or business, including important information about data deletion.",
};

const steps = [
  {
    title: "Before You Delete",
    items: [
      "Export your business data (CSV, Excel formats available)",
      "Download any reports you need to keep",
      "Save customer contact information",
      "Back up inventory and product details",
      "Notify team members if you're deleting a business",
      "Review your legal data retention requirements",
      "Consult with professionals if needed for tax or compliance matters",
    ],
  },
  {
    title: "How to Delete a Business",
    items: [
      "Open the BizManage app on your device",
      "Navigate to Settings",
      "Select Delete Business in the Danger Zone section",
      "Check the confirmation box to agree to the conditions of deleting the business",
      "Type the business name exactly as it appears for final confirmation",
      "The business will be deleted immediately after confirmation",
    ],
    note: "Note: Only the owner of the business can delete their own business.",
    warning:
      "This action is permanent and irreversible. All business data including sales, customers, products, expenses, files, and team associations will be deleted immediately.",
  },
  {
    title: "How to Delete Your Account",
    items: [
      "First, delete all businesses you own (see steps above)",
      "Open the BizManage app on your device",
      "Navigate to Settings",
      "Select Delete Account in the Danger Zone section",
      "Check the confirmation box to agree to the terms of account deletion",
      "Type in your own email address for final confirmation",
      "Your account will be deleted immediately after confirmation",
    ],
    warning:
      "Account deletion removes your user profile, login credentials, all businesses you own, and all related data. This cannot be undone.",
  },
];

const dataDeleted = [
  "Business settings and configuration",
  "Sales and transaction history",
  "Customer information",
  "Product catalog and inventory",
  "Expense records",
  "Reports and analytics",
  "Team relationships",
  "Cart data",
  "Uploaded files (images, logos, avatars)",
  "Notification history",
  "User profile (for account deletion)",
];

const timeline = [
  { item: "Database records", time: "Removed within seconds" },
  { item: "Storage files", time: "Deleted immediately" },
  { item: "CDN cache", time: "May persist up to 7 days" },
  { item: "Backups", time: "Retained up to 30 days" },
  { item: "Analytics logs", time: "Anonymized within 90 days" },
];

export default function DeleteGuidePage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-lg shadow-slate-900/5">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Deletion Guide
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">
          How to Delete Your Account or Business
        </h1>
        <p className="mt-4 text-base text-slate-600">
          This guide provides step-by-step instructions for deleting your
          BizManage account or individual businesses. Please read carefully
          before proceeding, as deletion is permanent and irreversible.
        </p>

        <div className="mt-10 space-y-10">
          {steps.map((step, index) => (
            <section key={index} className="space-y-4">
              <h2 className="text-2xl font-semibold text-slate-900">
                {index + 1}. {step.title}
              </h2>
              {step.warning && (
                <div className="rounded-2xl border-2 border-rose-200 bg-rose-50 p-4">
                  <p className="text-sm font-semibold text-rose-900">
                    ⚠️ Important Warning
                  </p>
                  <p className="mt-2 text-sm text-rose-800">
                    {step.warning}
                  </p>
                </div>
              )}
              {step.note && (
                <div className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
                  <p className="text-sm font-medium text-amber-900">
                    {step.note}
                  </p>
                </div>
              )}
              <ol className="ml-6 list-decimal space-y-3">
                {step.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-slate-700">
                    {item}
                  </li>
                ))}
              </ol>
            </section>
          ))}

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              What Data Will Be Deleted
            </h2>
            <p className="text-sm text-slate-600">
              When you delete a business or account, the following data will be
              permanently removed:
            </p>
            <ul className="ml-6 list-disc space-y-2">
              {dataDeleted.map((item, index) => (
                <li key={index} className="text-sm text-slate-700">
                  {item}
                </li>
              ))}
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Deletion Timeline
            </h2>
            <p className="text-sm text-slate-600">
              Here's how long it takes for different types of data to be fully
              removed:
            </p>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="space-y-3">
                {timeline.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between border-b border-slate-200 pb-3 last:border-0 last:pb-0"
                  >
                    <span className="text-sm font-medium text-slate-900">
                      {item.item}
                    </span>
                    <span className="text-sm text-slate-600">{item.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="space-y-4 rounded-2xl border border-amber-200 bg-amber-50 p-6">
            <h2 className="text-xl font-semibold text-amber-900">
              Important Notes
            </h2>
            <ul className="ml-6 list-disc space-y-2 text-sm text-amber-800">
              <li>
                Team members will be automatically notified when a business is
                deleted
              </li>
              <li>
                Deletions use PostgreSQL CASCADE to ensure complete removal of all
                related records
              </li>
              <li>
                We cannot restore deleted data from backups—deletion is
                permanent
              </li>
              <li>
                Some data may be retained longer if required by law (tax
                regulations, court orders, fraud prevention)
              </li>
              <li>
                Backups exist only for disaster recovery and cannot be used to
                restore individual user data
              </li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-slate-900">
              Need Help?
            </h2>
            <p className="text-sm text-slate-600">
              If you have questions about deletion or need assistance, please{" "}
              <Link
                href="/contact"
                className="font-semibold text-slate-900 underline hover:text-slate-700"
              >
                contact our support team
              </Link>
              . We aim to respond within 3–5 business days.
            </p>
          </section>

          <div className="pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-slate-900 hover:text-slate-700"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

