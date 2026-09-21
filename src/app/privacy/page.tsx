import type { Metadata } from "next";
import type { ReactNode } from "react";

// Helper function to convert URLs in text to clickable links
function linkifyText(text: string): ReactNode {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    if (part.match(urlRegex)) {
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-slate-900 underline hover:text-slate-700"
        >
          {part}
        </a>
      );
    }
    return part;
  });
}

const sections = [
  {
    "title": "1. Introduction",
    "body": "BizManage (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This policy explains how we collect, use, safeguard, and disclose information when you use our mobile or web application."
  },
  {
    "title": "2. Information We Collect",
    "body": "2.1 Personal Information\n\n• Full name\n• Email address\n• Phone number\n• Physical address\n• Profile picture or avatar\n\n2.2 Business Information\n\n• Business name and logo\n• Product catalog and inventory details\n• Customer information and contact details\n• Sales records and transaction history\n• Expense records and categories\n• Team member information and roles\n\n2.3 Technical Information\n\n• Device information and identifiers\n• IP address and location data\n• Usage patterns and analytics\n• Session information and authentication tokens"
  },
  {
    "title": "3. How We Collect Information",
    "body": "3.1 Direct Collection: Information you provide when creating an account or using app features.\n\n3.2 Automated Collection: Technical data collected through cookies, device sensors, and usage tracking.\n\n3.3 Camera and File Access: Images you upload for products, business logos, and avatars."
  },
  {
    "title": "4. How We Use Your Information",
    "body": "We use your data to:\n\n• Provide and maintain app services\n• Process business transactions\n• Generate basic business analytics and summaries\n• Authenticate users and secure accounts\n• Improve app performance and user experience\n• Send updates and important notifications\n• Comply with legal obligations"
  },
  {
    "title": "5. Important Disclaimer: Reports and Analytics",
    "body": "5.1 Informational Only: All financial summaries, reports, and analytics are provided only for general understanding of your business.\n\n5.2 Not Official Documents: These are NOT:\n\n• Certified financial statements\n• Audited reports\n• Tax-compliant documents\n• Regulatory reporting\n• Official accounting records\n• Suitable for government submissions or legal proceedings\n\n5.3 Professional Advice Required: For accounting, tax, legal, or compliance matters, consult licensed professionals.\n\n5.4 No Accuracy Guarantee: We process data as provided. We do not verify, audit, or guarantee accuracy.\n\n5.5 No Liability: We are not responsible for any financial, legal, or business consequences arising from reliance on generated reports."
  },
  {
    "title": "6. Data Storage and Security",
    "body": "6.1 Storage: Data is stored using Supabase's secure cloud infrastructure.\n\n6.2 Encryption: Data is encrypted in transit and at rest.\n\n6.3 Row Level Security: Ensures users only access authorized data.\n\n6.4 Sessions: Sessions expire after one week of inactivity.\n\n6.5 Authentication: Supabase Auth with secure password hashing is used."
  },
  {
    "title": "7. Data Isolation and Multi-Tenancy",
    "body": "7.1 Business Isolation: Every business operates as a separate tenant.\n\n7.2 Role-Based Access: Permissions depend on user roles (Admin, Staff).\n\n7.3 Cross-Business Protection: Data from one business cannot be viewed from another."
  },
  {
    "title": "8. Data Sharing and Disclosure",
    "body": "8.1 We do not sell your data.\n\n8.2 We may share information with:\n\n• Supabase (hosting, authentication)\n• Authorized team members\n• Legal authorities when required\n\n8.3 Business Transfers: Your data may be transferred in case of merger, acquisition, or sale."
  },
  {
    "title": "9. Your Privacy Rights",
    "body": "You have the right to:\n\n• Access your data\n• Correct inaccurate data\n• Delete your account\n• Export your business data\n• Opt out of non-essential communication\n• Withdraw consent\n\n9.1 Data Deletion Options\n\nThere are two types of deletion:\n\n9.2 Business Deletion\n\nDeletes all data inside a specific business: sales, customers, products, expenses, files, and team associations.\n\nIrreversible. Only business owners can do this.\n\n9.3 Account Deletion\n\nDeletes your full account after deleting all businesses you own.\n\nRemoves your profile, login credentials, and all personal data.\n\n9.4 Recommendations Before Deletion\n\nWe suggest you:\n\n• Export business data\n• Download reports\n• Save customer contacts\n• Back up inventory and product details\n• Notify team members\n• Review your legal data retention requirements\n• Consult professionals when needed\n\n9.5 Limitations on Deletion\n\nWe cannot delete data that is:\n\n• Under legal hold\n• Needed for regulatory compliance\n• Stored as anonymized analytics\n• Required for dispute resolution\n• Needed for fraud prevention\n\n9.6 How to Request Deletion\n\nBusiness Deletion: Settings → Business Settings → Delete Business\n\nAccount Deletion: Settings → Privacy → Delete Account\n\nDeletion is immediate after confirmation."
  },
  {
    "title": "10. Data Retention and Deletion",
    "body": "10.1 Active Account Retention\n\nWe store your data while your account is active. No automatic deletion.\n\n10.2 Business Deletion\n\nAll business data is removed immediately using PostgreSQL CASCADE to ensure complete removal.\n\n10.3 Account Deletion\n\nDeletes your user profile, login credentials, all businesses you own, and all related data.\n\n10.4 Data Deleted During Removal\n\nIncludes:\n\n• Business settings and configuration\n• Sales and transaction history\n• Customer information\n• Product catalog and inventory\n• Expense records\n• Reports and analytics\n• Team relationships\n• Cart data\n• Uploaded files\n• Notification history\n• User profile (for account deletion)\n\n10.5 Deletion Timeline\n\nDatabase records: Removed within seconds\n\nStorage files: Deleted immediately\n\nCDN cache: May persist up to 7 days\n\nBackups: Retained up to 30 days\n\nAnalytics logs: Anonymized within 90 days\n\n10.6 Backup Retention\n\nBackups exist only for disaster recovery. They cannot be used to restore individual user data.\n\n10.7 Legal Retention\n\nSome data may be kept longer for:\n\n• Tax regulations\n• Fraud prevention\n• Court orders\n• Dispute resolution\n• Required compliance reporting\n\n10.8 Non-Deletable Data\n\nWe cannot remove:\n\n• Fully anonymized analytics\n• Aggregated statistics\n• Legally restricted data\n• Fraud investigation records"
  },
  {
    "title": "10A. Data Deletion Process and Guarantees",
    "body": "10A.1 Business Deletion Process:\n\nOnly owners can delete businesses. Requires a preview and two-step confirmation.\n\n10A.2 Account Deletion Process:\n\nRequires deleting all owned businesses first and confirming with your password.\n\n10A.3 Automatic CASCADE Deletion:\n\nAll related records are deleted in one atomic operation.\n\n10A.4 Storage File Removal:\n\nAll uploaded files are removed from cloud storage. CDN cache may take up to 7 days.\n\n10A.5 Team Member Notices:\n\nTeam members are automatically notified when a business is deleted.\n\n10A.6 Irreversibility:\n\nAll deletions are permanent and cannot be undone.\n\n10A.7 No Recovery Service:\n\nWe cannot restore deleted data from backups."
  },
  {
    "title": "11. Children's Privacy",
    "body": "The app is not intended for users under 18. If we learn we've collected data from a minor, we delete it quickly."
  },
  {
    "title": "12. International Data Transfers",
    "body": "Your data may be processed in other countries. We use appropriate safeguards to protect it."
  },
  {
    "title": "13. Cookies and Tracking",
    "body": "13.1 Essential Cookies: Used for authentication and app functionality.\n\n13.2 Analytics: Anonymous usage tracking.\n\n13.3 Local Storage: For preferences like theme and language."
  },
  {
    "title": "14. Third-Party Services",
    "body": "14.1. Supabase: Our backend infrastructure, authentication system, database, and file storage are provided by Supabase. They may process your data solely to deliver the services we rely on.\n\n14.2. Payment Processors (if applicable): If we introduce paid features in the future, payment processors may handle billing information securely.\n\n14.3. Analytics Providers: We may use privacy-focused analytics tools that collect anonymized usage data to help us improve the Application.\n\n14.4. Service Providers: We may share limited data with trusted providers that support hosting, security, notifications, or performance monitoring. All providers are required to follow strict confidentiality and data protection standards.\n\n14.5. No Third-Party Advertising Networks: We do not integrate third-party advertising SDKs or share your business data with marketing or advertising companies."
  },
  {
    "title": "15. Data Security Responsibilities",
    "body": "15.1. Your Responsibility: You are responsible for maintaining the confidentiality of your login credentials and restricting access to your device.\n\n15.2. Shared Devices: If you use a shared or public device, ensure you log out after each session.\n\n15.3. Suspicious Activity: Notify us immediately if you detect unauthorized access to your account.\n\n15.4. Password Strength: Use a strong password to reduce security risks. Weak passwords increase the risk of unauthorized access."
  },
  {
    "title": "16. Changes to This Privacy Policy",
    "body": "16.1. Policy Updates: We may update this Privacy Policy from time to time to reflect changes in business operations, legal requirements, or features added to the Application.\n\n16.2. Notification: Significant changes will be communicated through in-app notices or email.\n\n16.3. Continued Use: If you continue using the Application after updates, you accept the revised policy."
  },
  {
    "title": "17. Limited Liability",
    "body": "17.1. No Guarantee of Accuracy: Reports, analytics, and financial summaries are informational and depend entirely on the data you enter.\n\n17.2. No Financial or Legal Liability: We are not responsible for financial decisions, tax filings, compliance issues, or losses resulting from inaccurate or incomplete data.\n\n17.3. Third-Party Actions: We are not responsible for actions of third-party providers such as hosting, storage, or authentication services."
  },
  {
    "title": "18. User Obligations",
    "body": "18.1. Accurate Data: You are responsible for entering accurate and complete business information.\n\n18.2. Legal Compliance: You must comply with all applicable laws in your jurisdiction, including tax requirements and recordkeeping obligations.\n\n18.3. Acceptable Use: You may not use the Application for illegal activities, fraud, or unauthorized data access."
  },
  {
    "title": "19. Business Use Disclaimer",
    "body": "19.1. Not a Financial System: The Application is not a replacement for professional bookkeeping, accounting systems, or tax software.\n\n19.2. Professional Verification Recommended: If you rely on financial data for tax filing or legal matters, consult a certified accountant or legal advisor.\n\n19.3. No Regulatory Filings: Our reports cannot be used for government submissions, audits, investor due diligence, or formal business certifications."
  },
  {
    "title": "20. App Store Subscription Terms",
    "body": "20.1. Apple App Store Subscriptions: For subscriptions purchased through the Apple App Store, the following terms apply:\n\n• Payment will be charged to your Apple ID account at the confirmation of purchase.\n• Subscriptions automatically renew unless canceled at least 24 hours before the end of the current period.\n• Your account will be charged for renewal within 24 hours prior to the end of the current period.\n• You can manage or cancel your subscription in your App Store account settings.\n\n20.2. Google Play Store Subscriptions: BizManage is currently available on iOS only and is not yet offered on Android or the Google Play Store. If BizManage becomes available on Android in the future, subscriptions purchased through the Google Play Store will be governed by Google's subscription policies and can be managed through your Google Play account settings.\n\n20.3. Important Links:\n\nApple Terms of Use (EULA): https://www.apple.com/legal/internet-services/itunes/dev/stdeula\n\n20.4. Subscription Management: To manage your subscription, including viewing your subscription status, changing plans, or canceling:\n\n• iOS Users: Open Settings app → tap your name → Subscriptions → select BizManage\n\n20.5. Cancellation Policy: You may cancel your subscription at any time. Cancellation takes effect at the end of your current billing period. You will retain access to premium features until the end of the paid period.\n\n20.6. No Partial Refunds: If you cancel your subscription before the end of the current billing period, you will not receive a refund for the remaining time in that period unless required by applicable law or app store policy.\n\n20.7. Free Trial Terms: If we offer a free trial period, you will be charged the subscription fee at the end of the trial period unless you cancel before the trial ends. The trial period and its terms will be clearly displayed during the subscription purchase flow."
  },
  {
    "title": "21. Contact Information",
    "body": "If you have questions or concerns about this Privacy Policy, you may contact us at:\n\nEmail: hengsamkok76@gmail.com\n\nWebsite: https://bizmanage.xtremon.com/\n\nResponse Time: We aim to reply within 3–5 business days."
  },
  {
    "title": "22. Acceptance of This Policy",
    "body": "By creating an account or using the BizManage Application, you agree to the terms described in this Privacy Policy. If you do not agree with this policy, you must stop using the Application and request account deletion."
  },
];

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Understand how BizManage collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <div className="rounded-[32px] border border-slate-200 bg-white/90 p-10 shadow-lg shadow-slate-900/5">
        <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          Privacy Policy
        </p>
        <div className="mt-3 flex flex-col gap-2 text-sm text-slate-600">
          <p>Last Updated: November 25, 2025</p>
          <p>Version: 1.1.0</p>
        </div>
        <h1 className="mt-6 text-4xl font-bold text-slate-900">Your data, your call</h1>
        <p className="mt-4 text-base text-slate-600">
          BizManage is built for small business owners, so we treat every piece of
          information with the same care you do. Here's what we collect and how we
          handle it.
        </p>

        <div className="mt-10 space-y-8">
          {sections.map((section) => {
            // Split body into paragraphs and detect subpoints
            const paragraphs = section.body.split(/\n\n+/).filter((p) => p.trim());
            
            return (
            <section key={section.title}>
              <h2 className="text-xl font-semibold text-slate-900">{section.title}</h2>
                <div className="mt-3 space-y-4 text-sm text-slate-600">
                  {paragraphs.map((paragraph, idx) => {
                    const trimmed = paragraph.trim();
                    
                    // Check if it's a numbered subpoint (e.g., "3.1.", "4.2.", "10A.1", etc.)
                    const numberedMatch = trimmed.match(/^(\d+[A-Z]?\.\d+)\.\s+([\s\S]+)$/);
                    if (numberedMatch) {
                      const [, number, content] = numberedMatch;
                      // Check if content contains bullet points
                      const lines = content.split(/\n/).map((l) => l.trim()).filter((l) => l);
                      const firstLine = lines[0];
                      const remainingLines = lines.slice(1);
                      
                      // Check if remaining lines are bullet points
                      const hasBullets = remainingLines.length > 0 && remainingLines.every((l) => l.startsWith("•"));
                      
                      return (
                        <div key={idx} className="ml-6">
                          <p className="font-medium text-slate-800">
                            <span className="font-semibold">{number}.</span> {linkifyText(firstLine)}
                          </p>
                          {hasBullets && (
                            <ul className="mt-2 ml-4 list-disc space-y-1">
                              {remainingLines.map((line, lineIdx) => {
                                const bulletText = line.replace(/^•\s*/, "").trim();
                                return <li key={lineIdx}>{linkifyText(bulletText)}</li>;
                              })}
                            </ul>
                          )}
                          {!hasBullets && remainingLines.length > 0 && (
                            <div className="mt-2 ml-4 space-y-1">
                              {remainingLines.map((line, lineIdx) => (
                                <p key={lineIdx} className="text-slate-600">
                                  {linkifyText(line)}
                                </p>
                              ))}
                            </div>
                          )}
                        </div>
                      );
                    }
                    
                    // Check if paragraph contains bullet lists
                    const allLines = trimmed.split(/\n/).map((l) => l.trim()).filter((l) => l);
                    const bulletLines = allLines.filter((l) => l.startsWith("•"));
                    
                    if (bulletLines.length > 0) {
                      // Find where bullets start
                      const bulletStartIndex = allLines.findIndex((l) => l.startsWith("•"));
                      const textBeforeBullets = allLines.slice(0, bulletStartIndex).join(" ");
                      const bulletItems = bulletLines.map((line) => line.replace(/^•\s*/, "").trim());
                      
                      return (
                        <div key={idx}>
                          {textBeforeBullets && (
                            <p className="leading-relaxed mb-2">{linkifyText(textBeforeBullets)}</p>
                          )}
                          <ul className="ml-6 list-disc space-y-2">
                            {bulletItems.map((item, itemIdx) => (
                              <li key={itemIdx}>{linkifyText(item)}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    
                    // Regular paragraph
                    return (
                      <p key={idx} className="leading-relaxed">
                        {linkifyText(trimmed)}
                      </p>
                    );
                  })}
                </div>
            </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}

