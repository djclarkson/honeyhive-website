import { Resend } from 'npm:resend@3.2.0';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { email } = await req.json();
    
    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const resend = new Resend(Deno.env.get('RESEND_API_KEY'));

    // Send confirmation email
    await resend.emails.send({
      from: 'HoneyHive <onboarding@resend.dev>',
      to: email,
      subject: 'Welcome to HoneyHive Waitlist',
      html: `
        <h2>Welcome to HoneyHive!</h2>
        <p>Thank you for joining our waitlist. We're excited to have you on board!</p>
        <p>We'll notify you as soon as we're ready to welcome new users.</p>
        <br>
        <p>Best regards,</p>
        <p>The HoneyHive Team</p>
      `
    });

    // Send notification to admin
    await resend.emails.send({
      from: 'HoneyHive <test@updates.honeyhive.com>',
      to: 'admin@honeyhive.com', // Replace with your admin email
      subject: 'New Waitlist Signup',
      html: `
        <h2>New Waitlist Signup</h2>
        <p>A new user has joined the waitlist:</p>
        <p>Email: ${email}</p>
      `
    });

    return new Response(
      JSON.stringify({ success: true }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});