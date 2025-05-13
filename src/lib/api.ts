// API utility functions for interacting with Supabase Edge Functions
import { supabase } from './auth';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || '';

/**
 * Call a Supabase Edge Function
 * @param functionName - Name of the edge function to call
 * @param data - Data to send to the function
 * @param options - Optional fetch options
 * @returns The function response
 */
export async function callEdgeFunction<T = any, U = any>(
  functionName: string, 
  data?: U,
  options: Omit<RequestInit, 'headers'> & { headers?: Record<string, string> } = {}
): Promise<T> {
  try {
    // Get the current session for authentication
    const { data: { session } } = await supabase.auth.getSession();
    
    // Build the URL to the edge function
    const url = `${SUPABASE_URL}/functions/v1/${functionName}`;
    
    // Prepare headers
    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      ...options.headers || {},
    };
    
    // Add authentication if available
    if (session?.access_token) {
      headers['Authorization'] = `Bearer ${session.access_token}`;
    }
    
    // Make the request
    const response = await fetch(url, {
      method: 'POST',
      headers,
      body: data ? JSON.stringify(data) : undefined,
      ...options,
    });
    
    // Handle errors
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Error ${response.status}: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error(`Error calling ${functionName} edge function:`, error);
    throw error;
  }
}

// Example specialized function for the waitlist
export async function joinWaitlist(email: string) {
  return callEdgeFunction<{ success: boolean }, { email: string }>(
    'waitlist', 
    { email }
  );
} 