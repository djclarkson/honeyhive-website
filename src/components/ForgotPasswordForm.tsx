import React, { useState, useEffect } from 'react';
import { authClient } from '../lib/auth-client';
import { AlertCircle, Loader2, CheckCircle, Info } from 'lucide-react';

interface ForgotPasswordFormProps {
  onClose: () => void;
  onBackToLogin: () => void;
}

const ForgotPasswordForm: React.FC<ForgotPasswordFormProps> = ({ onClose, onBackToLogin }) => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [debugInfo, setDebugInfo] = useState<string | null>(null);

  // Debug on mount
  useEffect(() => {
    console.log("ForgotPasswordForm mounted");
    console.log("authClient available:", !!authClient);
    
    // Check if forgetPassword method exists
    const hasForgetPassword = typeof authClient.forgetPassword === 'function';
    console.log("forgetPassword method available:", hasForgetPassword);
    
    if (!hasForgetPassword) {
      setDebugInfo("Warning: Password reset functionality may not be available in the current version of Better Auth.");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);
    console.log("Submitting forgot password for:", email);

    try {
      if (typeof authClient.forgetPassword !== 'function') {
        throw new Error("Password reset functionality is not available");
      }

      await authClient.forgetPassword({
        email,
        redirectTo: window.location.origin + '/reset-password',
      }, {
        onSuccess: () => {
          console.log("Password reset email sent successfully");
          setIsSuccess(true);
        },
        onError: (ctx: { error: { message: string } }) => {
          console.error("Password reset error:", ctx.error);
          setError(ctx.error.message);
        }
      });
    } catch (err) {
      console.error("Caught error in forgot password:", err);
      setError(err instanceof Error ? err.message : 'Failed to process request');
    } finally {
      setIsLoading(false);
    }
  };

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
          Reset Password
        </h2>
        
        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-md mb-4 flex items-center">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
        
        {debugInfo && (
          <div className="bg-yellow-50 text-yellow-700 p-3 rounded-md mb-4 flex items-center">
            <Info className="w-5 h-5 mr-2 flex-shrink-0" />
            <span>{debugInfo}</span>
          </div>
        )}

        {isSuccess ? (
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Reset Link Sent</h3>
            <p className="text-gray-600 mb-6">
              We've sent password reset instructions to {email}. Please check your email.
            </p>
            <button
              onClick={onClose}
              className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <p className="text-gray-600 mb-4">
              Enter your email address and we'll send you a link to reset your password.
            </p>
            
            <div className="mb-6">
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
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors disabled:opacity-70 flex justify-center items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Sending Reset Link...
                </>
              ) : (
                'Send Reset Link'
              )}
            </button>

            <div className="mt-4 text-center">
              <button 
                type="button"
                onClick={onBackToLogin} 
                className="text-primary-600 hover:underline"
              >
                Back to Login
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ForgotPasswordForm; 