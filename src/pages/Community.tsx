import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useIsAuthenticated } from '../lib/auth-client';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/auth';

const Community: React.FC = () => {
  const { isAuthenticated, session, isLoading } = useIsAuthenticated();
  const [userName, setUserName] = useState<string | null>(null);

  useEffect(() => {
    // Get user profile if authenticated
    if (session?.user) {
      // Try to get user data from the database
      const getUserProfile = async () => {
        const { data, error } = await supabase
          .from('users')
          .select('email')
          .eq('id', session.user.id)
          .single();
        
        if (!error && data) {
          setUserName(data.email);
        } else {
          // Fallback to auth user email
          setUserName(session.user.email || null);
        }
      };
      
      getUserProfile();
    }
  }, [session]);

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="Community Resources"
        description="Connect with other HoneyHive users, share insights, and get help from our community of security professionals."
        keywords="HoneyHive community, cybersecurity forum, security workflows, HoneyHive users"
      />
      
      <Header 
        onLoginClick={() => {}} 
        isAuthenticated={isAuthenticated}
        onLogout={() => {}}
      />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Community</h1>
            {isLoading ? (
              <p className="text-sm text-gray-500 mb-4">Loading...</p>
            ) : (
              isAuthenticated && userName && (
                <p className="text-sm text-gray-500 mb-4">Welcome, {userName}</p>
              )
            )}
            <p className="text-lg text-gray-600 mb-6">
              Connect with other HoneyHive users, share insights, and get help from our community of security professionals.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Discussion Forums</h2>
            <p className="text-gray-700 mb-6">
              Our forums are organized by topic. Browse existing discussions or start your own thread.
            </p>
            <div className="space-y-4">
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">General Discussion</h3>
                <p className="text-gray-600">General questions and discussions about HoneyHive</p>
              </div>
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">Threat Intelligence</h3>
                <p className="text-gray-600">Share and discuss the latest threat intelligence</p>
              </div>
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">Workflow Automation</h3>
                <p className="text-gray-600">Tips and tricks for automating security workflows</p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Community Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">Knowledge Base</h3>
                <p className="text-gray-600 mb-3">User-contributed articles and solutions</p>
                <button className="text-primary-600 font-medium">Browse Knowledge Base →</button>
              </div>
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">Monthly Webinars</h3>
                <p className="text-gray-600 mb-3">Join our expert-led sessions on security topics</p>
                <button className="text-primary-600 font-medium">View Schedule →</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Community; 