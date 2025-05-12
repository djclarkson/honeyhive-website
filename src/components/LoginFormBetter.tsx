import React, { useState, useEffect } from 'react';
import { authClient } from '../lib/auth-client';
import { AlertCircle, Loader2 } from 'lucide-react';
import ForgotPasswordForm from './ForgotPasswordForm';
import AuthDebug from './AuthDebug';
import ManualPasswordReset from './ManualPasswordReset';

interface LoginFormProps {
  onClose: () => void;
}

const LoginFormBetter: React.FC<LoginFormProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [name, setName] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showDebug, setShowDebug] = useState(false);
  const [useManualReset, setUseManualReset] = useState(false);

  // Check if Better Auth reset is available on mount
  useEffect(() => {
    const hasForgetPasswordMethod = typeof authClient.forgetPassword === 'function';
    console.log("forgetPassword method available:", hasForgetPasswordMethod);
    
    // If the Better Auth method isn't available, we'll use our manual implementation
    if (!hasForgetPasswordMethod) {
      setUseManualReset(true);
    }
  }, []);

  // For debugging purposes
  useEffect(() => {
    console.log("showForgotPassword state:", showForgotPassword);
  }, [showForgotPassword]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (isSignUp) {
        await authClient.signUp.email({
          email,
          password,
          name,
          callbackURL: '/dashboard'
        }, {
          onSuccess: () => {
            onClose();
          },
          onError: (ctx) => {
            setError(ctx.error.message);
          }
        });
      } else {
        await authClient.signIn.email({
          email,
          password,
          callbackURL: '/dashboard'
        }, {
          onSuccess: () => {
            onClose();
          },
          onError: (ctx) => {
            setError(ctx.error.message);
          }
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Authentication failed');
    } finally {
      setIsLoading(false);
    }
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Forgot password button clicked");
    setShowForgotPassword(true);
  };

  const toggleDebug = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowDebug(!showDebug);
  };

  // If showing forgot password form
  if (showForgotPassword) {
    console.log("Rendering password reset form");
    
    if (useManualReset) {
      return (
        <ManualPasswordReset
          onClose={onClose}
          onBackToLogin={() => setShowForgotPassword(false)}
        />
      );
    } else {
      return (
        <ForgotPasswordForm 
          onClose={onClose} 
          onBackToLogin={() => setShowForgotPassword(false)}
        />
      );
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl max-w-md w-full p-6 relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          &times;
        </button>
        
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? 'Create an Account' : 'Welcome Back'}
        </h2>
        
        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>{error}</span>
          </div>
        )}

        {/* Temporary debugging section */}
        <div className="mb-4">
          <button 
            onClick={toggleDebug}
            className="text-xs text-gray-500 underline"
          >
            {showDebug ? 'Hide Debug Info' : 'Show Debug Info'}
          </button>
          
          {showDebug && (
            <div className="mt-2">
              <AuthDebug email={email} />
              <div className="mt-2 p-2 bg-gray-50 rounded text-xs">
                <p>Using {useManualReset ? 'manual' : 'Better Auth'} password reset</p>
                <button 
                  onClick={() => setUseManualReset(!useManualReset)} 
                  className="mt-1 px-2 py-1 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Switch to {!useManualReset ? 'manual' : 'Better Auth'} reset
                </button>
              </div>
            </div>
          )}
        </div>
        
        <form onSubmit={handleSubmit}>
          {isSignUp && (
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your name"
                required
              />
            </div>
          )}
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="your.email@example.com"
              required
            />
          </div>
          
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              placeholder="••••••••"
              required
              minLength={8}
            />
          </div>
          
          {!isSignUp && (
            <div className="mb-6 text-right">
              <button 
                type="button" 
                onClick={handleForgotPassword}
                className="text-sm text-primary-600 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}
          
          {isSignUp && <div className="mb-6"></div>}
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors disabled:opacity-70 flex justify-center items-center"
          >
            {isLoading ? (
              <>
                <Loader2 className="animate-spin mr-2 h-4 w-4" />
                {isSignUp ? 'Creating Account...' : 'Signing In...'}
              </>
            ) : (
              isSignUp ? 'Sign Up' : 'Sign In'
            )}
          </button>
        </form>
        
        <div className="mt-4 text-center">
          <button 
            onClick={() => setIsSignUp(!isSignUp)} 
            className="text-primary-600 hover:underline"
          >
            {isSignUp 
              ? 'Already have an account? Sign In' 
              : 'Need an account? Sign Up'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginFormBetter; 