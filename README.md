# BizManage Landing Site

Marketing website for the BizManage mobile app. Built with the Next.js 15 App Router, TypeScript, and TailwindCSS, and ready to deploy to Vercel.

## Tech Stack

- Next.js 15 (App Router)
- TypeScript
- TailwindCSS (via `@tailwindcss/postcss`)
- Resend for email delivery
- API route for contact form submissions

## Project Structure

```
src/
  app/
    page.tsx             # Landing page
    contact/page.tsx     # Contact form
    privacy/page.tsx     # Privacy policy
    api/contact/route.ts # POST endpoint that sends contact form emails via Resend
public/assets/mockups    # Replaceable phone mockup placeholders
```

## Running Locally

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to view the site. Update the placeholder mockup SVGs in `public/assets/mockups/` with your own screenshots at any time.

### Testing Email Functionality Locally

1. **Get a Resend API Key:**
   - Sign up for a free account at [resend.com](https://resend.com) (free tier includes 3,000 emails/month)
   - Go to [API Keys](https://resend.com/api-keys) and create a new API key
   - Copy the API key (starts with `re_`)

2. **Create Environment File:**
   - Create a `.env.local` file in the project root:
   ```bash
   # Windows (PowerShell)
   New-Item .env.local
   
   # Mac/Linux
   touch .env.local
   ```

3. **Add Environment Variables:**
   Open `.env.local` and add:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   CONTACT_EMAIL=your-email@example.com
   ```
   Replace `your-email@example.com` with your actual email address where you want to receive contact form submissions.

4. **Restart the Dev Server:**
   - Stop the current dev server (Ctrl+C)
   - Start it again: `npm run dev`
   - Environment variables are only loaded when the server starts

5. **Test the Contact Form:**
   - Navigate to `http://localhost:3000/contact`
   - Fill out the form with test data:
     - Name: Your name
     - Email: Your email
     - Message: Test message
   - Click "Send Message"
   - You should see a success message
   - Check your email inbox (and spam folder) for the contact form submission

6. **Check the Console:**
   - Look at your terminal where `npm run dev` is running
   - You should see: `Contact form email sent successfully: { id: '...' }`
   - If there are errors, they'll be logged here

**Troubleshooting:**
- If you get "Failed to send email", check that:
  - Your `.env.local` file exists and has the correct variable names
  - The Resend API key is correct and active
  - You've restarted the dev server after adding environment variables
  - Check the terminal console for specific error messages

## Contact API & Email Setup

- Endpoint: `POST /api/contact`
- Body: `{ name: string, email: string, message: string }`
- Action: Sends contact form submissions via email using Resend.

### Environment Variables

Create a `.env.local` file in the project root with the following variables:

```env
# Resend API Key (get from https://resend.com/api-keys)
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

# Contact form recipient email
CONTACT_EMAIL=hengsamkok76@gmail.com
```

### Setting Up Resend

1. Sign up for a free account at [Resend](https://resend.com)
2. Get your API key from the [API Keys page](https://resend.com/api-keys)
3. Add the API key to your `.env.local` file
4. For production, update the `from` email address in `src/app/api/contact/route.ts` to use your verified domain
5. Add environment variables to your Vercel project (see "Deploying to Vercel" below)

**Note:** The default `from` address uses Resend's test domain. For production, you'll need to verify your own domain in Resend and update the `from` field in the API route.

## Deploying to Vercel

This repo deploys to Vercel automatically: pushing to the `main` branch triggers a
production deployment via Vercel's GitHub integration. Vercel auto-detects the Next.js
App Router (including the `/api/contact` route and the dynamic `/refer/[code]` route) —
no `vercel.json` or other config is required.

### Environment variables (Vercel dashboard)

`.env.local` is gitignored, so it is **not** pushed to GitHub and its values do not reach
Vercel. Set the environment variables you need under **Project Settings → Environment
Variables** (for the Production, Preview, and Development scopes as appropriate):

| Variable | Required? | Notes |
| --- | --- | --- |
| `RESEND_API_KEY` | **Required** for the contact form | Secret. Without it, `POST /api/contact` cannot send email. |
| `CONTACT_EMAIL` | Optional | Recipient for contact submissions. Defaults to `hengsamkok76@gmail.com`. |
| `NEXT_PUBLIC_SUPABASE_URL` | Optional | Supabase project URL for referral-click tracking. The referral page falls back to a baked-in public default, so this is only needed to override it. |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Optional | Supabase anon (publishable) key. Public by design; also has a baked-in default. |

After changing environment variables in Vercel, redeploy (or push a new commit) so the
build picks them up — `NEXT_PUBLIC_*` values are inlined at build time.
