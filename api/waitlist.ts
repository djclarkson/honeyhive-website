import { Resend } from 'resend';
import express from 'express';
import * as dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';

// Load environment variables from .env file
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({ path: resolve(__dirname, '../.env') });

const app = express();
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

// Verify Turnstile token
async function verifyTurnstileToken(token: string): Promise<{
  success: boolean;
  error?: string;
  errorCodes?: string[];
}> {
  try {
    // Skip verification in development if configured to do so
    if (process.env.NODE_ENV === 'development' && process.env.SKIP_TURNSTILE_IN_DEV === 'true') {
      console.log('Skipping Turnstile verification in development');
      return { success: true };
    }

    // Get the secret key from environment variables
    const secretKey = process.env.TURNSTILE_SECRET || process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    
    if (!secretKey) {
      console.error('Turnstile secret key is not defined');
      return { success: false, error: 'CAPTCHA configuration error' };
    }

    // Prepare the request to Cloudflare API
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);

    // Make the request to Cloudflare API
    const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(verifyEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    // Parse the response
    const outcome = await result.json();
    
    if (!outcome.success) {
      console.error('Turnstile verification failed:', outcome);
      return { 
        success: false, 
        error: 'CAPTCHA verification failed', 
        errorCodes: outcome['error-codes'] 
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return { success: false, error: 'An error occurred during CAPTCHA verification' };
  }
}

app.post('/waitlist', async (req, res) => {
  console.log('Received waitlist request:', {
    method: req.method,
    body: req.body,
    headers: req.headers
  });

  try {
    const { email, turnstileToken } = req.body;

    if (!email) {
      console.log('Missing email in request body');
      return res.status(400).json({ error: 'Email is required' });
    }

    if (!turnstileToken) {
      console.log('Missing turnstile token in request body');
      return res.status(400).json({ error: 'CAPTCHA verification is required' });
    }

    // Verify turnstile token
    const verification = await verifyTurnstileToken(turnstileToken);
    if (!verification.success) {
      return res.status(400).json({ error: verification.error });
    }

    console.log('Sending confirmation email to:', email);
    
    // Send confirmation email to user
    const userEmailResult = await resend.emails.send({
      from: 'Hive42 <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to Hive42 Waitlist',
      html: `
        <h2>Welcome to Hive42!</h2>
        <p>Thank you for joining our waitlist. We're excited to have you on board!</p>
        <p>We'll notify you as soon as we're ready to welcome new users.</p>
        <br>
        <p>Best regards,</p>
        <p>The Hive42 Team</p>
      `
    });
    
    console.log('User email result:', userEmailResult);

    // Send notification to admin
    const adminEmailResult = await resend.emails.send({
      from: 'Hive42 <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL || 'admin@example.com',
      subject: 'New Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p>A new user has joined the waitlist:</p>
        <p>Email: ${email}</p>
      `
    });
    
    console.log('Admin email result:', adminEmailResult);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend API Error:', error);
    return res.status(500).json({ 
      error: error.message || 'Internal server error',
      details: process.env.NODE_ENV === 'development' ? error : undefined
    });
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});