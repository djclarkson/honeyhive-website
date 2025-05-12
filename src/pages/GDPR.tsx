import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { Shield, Lock } from 'lucide-react';

const GDPR: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="GDPR Applicability Notice"
        description="Learn how the General Data Protection Regulation (GDPR) applies to HoneyHive's cybersecurity workflow automation services and our interactions with EU/EEA-based customers."
        keywords="GDPR, data protection, privacy, EU privacy law, HoneyHive GDPR, cybersecurity GDPR compliance"
      />
      
      <Header 
        onLoginClick={() => {}} 
        isAuthenticated={false}
        onLogout={() => {}}
      />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-primary-50 p-4 rounded-full">
                <Shield className="h-12 w-12 text-primary-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">GDPR APPLICABILITY NOTICE</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-4"></div>
            <p className="text-gray-500">Last Updated: February 19, 2024</p>
          </div>
          
          <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
              <span className="bg-primary-50 p-2 rounded-md mr-3">
                <Lock className="h-5 w-5 text-primary-600" />
              </span>
              Overview
            </h2>
            <p className="text-gray-700 leading-relaxed mb-0">
              This notice explains how the General Data Protection Regulation (GDPR) applies to HoneyHive's cybersecurity workflow automation services
              and our interactions with EU/EEA-based customers.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Our Services</h2>
              <p className="text-gray-700 mb-4">
                HoneyHive provides business-to-business cybersecurity workflow automation services that:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Streamline security incident response</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Automate threat detection workflows</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Enhance security operations</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Provide compliance reporting</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Limited Personal Data Processing</h2>
              <p className="text-gray-700 mb-4">
                As a B2B service provider, we process minimal personal data:
              </p>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Business contact information</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Account credentials</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>System logs and metrics</span>
                </li>
              </ul>
              <div className="bg-gray-50 p-4 rounded-md text-gray-700 border-l-4 border-primary-500">
                We do not process sensitive personal data or conduct automated decision-making affecting individuals.
              </div>
            </div>
            
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Legal Basis</h2>
              <p className="text-gray-700 mb-4">
                Our processing activities are based on:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-50 p-4 rounded-md border border-gray-100 text-center">
                  <div className="font-medium text-gray-800 mb-1">Contract performance</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-100 text-center">
                  <div className="font-medium text-gray-800 mb-1">Legal obligations</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-100 text-center">
                  <div className="font-medium text-gray-800 mb-1">Legitimate business interests</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Data Protection Measures</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational measures:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start bg-gray-50 p-4 rounded-md">
                  <div className="mr-3 mt-1 text-primary-500">•</div>
                  <div>Encryption at rest and in transit</div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-md">
                  <div className="mr-3 mt-1 text-primary-500">•</div>
                  <div>Access controls</div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-md">
                  <div className="mr-3 mt-1 text-primary-500">•</div>
                  <div>Regular security assessments</div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-md">
                  <div className="mr-3 mt-1 text-primary-500">•</div>
                  <div>Employee training</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                EU/EEA residents have the right to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <div className="bg-gray-50 p-3 rounded-md text-gray-700 text-center">Access their data</div>
                <div className="bg-gray-50 p-3 rounded-md text-gray-700 text-center">Request corrections</div>
                <div className="bg-gray-50 p-3 rounded-md text-gray-700 text-center">Request deletion</div>
                <div className="bg-gray-50 p-3 rounded-md text-gray-700 text-center">Data portability</div>
                <div className="bg-gray-50 p-3 rounded-md text-gray-700 text-center">Object to processing</div>
                <div className="bg-gray-50 p-3 rounded-md text-gray-700 text-center">Lodge complaints</div>
              </div>
            </div>
            
            <div className="bg-primary-50 shadow-sm border border-primary-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-primary-100 pb-3 mb-4">Contact Us</h2>
              <p className="text-gray-700 mb-4">
                For GDPR-related inquiries:
              </p>
              <div className="bg-white p-6 rounded-md border border-gray-100 flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <div className="font-medium text-gray-800">Email: privacy@honeyhive.com</div>
                  <div className="text-gray-500 text-sm">Include "GDPR Request" in the subject line</div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                    Join Waitlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-sm text-gray-500">
            © {new Date().getFullYear()} Hive42 Pte Ltd. All rights reserved.
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GDPR; 