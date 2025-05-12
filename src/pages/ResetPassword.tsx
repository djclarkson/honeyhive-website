import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import ResetPasswordForm from '../components/ResetPasswordForm';
import { AlertCircle } from 'lucide-react';

const ResetPassword: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Get the token from the URL
    const tokenFromUrl = searchParams.get('token');
    
    if (!tokenFromUrl) {
      setError('Invalid or missing reset token. Please request a new password reset link.');
      return;
    }
    
    setToken(tokenFromUrl);
  }, [searchParams]);

  const handleClose = () => {
    navigate('/');
  };

  const handleSuccess = () => {
    setTimeout(() => {
      navigate('/');
    }, 3000); // Redirect after success message is shown
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Reset Password"
        description="Reset your HoneyHive account password"
        noIndex={true}
      />
      
      <Header 
        onLoginClick={() => {}} 
        isAuthenticated={false}
        onLogout={() => {}}
      />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-md">
          {error ? (
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-red-100 rounded-full">
                  <AlertCircle className="h-8 w-8 text-red-500" />
                </div>
              </div>
              <h1 className="text-2xl font-bold text-gray-900 mb-4">Password Reset Error</h1>
              <p className="text-gray-700 mb-6">{error}</p>
              <button
                onClick={() => navigate('/')}
                className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors"
              >
                Back to Home
              </button>
            </div>
          ) : token ? (
            <ResetPasswordForm 
              token={token} 
              onClose={handleClose} 
              onSuccess={handleSuccess}
            />
          ) : (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ResetPassword; 