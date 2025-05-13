import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import App from './App.tsx';
import TermsOfService from './pages/TermsOfService.tsx';
import PrivacyPolicy from './pages/PrivacyPolicy.tsx';
import CookiePolicy from './pages/CookiePolicy.tsx';
import CCPA from './pages/CCPA.tsx';
import GDPR from './pages/GDPR.tsx';
import Integrations from './pages/Integrations.tsx';
import ThreatDetection from './pages/ThreatDetection.tsx';
import IncidentResponse from './pages/IncidentResponse.tsx';
import Compliance from './pages/Compliance.tsx';
import Contact from './pages/Contact.tsx';
import About from './pages/About.tsx';
import Blog from './pages/Blog.tsx';
import Careers from './pages/Careers.tsx';
import Community from './pages/Community.tsx';
import API from './pages/API.tsx';
import ResetPassword from './pages/ResetPassword.tsx';
import ProtectedRoute from './components/ProtectedRoute.tsx';
import IntroducingHoneyhive from './pages/BlogPosts/IntroducingHoneyhive.tsx';
import CybersecurityWorkflowAutomation from './pages/BlogPosts/CybersecurityWorkflowAutomation.tsx';
import ScrollToTop from './components/ScrollToTop.tsx';
import './index.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/terms" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/cookies" element={<CookiePolicy />} />
          <Route path="/ccpa" element={<CCPA />} />
          <Route path="/gdpr" element={<GDPR />} />
          <Route path="/integrations" element={<Integrations />} />
          <Route path="/threat-detection" element={<ThreatDetection />} />
          <Route path="/incident-response" element={<IncidentResponse />} />
          <Route path="/compliance" element={<Compliance />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/introducing-honeyhive" element={<IntroducingHoneyhive />} />
          <Route path="/blog/cybersecurity-workflow-automation" element={<CybersecurityWorkflowAutomation />} />
          <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
          <Route path="/api" element={<ProtectedRoute><API /></ProtectedRoute>} />
          <Route path="/reset-password" element={<ResetPassword />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  </StrictMode>
);
