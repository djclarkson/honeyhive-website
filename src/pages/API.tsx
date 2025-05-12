import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import { useSession } from '../lib/auth-client';
import { Code } from 'lucide-react';

const API: React.FC = () => {
  const { data: session, isPending } = useSession();

  return (
    <div className="min-h-screen bg-white font-sans">
      <SEO
        title="API Documentation"
        description="Integrate with HoneyHive's powerful security services using our comprehensive API."
        keywords="HoneyHive API, security API, cybersecurity integration, workflow automation API"
        ogType="website"
      />
      
      <Header 
        onLoginClick={() => {}} 
        isAuthenticated={true}
        onLogout={() => {}}
      />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">API Documentation</h1>
            {session && (
              <p className="text-sm text-gray-500 mb-4">Welcome, {session.user.name || session.user.email}</p>
            )}
            <p className="text-lg text-gray-600 mb-6">
              Integrate with HoneyHive's powerful security services using our comprehensive API.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Getting Started</h2>
            <p className="text-gray-700 mb-6">
              Our RESTful API allows you to programmatically interact with HoneyHive's security platform. Here's how to get started:
            </p>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-2">Authentication</h3>
                <p className="text-gray-600 mb-3">All API requests require an API key for authentication.</p>
                <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm">
                  <p>Authorization: Bearer YOUR_API_KEY</p>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-600 mb-2">Base URL</h3>
                <p className="text-gray-600 mb-3">All API requests should be made to:</p>
                <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm">
                  <p>https://api.honeyhive.com/v1</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Endpoints</h2>
            
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Code className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Incident Management</h3>
                  <p className="text-gray-600 mb-4">Create, retrieve, update, and close security incidents.</p>
                  <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm mb-3">
                    <p>GET /incidents</p>
                    <p>POST /incidents</p>
                    <p>GET /incidents/:id</p>
                    <p>PUT /incidents/:id</p>
                  </div>
                  <button className="text-primary-600 font-medium">View Documentation →</button>
                </div>
              </div>
            </div>
            
            <div className="border-b border-gray-200 pb-6 mb-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Code className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Threat Intelligence</h3>
                  <p className="text-gray-600 mb-4">Access and manage threat intelligence data.</p>
                  <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm mb-3">
                    <p>GET /threats</p>
                    <p>GET /threats/:id</p>
                    <p>POST /threats/indicators</p>
                  </div>
                  <button className="text-primary-600 font-medium">View Documentation →</button>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary-100 rounded-full">
                  <Code className="h-6 w-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Workflow Automation</h3>
                  <p className="text-gray-600 mb-4">Create and manage automated security workflows.</p>
                  <div className="bg-gray-900 text-white p-4 rounded-md font-mono text-sm mb-3">
                    <p>GET /workflows</p>
                    <p>POST /workflows</p>
                    <p>GET /workflows/:id</p>
                    <p>PUT /workflows/:id/trigger</p>
                  </div>
                  <button className="text-primary-600 font-medium">View Documentation →</button>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">API Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">SDK Libraries</h3>
                <p className="text-gray-600 mb-3">Official client libraries for Python, JavaScript, and Go</p>
                <button className="text-primary-600 font-medium">Download SDKs →</button>
              </div>
              <div className="border rounded-lg p-4 bg-white">
                <h3 className="text-xl font-semibold text-primary-600 mb-2">Rate Limits</h3>
                <p className="text-gray-600 mb-3">Information about API rate limits and best practices</p>
                <button className="text-primary-600 font-medium">Learn More →</button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default API; 