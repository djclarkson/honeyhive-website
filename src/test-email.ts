import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

async function testEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Hive42 <onboarding@resend.dev>',
      to: process.env.ADMIN_EMAIL,
      subject: 'Test Email',
      html: '<p>This is a test email from Hive42</p>'
    });

    if (error) {
      console.error('Error sending email:', error);
      return;
    }

    console.log('Test email sent successfully:', data);
  } catch (error) {
    console.error('Error:', error);
  }
}

testEmail();