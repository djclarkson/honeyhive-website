import { createAuthClient } from 'better-auth/react';

// Create and export the client-side auth instance
export const authClient = createAuthClient({
  // If your API is on a different domain, set baseURL
  // In development/production with the same domain, this can be omitted
  baseURL: window.location.origin,
});

// Export useSession hook
export const { useSession } = authClient;

// Custom hook to check if user is authenticated
export const useIsAuthenticated = () => {
  const { data: session, isPending } = useSession();
  return {
    isAuthenticated: !!session,
    isPending
  };
}; 