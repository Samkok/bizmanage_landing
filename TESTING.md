# Testing Email Functionality Locally

## Quick Start Guide

### Step 1: Get Resend API Key

1. Go to [resend.com](https://resend.com) and sign up (free account)
2. Navigate to [API Keys](https://resend.com/api-keys)
3. Click "Create API Key"
4. Copy the key (it starts with `re_`)

### Step 2: Set Up Environment Variables

Create a `.env.local` file in the project root:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_EMAIL=your-email@example.com
```

**Important:** Replace `your-email@example.com` with your actual email address.

### Step 3: Install Dependencies & Start Server

```bash
npm install
npm run dev
```

**Note:** Make sure to restart the dev server after creating/updating `.env.local` - environment variables are only loaded on server start.

### Step 4: Test the Contact Form

1. Open your browser and go to: `http://localhost:3000/contact`
2. Fill out the form:
   - **Name:** Test User
   - **Email:** test@example.com
   - **Message:** This is a test message
3. Click "Send Message"
4. You should see: "Thanks! We received your message."
5. Check your email inbox (the one you set in `CONTACT_EMAIL`)

### Step 5: Verify Email Was Sent

- Check your email inbox (and spam/junk folder)
- You should receive an email with:
  - Subject: "New Contact Form Submission from Test User"
  - The sender's name, email, and message
  - Reply-to set to the form submitter's email

### Troubleshooting

#### "Failed to send email" Error

1. **Check environment variables:**
   ```bash
   # Verify .env.local exists and has correct format
   cat .env.local  # Mac/Linux
   type .env.local  # Windows
   ```

2. **Verify API key:**
   - Make sure the API key starts with `re_`
   - Check it's active in your Resend dashboard
   - Ensure no extra spaces or quotes around the key

3. **Check server console:**
   - Look at the terminal where `npm run dev` is running
   - Error messages will show what went wrong

4. **Restart the server:**
   - Stop the server (Ctrl+C)
   - Run `npm run dev` again
   - Environment variables are only loaded on startup

#### Email Not Received

1. Check spam/junk folder
2. Verify `CONTACT_EMAIL` is set correctly
3. Check Resend dashboard for delivery status
4. Make sure you're using a valid email address

#### API Key Issues

- Free Resend accounts have rate limits (3,000 emails/month)
- Make sure your API key is not expired
- Verify the key has "Send Email" permissions

### Testing with cURL (Optional)

You can also test the API directly:

```bash
curl -X POST http://localhost:3000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test message"
  }'
```

Expected response:
```json
{"success": true}
```

### Expected Console Output

When email is sent successfully, you should see in your terminal:
```
Contact form email sent successfully: { id: 'abc123...' }
```

If there's an error:
```
Resend error: { message: '...', statusCode: ... }
```

## Next Steps

Once local testing works:
1. Update the `from` email in `src/app/api/contact/route.ts` to use your verified domain
2. Add environment variables to your production hosting platform
3. Test in production environment

