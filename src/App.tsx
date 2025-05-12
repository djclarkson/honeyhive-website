import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import LoginForm from './components/LoginForm';
import WaitlistForm from './components/WaitlistForm';
import { useAuth } from './hooks/useAuth';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);
  const { isAuthenticated, login, logout, joinWaitlist, loading, error } = useAuth();
  
  const handleLoginClick = () => {
    setShowLoginModal(true);
  };
  
  const handleWaitlistClick = () => {
    setShowLoginModal(false);
    setShowWaitlistModal(true);
  };
  
  const handleLoginSubmit = async (credentials: { 
    email: string; 
    password: string; 
    turnstileToken?: string
  }) => {
    // Extract turnstileToken and pass regular credentials to login function
    const { turnstileToken, ...loginCredentials } = credentials;
    
    // In a real app, you would validate the turnstile token on the server
    // For now we'll just simulate success if credentials are correct
    const success = await login(loginCredentials);
    if (success) {
      setShowLoginModal(false);
    }
    return success;
  };
  
  const handleWaitlistSubmit = async (email: string, turnstileToken: string) => {
    return await joinWaitlist(email, turnstileToken);
  };
  
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header 
        onLoginClick={handleLoginClick} 
        isAuthenticated={isAuthenticated}
        onLogout={logout}
      />
      
      <main>
        <Hero 
          onLoginClick={handleLoginClick}
          onWaitlistClick={handleWaitlistClick}
        />
        <Features />
        <Testimonials />
      </main>
      
      <Footer />
      
      {showLoginModal && (
        <LoginForm 
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLoginSubmit}
          onWaitlistClick={handleWaitlistClick}
          error={error}
          loading={loading}
        />
      )}
      
      {showWaitlistModal && (
        <WaitlistForm 
          onClose={() => setShowWaitlistModal(false)}
          onSubmit={handleWaitlistSubmit}
          error={error}
          loading={loading}
        />
      )}
    </div>
  );
}

export default App;