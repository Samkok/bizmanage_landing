import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send a note to the BizManage team.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-16">
      <div className="rounded-[32px] border border-slate-200 bg-white/90 p-8 shadow-lg shadow-slate-900/5 md:p-12">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Contact
        </p>
        <h1 className="mt-3 text-4xl font-bold text-slate-900">Send us a message</h1>
        <p className="mt-4 text-base text-slate-600">
          Questions about BizManage? Share a bit about your business and we’ll
          get back within one business day.
        </p>

        <ContactForm />
      </div>
    </main>
  );
}