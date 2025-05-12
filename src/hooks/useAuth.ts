import { useState } from 'react';
import { User } from '../types';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const login = async (credentials: User) => {
    setLoading(true);
    setError(null);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (credentials.email === 'demo@honeyhive.com' && credentials.password === 'password') {
        setIsAuthenticated(true);
        return true;
      } else {
        setError('Invalid email or password');
        return false;
      }
    } catch (err) {
      setError('An error occurred during login');
      return false;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
  };

  const joinWaitlist = async (email: string, turnstileToken: string) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          email,
          turnstileToken 
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: 'Server error' }));
        throw new Error(errorData.error || `Server error: ${response.status}`);
      }

      const data = await response.json();
      return data.success;
    } catch (err) {
      console.error('Waitlist error:', err);
      setError(err instanceof Error ? err.message : 'Failed to join waitlist');
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    isAuthenticated,
    login,
    logout,
    joinWaitlist,
    loading,
    error,
  };
};