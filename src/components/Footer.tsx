import React from 'react';
import { Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from './Logo';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Logo width={120} height={24} className="brightness-150 filter" />
            </div>
            <p className="text-gray-400 mb-4">
              Cyber Security Workflow Automation and AI for modern security operations teams.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com/honeyhiveapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors" aria-label="X (formerly Twitter)">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link to="/threat-detection" className="text-gray-400 hover:text-white transition-colors">Threat Detection</Link></li>
              <li><Link to="/incident-response" className="text-gray-400 hover:text-white transition-colors">Incident Response</Link></li>
              <li><Link to="/compliance" className="text-gray-400 hover:text-white transition-colors">Compliance</Link></li>
              <li><Link to="/integrations" className="text-gray-400 hover:text-white transition-colors">Integrations</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Documentation</a></li>
              <li><Link to="/blog" className="text-gray-400 hover:text-white transition-colors">Blog</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-white transition-colors">Community</Link></li>
              <li><Link to="/api" className="text-gray-400 hover:text-white transition-colors">API</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About</Link></li>
              <li><Link to="/careers" className="text-gray-400 hover:text-white transition-colors">Careers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Hive42 Pte Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/terms" className="text-gray-500 hover:text-gray-400 text-sm">Terms of Service</Link>
            <Link to="/privacy" className="text-gray-500 hover:text-gray-400 text-sm">Privacy Policy</Link>
            <Link to="/gdpr" className="text-gray-500 hover:text-gray-400 text-sm">GDPR Notice</Link>
            <Link to="/ccpa" className="text-gray-500 hover:text-gray-400 text-sm">CCPA Notice</Link>
            <Link to="/cookies" className="text-gray-500 hover:text-gray-400 text-sm">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;