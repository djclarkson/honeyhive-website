import { createClient } from '@supabase/supabase-js';

// Define user interface for type consistency
export interface User {
  email: string;
  id: string;
  role?: string;
  organization?: string;
}

// Add type declaration for window
declare global {
  interface Window {
    VITE_SUPABASE_URL?: string;
    VITE_SUPABASE_ANON_KEY?: string;
    env?: {
      CLOUDFLARE_TURNSTILE_SITE_KEY?: string;
    };
  }
}

// Initialize Supabase client - these URLs should be loaded from environment variables in production
const supabaseUrl = 
  // First try build-time env vars
  import.meta.env.VITE_SUPABASE_URL || 
  // Then try runtime global vars (for GitHub Pages)
  (typeof window !== 'undefined' ? window.VITE_SUPABASE_URL : '') || 
  '';

const supabaseAnonKey = 
  import.meta.env.VITE_SUPABASE_ANON_KEY || 
  (typeof window !== 'undefined' ? window.VITE_SUPABASE_ANON_KEY : '') || 
  '';

// For debugging
if (typeof window !== 'undefined') {
  console.log("Supabase URL source:", 
    import.meta.env.VITE_SUPABASE_URL ? "import.meta.env" : 
    window.VITE_SUPABASE_URL ? "window.VITE_SUPABASE_URL" : "not found");
  console.log("Supabase URL:", supabaseUrl ? "✓ (set)" : "✗ (not set)");
  console.log("Supabase Key:", supabaseAnonKey ? "✓ (set)" : "✗ (not set)");
}

// Create Supabase client
const supabaseClient = createClient(supabaseUrl, supabaseAnonKey);

// Export for direct use where needed
export const supabase = supabaseClient;

// Auth handling functions
export const auth = {
  // Sign up with email and password
  signUp: async ({ email, password, organization }: { email: string; password: string; organization?: string }) => {
    const { data, error } = await supabaseClient.auth.signUp({
      email,
      password,
      options: {
        data: {
          organization
        }
      }
    });
    
    if (error) throw error;
    return data;
  },
  
  // Sign in with email and password
  signIn: async ({ email, password }: { email: string; password: string }) => {
    const { data, error } = await supabaseClient.auth.signInWithPassword({
      email,
      password
    });
    
    if (error) throw error;
    return data;
  },
  
  // Sign out
  signOut: async () => {
    const { error } = await supabaseClient.auth.signOut();
    if (error) throw error;
  },
  
  // Reset password
  resetPassword: async (email: string) => {
    const { error } = await supabaseClient.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });
    
    if (error) throw error;
  },
  
  // Set new password (after reset)
  updatePassword: async (newPassword: string) => {
    const { error } = await supabaseClient.auth.updateUser({
      password: newPassword
    });
    
    if (error) throw error;
  },
  
  // Get current session
  getSession: async () => {
    const { data: { session }, error } = await supabaseClient.auth.getSession();
    if (error) throw error;
    return session;
  },
  
  // Get current user
  getUser: async () => {
    const { data: { user }, error } = await supabaseClient.auth.getUser();
    if (error) throw error;
    return user;
  }
};

// Export a server-side session getter for use in protected routes
export const getServerSession = async (headers: Headers) => {
  const authHeader = headers.get('Authorization');
  if (!authHeader) return null;
  
  // Create a new Supabase client with the auth header
  const supabaseServer = createClient(supabaseUrl, supabaseAnonKey, {
    global: {
      headers: {
        Authorization: authHeader
      }
    }
  });
  
  const { data: { session }, error } = await supabaseServer.auth.getSession();
  if (error || !session) return null;
  
  return session;
};

// Function to check if user is authenticated
export const isAuthenticated = async (headers: Headers) => {
  const session = await getServerSession(headers);
  return !!session;
};

// Function to check user role
export const hasRole = async (headers: Headers, role: string) => {
  const session = await getServerSession(headers);
  if (!session?.user) return false;
  
  // Get complete user profile from the database to get role
  const { data, error } = await supabaseClient
    .from('users')
    .select('role')
    .eq('id', session.user.id)
    .single();
  
  if (error || !data) return false;
  
  return data.role === role;
}; 