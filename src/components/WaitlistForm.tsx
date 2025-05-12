import React, { useState, useEffect } from 'react';
import { XCircle, Loader, Check, Info, AlertCircle } from 'lucide-react';
import TurnstileWidget from './TurnstileWidget';

interface WaitlistFormProps {
  onClose: () => void;
  onSubmit: (email: string, token: string) => Promise<boolean>;
  error: string | null;
  loading: boolean;
}

const WaitlistForm: React.FC<WaitlistFormProps> = ({ 
  onClose, 
  onSubmit, 
  error, 
  loading 
}) => {
  const [email, setEmail] = useState('');
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
    
    const success = await onSubmit(email, turnstileToken);
    
    if (success) {
      setIsSubmitted(true);
    }
  };

  const handleTurnstileVerify = (token: string) => {
    setTurnstileToken(token);
  };
  
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
        
        {isSubmitted ? (
          <div className="text-center py-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <Check size={32} className="text-green-600" />
              </div>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h2>
            <p className="text-gray-600 mb-6">
              We've added you to our waitlist. We'll notify you as soon as we're ready to welcome new users.
            </p>
            <button
              onClick={onClose}
              className="bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
            >
              Got it
            </button>
          </div>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
            <p className="text-gray-600 mb-6">
              We're currently in a closed beta. Join our waitlist to be notified when we open registration.
            </p>
            
            {error && (
              <div className="bg-red-50 text-red-700 p-3 rounded-lg mb-4 text-sm flex items-start">
                <AlertCircle className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
                <span>{error}</span>
              </div>
            )}
            
            <form onSubmit={handleSubmit} noValidate>
              <div className="mb-6">
                <label htmlFor="waitlist-email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="waitlist-email"
                  value={email}
                  onChange={handleEmailChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-2 border ${validationError ? 'border-red-500 bg-red-50' : 'border-gray-300'} rounded-lg focus:ring-2 ${validationError ? 'focus:ring-red-500' : 'focus:ring-primary-500'} focus:border-primary-500 transition-colors`}
                  placeholder="your@email.com"
                  required
                  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
                  aria-invalid={!!validationError}
                  aria-describedby={validationError ? "waitlist-email-error" : undefined}
                />
                <div className="min-h-[24px] mt-1">
                  {validationError && (
                    <p id="waitlist-email-error" className="text-sm text-red-600 flex items-center">
                      <Info className="w-4 h-4 mr-1 flex-shrink-0" />
                      <span>{validationError}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Turnstile CAPTCHA widget */}
              <TurnstileWidget onVerify={handleTurnstileVerify} />
              
              <button
                type="submit"
                disabled={loading || !!validationError || !turnstileToken}
                className="w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <Loader size={18} className="animate-spin mr-2" />
                    Submitting...
                  </>
                ) : (
                  'Join Waitlist'
                )}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default WaitlistForm;