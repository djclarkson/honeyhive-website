import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, BarChart3, Zap, Check } from 'lucide-react';
import withScrollReset from '../components/withScrollReset';

interface IntegrationCard {
  id: string;
  name: string;
  description: string;
  color: string;
  features: string[];
  logoText: string;
}

const integrations: IntegrationCard[] = [
  {
    id: 'google-workspace',
    name: 'Google Workspace',
    description: 'Enhance security management for Gmail, Drive, Docs, and other Google Workspace apps.',
    color: '#4285F4',
    logoText: 'G',
    features: [
      'Email security automation',
      'Drive file scanning',
      'Access controls management',
      'User activity monitoring',
      'Data loss prevention'
    ]
  },
  {
    id: 'google-cloud',
    name: 'Google Cloud',
    description: 'Monitor and protect your GCP infrastructure with automated security workflows.',
    color: '#4285F4',
    logoText: 'GC',
    features: [
      'Cloud resource monitoring',
      'IAM policy enforcement',
      'Network security automation',
      'Security logs analysis',
      'Vulnerability remediation'
    ]
  },
  {
    id: 'aws',
    name: 'AWS',
    description: 'Automate security operations across your Amazon Web Services environment.',
    color: '#FF9900',
    logoText: 'A',
    features: [
      'CloudTrail log analysis',
      'S3 bucket security',
      'IAM permission management',
      'EC2 vulnerability scanning',
      'Security group automation'
    ]
  },
  {
    id: 'azure',
    name: 'Azure',
    description: 'Streamline incident response and threat detection for Microsoft Azure resources.',
    color: '#0078D4',
    logoText: 'Az',
    features: [
      'Security Center integration',
      'Active Directory monitoring',
      'Resource configuration tracking',
      'Network security automation',
      'Compliance assessment'
    ]
  },
  {
    id: 'microsoft-365',
    name: 'Microsoft 365',
    description: 'Secure your Microsoft 365 environment with automated threat remediation workflows.',
    color: '#D83B01',
    logoText: 'M',
    features: [
      'Exchange email security',
      'SharePoint file scanning',
      'Teams message monitoring',
      'OneDrive protection',
      'Identity and access management'
    ]
  },
  {
    id: 'github',
    name: 'GitHub',
    description: 'Monitor code repositories for security vulnerabilities and automate remediation.',
    color: '#24292E',
    logoText: 'GH',
    features: [
      'Code scanning automation',
      'Secret detection workflows',
      'Pull request security checks',
      'Dependency vulnerability tracking',
      'SAST/DAST integration'
    ]
  }
];

const Integrations: React.FC = () => {
  const [expandedIntegration, setExpandedIntegration] = React.useState<string | null>(null);
  
  const toggleExpand = (id: string) => {
    if (expandedIntegration === id) {
      setExpandedIntegration(null);
    } else {
      setExpandedIntegration(id);
    }
  };
  
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header 
        onLoginClick={() => {}} 
        isAuthenticated={false}
        onLogout={() => {}}
      />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Security Integrations</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Connect HoneyHive with your existing security tools and cloud platforms to streamline security operations and enhance your cyber security posture.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            {integrations.map((integration) => (
              <div 
                key={integration.id}
                className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 w-full sm:w-[calc(50%-0.5rem)] md:w-[calc(33.333%-1rem)] lg:w-[calc(20%-1rem)]"
              >
                <div 
                  className="p-4 cursor-pointer hover:bg-gray-50 flex flex-col"
                  onClick={() => toggleExpand(integration.id)}
                >
                  <div className="flex items-center mb-3">
                    <div 
                      className="w-10 h-10 rounded-full flex items-center justify-center mr-3"
                      style={{ backgroundColor: `${integration.color}20` }}
                    >
                      <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center">
                        <span className="text-xs font-bold" style={{ color: integration.color }}>
                          {integration.logoText}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {integration.name}
                      </h3>
                    </div>
                    <div className="ml-auto">
                      <button className="p-1 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                        <svg 
                          xmlns="http://www.w3.org/2000/svg" 
                          className={`h-4 w-4 transition-transform ${expandedIntegration === integration.id ? 'rotate-180' : ''}`} 
                          fill="none" 
                          viewBox="0 0 24 24" 
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">{integration.description}</p>
                </div>
                
                {expandedIntegration === integration.id && (
                  <div className="px-4 pb-4 pt-2 border-t border-gray-100">
                    <h4 className="font-medium text-gray-900 mb-2 text-sm">Key Security Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {integration.features.map((feature, index) => (
                        <div key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-gray-50 p-8 rounded-xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Need a Custom Integration?</h2>
              <p className="text-gray-600">
                Don't see your tools listed? Our team can build custom integrations for your specific security stack.
              </p>
            </div>
            
            <div className="flex justify-center">
              <Link to="/contact" className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors">
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

export default withScrollReset(Integrations); 