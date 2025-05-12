import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, AlertTriangle, Search, Zap, BarChart3 } from 'lucide-react';
import { Link } from 'react-router-dom';

const ThreatDetection: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header 
        onLoginClick={() => {}} 
        isAuthenticated={false}
        onLogout={() => {}}
      />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block p-3 rounded-full bg-primary-100 mb-4">
              <Shield className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">AI-Powered Threat Detection</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Identify and prioritize security threats across your organization with advanced AI that continuously monitors your environment.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How HoneyHive Enhances Threat Detection</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <AlertTriangle className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Early Threat Identification</h3>
                  <p className="text-gray-600">
                    Our AI models identify potential threats before they manifest as security incidents, giving your team time to implement preventative measures.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Search className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Behavioral Analysis & Anomaly Detection</h3>
                  <p className="text-gray-600">
                    Continually learning algorithms establish normal behavior patterns and identify deviations that could indicate security threats or compromised systems.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Zap className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Automated Threat Correlation</h3>
                  <p className="text-gray-600">
                    Automatically correlate seemingly unrelated events across different systems to identify coordinated attacks that might otherwise go undetected.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <BarChart3 className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Intelligent Risk Scoring</h3>
                  <p className="text-gray-600">
                    Prioritize threats based on comprehensive risk scoring that considers potential impact, attack vector complexity, and affected systems' criticality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Capabilities</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Network Threat Detection</h3>
                <p className="text-gray-600 text-sm">
                  Identify suspicious network traffic patterns, potential intrusions, and lateral movement attempts within your environment.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Cloud Security Monitoring</h3>
                <p className="text-gray-600 text-sm">
                  Monitor cloud environments for misconfigurations, unusual API calls, and unauthorized access to resources.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">Endpoint Threat Analysis</h3>
                <p className="text-gray-600 text-sm">
                  Detect malicious activities on endpoints including malware, ransomware, and advanced persistent threats.
                </p>
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="font-semibold text-gray-900 mb-3">User Behavior Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Identify insider threats and compromised accounts through behavioral analysis and deviation detection.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Strengthen Your Security Posture?</h2>
            <p className="text-gray-600 mb-6">
              See how HoneyHive can transform your organization's threat detection capabilities with AI-powered automation.
            </p>
            <div className="flex justify-center">
              <Link to="/contact" className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ThreatDetection; 