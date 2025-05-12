import React, { useState, useEffect } from 'react';
import { XCircle, Loader, Info, AlertCircle } from 'lucide-react';
import { User } from '../types';
import ManualPasswordReset from './ManualPasswordReset';
import TurnstileWidget from './TurnstileWidget';

interface LoginFormProps {
  onClose: () => void;
  onLogin: (user: User & { turnstileToken?: string }) => Promise<boolean>;
  onWaitlistClick: () => void;
  error: string | null;
  loading: boolean;
}

interface ValidationErrors {
  email: string | null;
  password: string | null;
}

const LoginForm: React.FC<LoginFormProps> = ({ 
  onClose, 
  onLogin, 
  onWaitlistClick,
  error, 
  loading 
}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [validationErrors, setValidationErrors] = useState<ValidationErrors>({
    email: null,
    password: null
  });
  const [touched, setTouched] = useState({
    email: false,
    password: false
  });

  // Email validation regex pattern
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  
  // Validate fields when they change
  useEffect(() => {
    if (touched.email) validateEmail();
    if (touched.password) validatePassword();
  }, [email, password, touched]);

  const validateEmail = () => {
    if (!email.trim()) {
      setValidationErrors(prev => ({ ...prev, email: 'Email is required' }));
      return false;
    } else if (!emailPattern.test(email)) {
      setValidationErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
      return false;
    } else {
      setValidationErrors(prev => ({ ...prev, email: null }));
      return true;
    }
  };

  const validatePassword = () => {
    if (!password) {
      setValidationErrors(prev => ({ ...prev, password: 'Password is required' }));
      return false;
    } else if (password.length < 8) {
      setValidationErrors(prev => ({ ...prev, password: 'Password must be at least 8 characters' }));
      return false;
    } else {
      setValidationErrors(prev => ({ ...prev, password: null }));
      return true;
    }
  };

  const validateForm = () => {
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    return isEmailValid && isPasswordValid;
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setTouched(prev => ({ ...prev, email: true }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setTouched(prev => ({ ...prev, password: true }));
  };

  const handleEmailBlur = () => {
    setTouched(prev => ({ ...prev, email: true }));
  };

  const handlePasswordBlur = () => {
    setTouched(prev => ({ ...prev, password: true }));
  };

  const handleTurnstileVerify = (token: string) => {
    setTurnstileToken(token);
  };
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Set all fields as touched
    setTouched({ email: true, password: true });
    
    // Validate all fields before submission
    if (!validateForm()) {
      return;
    }

    // Ensure turnstile token is available
    if (!turnstileToken) {
      setValidationErrors(prev => ({ 
        ...prev, 
        password: 'Please complete the security check' 
      }));
      return;
    }
    
    await onLogin({ email, password, turnstileToken });
  };

  const handleForgotPassword = (e: React.MouseEvent) => {
    e.preventDefault();
    console.log("Forgot password clicked");
    setShowForgotPassword(true);
  };
  
  // If showing forgot password form
  if (showForgotPassword) {
    return (
      <ManualPasswordReset
        onClose={onClose}
        onBackToLogin={() => setShowForgotPassword(false)}
        initialEmail={email}
      />
    );
  }
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-xs flex items-center justify-center z-50 p-4 animate-fade-in">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6 relative animate-scale-in">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close modal"
        >
          <XCircle size={20} />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Welcome Back</h2>
        
        {error && (
          <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 text-sm flex items-start">
            <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <span>{error}</span>
          </div>
        )}
        
        <form onSubmit={handleSubmit} noValidate>
          <div className="mb-1">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              onBlur={handleEmailBlur}
              className={`w-full px-4 py-2 border ${validationErrors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'} rounded-lg focus:ring-2 ${validationErrors.email ? 'focus:ring-red-500' : 'focus:ring-primary-500'} focus:border-primary-500 transition-colors`}
              placeholder="your@email.com"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              aria-invalid={!!validationErrors.email}
              aria-describedby={validationErrors.email ? "email-error" : undefined}
            />
            <div className="min-h-[24px] mt-1">
              {validationErrors.email && (
                <p id="email-error" className="text-sm text-red-600 flex items-center">
                  <Info className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>{validationErrors.email}</span>
                </p>
              )}
            </div>
          </div>
          
          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              onBlur={handlePasswordBlur}
              className={`w-full px-4 py-2 border ${validationErrors.password ? 'border-red-500 bg-red-50' : 'border-gray-300'} rounded-lg focus:ring-2 ${validationErrors.password ? 'focus:ring-red-500' : 'focus:ring-primary-500'} focus:border-primary-500 transition-colors`}
              placeholder="••••••••"
              required
              minLength={8}
              aria-invalid={!!validationErrors.password}
              aria-describedby={validationErrors.password ? "password-error" : undefined}
            />
            <div className="min-h-[24px] mt-1">
              {validationErrors.password && (
                <p id="password-error" className="text-sm text-red-600 flex items-center">
                  <Info className="w-4 h-4 mr-1 flex-shrink-0" />
                  <span>{validationErrors.password}</span>
                </p>
              )}
            </div>
            <div className="text-right mt-1">
              <button 
                type="button" 
                onClick={handleForgotPassword}
                className="text-sm text-primary-600 hover:text-primary-700"
              >
                Forgot password?
              </button>
            </div>
          </div>

          {/* Turnstile CAPTCHA widget */}
          <TurnstileWidget onVerify={handleTurnstileVerify} />
          
          <button
            type="submit"
            disabled={loading || !!validationErrors.email || !!validationErrors.password || !turnstileToken}
            className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {loading ? (
              <>
                <Loader size={18} className="animate-spin mr-2" />
                Signing in...
              </>
            ) : (
              'Sign in'
            )}
          </button>
        </form>
        
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-2">Don't have an account?</p>
          <button
            onClick={onWaitlistClick}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Join Waitlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;