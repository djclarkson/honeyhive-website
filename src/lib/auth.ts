import { betterAuth } from 'better-auth';

interface User {
  email: string;
  id: string;
  role?: string;
  organization?: string;
}

interface VerificationParams {
  user: User;
  url: string;
  token: string;
}

// Server-side auth setup
export const auth = betterAuth({
  // Enable email/password authentication
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    sendVerificationEmail: async ({ user, url, token }: VerificationParams, request: any) => {
      // In a real app, you would send the email
      console.log(`Verification email to ${user.email}: ${url}`);
    },
    sendResetPassword: async ({ user, url, token }: VerificationParams, request: any) => {
      // In a real app, you would send the email using a proper email service
      console.log(`Reset password email to ${user.email}: ${url}`);
      
      // Example of what would happen in a real implementation:
      // const emailService = new EmailService();
      // await emailService.sendEmail({
      //   to: user.email,
      //   subject: 'Reset Your HoneyHive Password',
      //   html: `
      //     <h2>Reset Your Password</h2>
      //     <p>Hello,</p>
      //     <p>You requested to reset your password for your HoneyHive account.</p>
      //     <p>Please click the link below to reset your password:</p>
      //     <p><a href="${url}" target="_blank">Reset Password</a></p>
      //     <p>If you didn't request this, you can safely ignore this email.</p>
      //     <p>This link will expire in 1 hour.</p>
      //     <p>Thank you,<br>The HoneyHive Team</p>
      //   `
      // });
    }
  },

  // Configure session settings
  session: {
    expiresIn: 60 * 60 * 24 * 7, // 7 days
    updateAge: 60 * 60 * 24 // 1 day refresh
  },

  // Extended user schema
  user: {
    additionalFields: {
      role: {
        type: 'string',
        required: false,
        defaultValue: 'user',
        input: false, // Cannot be set by users
      },
      organization: {
        type: 'string',
        required: false,
      }
    }
  }
});

// Export an API for getting session data
export const getServerSession = async (headers: Headers) => {
  return await auth.api.getSession({ headers });
};

// Function to check if user is authenticated
export const isAuthenticated = async (headers: Headers) => {
  const session = await getServerSession(headers);
  return !!session;
};

// Function to check user role
export const hasRole = async (headers: Headers, role: string) => {
  const session = await getServerSession(headers);
  return session?.user?.role === role;
}; 