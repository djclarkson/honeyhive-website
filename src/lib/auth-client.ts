import { supabase } from './auth';
import { useEffect, useState } from 'react';
import type { Session } from '@supabase/supabase-js';

// Create a client-side auth helper
export const authClient = {
  // Sign up with email and password
  signUp: {
    email: async ({ email, password, name, organization }: { 
      email: string; 
      password: string; 
      name?: string; 
      organization?: string;
      callbackURL?: string; 
    }, options?: { 
      onSuccess?: () => void; 
      onError?: (ctx: { error: Error }) => void; 
    }) => {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password,
          options: {
            data: {
              name,
              organization
            }
          }
        });
        
        if (error) throw error;
        if (options?.onSuccess) options.onSuccess();
        return data;
      } catch (error) {
        if (options?.onError) options.onError({ error: error as Error });
        throw error;
      }
    }
  },
  
  // Sign in with email and password
  signIn: {
    email: async ({ email, password, callbackURL }: { 
      email: string; 
      password: string;
      callbackURL?: string;
    }, options?: { 
      onSuccess?: () => void; 
      onError?: (ctx: { error: Error }) => void; 
    }) => {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        });
        
        if (error) throw error;
        if (options?.onSuccess) options.onSuccess();
        return data;
      } catch (error) {
        if (options?.onError) options.onError({ error: error as Error });
        throw error;
      }
    }
  },
  
  // Sign out
  signOut: async () => {
    return await supabase.auth.signOut();
  },
  
  // Reset password
  forgetPassword: async ({ email, redirectTo }: { 
    email: string; 
    redirectTo?: string; 
  }, options?: { 
    onSuccess?: () => void; 
    onError?: (ctx: { error: Error }) => void; 
  }) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: redirectTo || `${window.location.origin}/reset-password`,
      });
      
      if (error) throw error;
      if (options?.onSuccess) options.onSuccess();
    } catch (error) {
      if (options?.onError) options.onError({ error: error as Error });
      throw error;
    }
  },
  
  // Get current session
  getSession: async () => {
    const { data, error } = await supabase.auth.getSession();
    if (error) throw error;
    return data.session;
  },
  
  // Get current user
  getUser: async () => {
    const { data, error } = await supabase.auth.getUser();
    if (error) throw error;
    return data.user;
  },
  
  // Update password
  updatePassword: async (newPassword: string) => {
    const { error } = await supabase.auth.updateUser({
      password: newPassword
    });
    
    if (error) throw error;
  }
};

// Custom hook to check if user is authenticated
export const useIsAuthenticated = () => {
  const [session, setSession] = useState<Session | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    authClient.getSession()
      .then(session => {
        setSession(session);
        setIsLoading(false);
      })
      .catch(() => {
        setSession(null);
        setIsLoading(false);
      });

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    // Clean up subscription
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return {
    isAuthenticated: !!session,
    session,
    isLoading
  };
}; 