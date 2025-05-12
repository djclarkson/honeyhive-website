import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Zap, Clock, GitBranch, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

const IncidentResponse: React.FC = () => {
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
              <Zap className="h-10 w-10 text-primary-600" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Incident Response Automation</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Streamline and accelerate your cyber security incident response with AI-powered workflows that reduce mean time to resolution.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">How HoneyHive Transforms Incident Response</h2>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Clock className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Reduce Time to Respond</h3>
                  <p className="text-gray-600">
                    Automated workflows immediately trigger countermeasures when threats are detected, reducing response time from hours to minutes or seconds.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <GitBranch className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Standard & Custom Response Playbooks</h3>
                  <p className="text-gray-600">
                    Deploy pre-built response playbooks for common incident types or create custom workflows tailored to your specific environment and requirements.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <Users className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Cross-Team Coordination</h3>
                  <p className="text-gray-600">
                    Orchestrate responses across security, IT, and business teams with automated notifications, assignments, and escalations based on incident severity.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                  <MessageSquare className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Contextual Enrichment</h3>
                  <p className="text-gray-600">
                    Automatically gather and correlate relevant data about affected systems, users, and potential business impact to inform response decisions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Incident Response Workflow Engine</h2>
            
            <div className="relative">
              <div className="absolute left-0 right-0 h-1 bg-gray-200 top-10 hidden md:block"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <div className="text-center relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4 mx-auto z-10 relative">
                    <span className="text-xl font-bold text-primary-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Detection & Triage</h3>
                  <p className="text-gray-600 text-sm">
                    Automatically detect and classify security incidents
                  </p>
                </div>
                
                <div className="text-center relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4 mx-auto z-10 relative">
                    <span className="text-xl font-bold text-primary-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Containment</h3>
                  <p className="text-gray-600 text-sm">
                    Execute actions to isolate affected systems
                  </p>
                </div>
                
                <div className="text-center relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4 mx-auto z-10 relative">
                    <span className="text-xl font-bold text-primary-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Investigation</h3>
                  <p className="text-gray-600 text-sm">
                    Gather forensic data and determine scope
                  </p>
                </div>
                
                <div className="text-center relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4 mx-auto z-10 relative">
                    <span className="text-xl font-bold text-primary-600">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Remediation</h3>
                  <p className="text-gray-600 text-sm">
                    Remove threats and restore systems
                  </p>
                </div>
                
                <div className="text-center relative">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary-100 mb-4 mx-auto z-10 relative">
                    <span className="text-xl font-bold text-primary-600">5</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Recovery</h3>
                  <p className="text-gray-600 text-sm">
                    Post-incident analysis and improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">60%</div>
              <p className="text-gray-600">
                Reduction in mean time to respond to security incidents
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">75%</div>
              <p className="text-gray-600">
                Decrease in manual intervention required during incident response
              </p>
            </div>
            
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <div className="text-3xl font-bold text-primary-600 mb-2">30+</div>
              <p className="text-gray-600">
                Pre-built response playbooks for common security incidents
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Experience Faster, More Effective Incident Response</h2>
            <p className="text-gray-600 mb-6">
              See how HoneyHive's automation can transform your security operations and reduce incident resolution time.
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

export default IncidentResponse; 