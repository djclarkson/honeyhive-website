import React, { useEffect } from 'react';
import { authClient } from '../lib/auth-client';

interface AuthDebugProps {
  email?: string;
}

const AuthDebug: React.FC<AuthDebugProps> = ({ email = 'test@example.com' }) => {
  useEffect(() => {
    // Log the available methods on authClient for debugging
    console.log('AuthClient methods:', Object.keys(authClient));
    
    // Log more specific methods
    if (authClient.signIn) console.log('SignIn methods:', Object.keys(authClient.signIn));
    if (authClient.signUp) console.log('SignUp methods:', Object.keys(authClient.signUp));
    
    // Check if forgetPassword method exists
    const hasForgetPassword = typeof authClient.forgetPassword === 'function';
    console.log('Has forgetPassword method:', hasForgetPassword);
    
    // Check if resetPassword method exists
    const hasResetPassword = typeof authClient.resetPassword === 'function';
    console.log('Has resetPassword method:', hasResetPassword);
  }, []);

  const testForgotPassword = () => {
    try {
      console.log('Testing forgot password with:', email);
      if (typeof authClient.forgetPassword === 'function') {
        authClient.forgetPassword({
          email,
          redirectTo: window.location.origin + '/reset-password',
        }, {
          onSuccess: () => console.log('Forgot password request successful'),
          onError: (err) => console.error('Forgot password error:', err)
        });
      } else {
        console.error('forgetPassword method not available');
      }
    } catch (err) {
      console.error('Error testing forgot password:', err);
    }
  };

  return (
    <div className="p-4 bg-gray-100 rounded-md">
      <h2 className="font-bold mb-2">Auth Debug</h2>
      <div className="space-y-2">
        <div>
          <span className="font-medium">Email for test: </span>
          <span>{email}</span>
        </div>
        <button 
          onClick={testForgotPassword}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Test Forgot Password
        </button>
      </div>
    </div>
  );
};

export default AuthDebug; 