import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { ShieldCheck, FileText } from 'lucide-react';

const CCPA: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="California Consumer Privacy Act (CCPA) Notice"
        description="Information about how HoneyHive collects, processes, and protects personal information in accordance with the California Consumer Privacy Act (CCPA)."
        keywords="CCPA, privacy, California Consumer Privacy Act, privacy rights, data protection, HoneyHive privacy"
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
                <ShieldCheck className="h-12 w-12 text-primary-600" />
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">CALIFORNIA CONSUMER PRIVACY ACT (CCPA) NOTICE</h1>
            <div className="w-24 h-1 bg-primary-500 mx-auto mb-4"></div>
            <p className="text-gray-500">Last Updated: February 19, 2024</p>
          </div>
          
          <div className="space-y-8">
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4 flex items-center">
                <span className="bg-primary-50 p-2 rounded-md mr-3">
                  <FileText className="h-5 w-5 text-primary-600" />
                </span>
                Applicability to HoneyHive Services
              </h2>
              <div className="text-gray-700 leading-relaxed p-4 bg-gray-50 rounded-md border-l-4 border-primary-200">
                HoneyHive provides cybersecurity workflow automation services exclusively to businesses. 
                Our services focus on analyzing and automating security operations and processes, not personal information of individuals.
              </div>
            </div>
            
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Limited Collection of Personal Information</h2>
              <p className="text-gray-700 mb-4">
                As a business-to-business service provider, HoneyHive collects and processes minimal personal information. 
                The information we collect is limited to:
              </p>
              <div className="space-y-3">
                <div className="flex items-start bg-gray-50 p-4 rounded-md">
                  <div className="min-w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-700 text-sm font-bold">1</span>
                  </div>
                  <div className="text-gray-700">Business contact information of authorized representatives (business email addresses and phone numbers)</div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-md">
                  <div className="min-w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-700 text-sm font-bold">2</span>
                  </div>
                  <div className="text-gray-700">Account credentials for authorized users</div>
                </div>
                <div className="flex items-start bg-gray-50 p-4 rounded-md">
                  <div className="min-w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-primary-700 text-sm font-bold">3</span>
                  </div>
                  <div className="text-gray-700">IP addresses and usage data necessary for service delivery and security</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">No Sale of Personal Information</h2>
              <div className="p-4 bg-primary-50 rounded-md mb-4 font-medium text-gray-800">
                HoneyHive does not sell personal information of any kind.
              </div>
              <p className="text-gray-700 mb-4">
                We use the limited business contact information we collect solely to:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="font-medium text-gray-800 mb-1">Provide and maintain our services</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="font-medium text-gray-800 mb-1">Communicate about account status</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="font-medium text-gray-800 mb-1">Process billing and payments</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-md border border-gray-200">
                  <div className="font-medium text-gray-800 mb-1">Provide customer support</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Your Rights Under the CCPA</h2>
              <p className="text-gray-700 mb-4">
                To the extent that the California Consumer Privacy Act applies to any personal information we process, 
                California residents acting as authorized representatives of businesses may have the right to:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Know what business information we collect and process</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Access specific business contact information we have collected</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Delete business contact information, subject to certain exceptions</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-primary-50 rounded-full p-1 mr-3 mt-1">
                    <div className="bg-primary-500 rounded-full w-2 h-2"></div>
                  </div>
                  <span>Non-discrimination for exercising these rights</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-50 shadow-sm border border-primary-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-primary-100 pb-3 mb-4">How to Exercise Your Rights</h2>
              <p className="text-gray-700 mb-4">
                If you are a California resident acting as an authorized representative of a business customer and wish to exercise your CCPA rights, 
                please contact us at:
              </p>
              <div className="bg-white p-6 rounded-md border border-gray-100 flex flex-col sm:flex-row items-center justify-between">
                <div>
                  <div className="font-medium text-gray-800">Email: compliance@honeyhive.com</div>
                  <div className="text-gray-500 text-sm">Include "CCPA Request" in the subject line</div>
                </div>
                <div className="mt-4 sm:mt-0">
                  <button className="px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors">
                    Join Waitlist
                  </button>
                </div>
              </div>
              <div className="mt-4 p-4 bg-white rounded-md border border-gray-100">
                <p className="text-gray-700 text-sm">
                  <span className="font-medium">Note:</span> We may need to verify your identity and authority to act on behalf of the business before fulfilling your request.
                </p>
              </div>
            </div>
            
            <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-8">
              <h2 className="text-xl font-bold text-gray-900 border-b border-gray-100 pb-3 mb-4">Updates to This Notice</h2>
              <p className="text-gray-700">
                We may update this CCPA Notice periodically. The "Last Updated" date at the top of this notice indicates when it was last revised.
              </p>
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

export default CCPA; 