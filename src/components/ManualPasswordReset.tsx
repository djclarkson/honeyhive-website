import React, { useState, useEffect } from 'react';
import { Loader2, CheckCircle, AlertCircle, Info } from 'lucide-react';
import TurnstileWidget from './TurnstileWidget';

interface ManualPasswordResetProps {
  onClose: () => void;
  onBackToLogin: () => void;
  initialEmail?: string;
}

/**
 * A simple fallback password reset component that doesn't depend on the Better Auth API.
 * This is useful for demonstration purposes or when the real API is not yet available.
 */
const ManualPasswordReset: React.FC<ManualPasswordResetProps> = ({ 
  onClose, 
  onBackToLogin,
  initialEmail = ''
}) => {
  const [email, setEmail] = useState(initialEmail);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [touched, setTouched] = useState(false);

  // Email validation regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Validate email whenever it changes
  useEffect(() => {
    if (touched) {
      validateEmail();
    }
  }, [email, touched]);

  const validateEmail = () => {
    if (!email.trim()) {
      setValidationError('Email is required');
      return false;
    } else if (!emailPattern.test(email)) {
      setValidationError('Please enter a valid email address');
      return false;
    } else {
      setValidationError(null);
      return true;
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setTouched(true);
  };

  const handleBlur = () => {
    setTouched(true);
    validateEmail();
  };

  const handleTurnstileVerify = (token: string) => {
    setTurnstileToken(token);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTouched(true);
    
    // Validate before submission
    if (!validateEmail()) {
      return;
    }

    // Ensure turnstile token is available
    if (!turnstileToken) {
      setValidationError('Please complete the security check');
      return;
    }

    setError(null);
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Password reset email would be sent to:', email);
      console.log('With turnstile token:', turnstileToken);
      
      // Always succeed in demo mode
      setIsSuccess(true);
      setIsLoading(false);
      
      // In a real implementation, you would call your API here:
      // try {
      //   const response = await fetch('/api/reset-password', {
      //     method: 'POST',
      //     headers: { 'Content-Type': 'application/json' },
      //     body: JSON.stringify({ email, turnstileToken })
      //   });
      //   
      //   if (!response.ok) throw new Error('Password reset failed');
      //   setIsSuccess(true);
      // } catch (err) {
      //   setError(err.message);
      // } finally {
      //   setIsLoading(false);
      // }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative">
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

        {isSuccess ? (
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <CheckCircle className="h-12 w-12 text-green-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">Request Submitted</h3>
            <p className="text-gray-600 mb-6">
              If an account exists with the email address <span className="font-medium">{email}</span>, we'll send password reset instructions to that address.
            </p>
            <p className="text-gray-500 text-sm mb-6">
              Please check your inbox and follow the instructions in the email. If you don't receive an email within a few minutes, please check your spam folder.
            </p>
            <div className="text-xs text-gray-500 mb-4 p-2 bg-gray-50 rounded">
              <strong>Demo Mode:</strong> In this demo, no actual email is sent.
            </div>
            <button
              onClick={onClose}
              className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <p className="text-gray-600 mb-4">
              Enter your email address and we'll send you instructions to reset your password if an account exists with that email.
            </p>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
                onBlur={handleBlur}
                className={`w-full px-3 py-2 border ${validationError ? 'border-red-500 bg-red-50' : 'border-gray-300'} rounded-md focus:outline-none focus:ring-2 ${validationError ? 'focus:ring-red-500' : 'focus:ring-primary-500'}`}
                placeholder="your.email@example.com"
                required
                pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                aria-invalid={!!validationError}
                aria-describedby={validationError ? "email-error" : undefined}
              />
              {validationError && (
                <p id="email-error" className="mt-1 text-sm text-red-600 flex items-center">
                  <Info className="w-4 h-4 mr-1" />
                  {validationError}
                </p>
              )}
            </div>

            {/* Turnstile CAPTCHA widget */}
            <TurnstileWidget onVerify={handleTurnstileVerify} className="mb-4" />
            
            <button
              type="submit"
              disabled={isLoading || !!validationError || !turnstileToken}
              className="w-full bg-primary-600 text-white py-2 rounded-md hover:bg-primary-700 transition-colors disabled:opacity-70 disabled:bg-gray-400 flex justify-center items-center"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  Processing Request...
                </>
              ) : (
                'Send Reset Instructions'
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

export default ManualPasswordReset; 