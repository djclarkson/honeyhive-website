import React from 'react';
import { Navigate } from 'react-router-dom';
import { useIsAuthenticated } from '../lib/auth-client';
import Header from './Header';
import Footer from './Footer';
import SEO from './SEO';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated, isPending } = useIsAuthenticated();

  // Show loading indicator while checking authentication
  if (isPending) {
    return (
      <div className="min-h-screen bg-white font-sans flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-white font-sans">
        <SEO 
          title="Access Restricted"
          description="You must be logged in to access this page"
          noIndex={true}
        />
        <Header 
          onLoginClick={() => {}} 
          isAuthenticated={false}
          onLogout={() => {}}
        />
        
        <main className="pt-32 pb-16 px-4">
          <div className="container mx-auto max-w-lg">
            <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
              <h1 className="text-2xl font-bold text-red-700 mb-4">Access Restricted</h1>
              <p className="text-gray-700 mb-6">
                You must be logged in to access this page. Please log in to continue.
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => window.location.href = '/'}
                  className="px-6 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
                >
                  Back to Home
                </button>
              </div>
            </div>
          </div>
        </main>
        
        <Footer />
      </div>
    );
  }

  return <>{children}</>;
};

export default ProtectedRoute; 