import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Invalid email address." },
        { status: 400 },
      );
    }

    // Get recipient email from environment variable, fallback to support email
    const recipientEmail =
      process.env.CONTACT_EMAIL || "hengsamkok76@gmail.com";

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "BizManage Contact <onboarding@resend.dev>", // Update this with your verified domain
      to: recipientEmail,
      replyTo: email,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #334155; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #0f172a 0%, #1e293b 100%); padding: 30px; border-radius: 12px; margin-bottom: 20px;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px;">New Contact Form Submission</h1>
            </div>
            
            <div style="background: #f8fafc; border-radius: 8px; padding: 24px; margin-bottom: 20px;">
              <h2 style="color: #0f172a; margin-top: 0; font-size: 18px; font-weight: 600;">Contact Information</h2>
              
              <div style="margin-bottom: 16px;">
                <strong style="color: #475569; display: block; margin-bottom: 4px;">Name:</strong>
                <span style="color: #0f172a;">${name}</span>
              </div>
              
              <div style="margin-bottom: 16px;">
                <strong style="color: #475569; display: block; margin-bottom: 4px;">Email:</strong>
                <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
              </div>
              
              <div>
                <strong style="color: #475569; display: block; margin-bottom: 4px;">Message:</strong>
                <div style="background: #ffffff; padding: 16px; border-radius: 6px; border-left: 3px solid #2563eb; color: #0f172a; white-space: pre-wrap;">${message}</div>
              </div>
            </div>
            
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px;">
              <p style="margin: 0;">This email was sent from the BizManage contact form.</p>
              <p style="margin: 8px 0 0 0;">You can reply directly to this email to respond to ${name}.</p>
            </div>
          </body>
        </html>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}

---
This email was sent from the BizManage contact form.
You can reply directly to this email to respond to ${name}.
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Failed to send email. Please try again later." },
        { status: 500 },
      );
    }

    console.log("Contact form email sent successfully:", data);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred. Please try again later." },
      { status: 500 },
    );
  }
}

