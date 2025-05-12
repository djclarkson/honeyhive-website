import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, ChevronLeft, Shield, Clock, GitBranch, Users } from 'lucide-react';
import withScrollReset from '../../components/withScrollReset';

const CybersecurityWorkflowAutomation: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header 
        onLoginClick={() => {}} 
        isAuthenticated={false}
        onLogout={() => {}}
      />
      
      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="mb-6">
            <Link to="/blog" className="inline-flex items-center text-primary-600 hover:text-primary-700 transition-colors">
              <ChevronLeft className="h-4 w-4 mr-1" />
              Back to all posts
            </Link>
          </div>
          
          <article>
            <div className="mb-8">
              <div className="flex items-center text-sm text-gray-500 mb-3">
                <Calendar className="h-4 w-4 mr-2" />
                <span>September 19, 2024</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                HoneyHive Expands with Cybersecurity Workflow Automation Features
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                We're thrilled to announce a major update to HoneyHive, introducing powerful cybersecurity workflow automation capabilities to help security teams respond faster to threats, streamline incident management, and maintain compliance more efficiently.
              </p>
              
              <p>
                Since our launch, we've seen how workflow automation transforms team communication. Now, we're bringing that same power to cybersecurity operations with specialized tools designed for security teams.
              </p>
              
              <h2>Why Cybersecurity Automation?</h2>
              
              <p>
                Security teams face unprecedented challenges: increasing threat volumes, alert fatigue, skill shortages, and complex compliance requirements. HoneyHive's new cybersecurity automation features help address these challenges by:
              </p>
              
              <ul>
                <li>Reducing mean time to detect (MTTD) and respond (MTTR) to security incidents</li>
                <li>Standardizing response procedures with automated playbooks</li>
                <li>Eliminating manual, repetitive tasks in security workflows</li>
                <li>Streamlining compliance documentation and evidence collection</li>
              </ul>
              
              <h2>Key Cybersecurity Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                <div className="bg-primary-50 rounded-lg p-4">
                  <Shield className="h-6 w-6 text-primary-600 mb-2" />
                  <h3 className="font-semibold mb-1">Threat Detection Automation</h3>
                  <p className="text-sm">
                    AI-powered threat analysis with automated alert prioritization and enrichment
                  </p>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4">
                  <Clock className="h-6 w-6 text-primary-600 mb-2" />
                  <h3 className="font-semibold mb-1">Incident Response Workflows</h3>
                  <p className="text-sm">
                    Pre-built and customizable response playbooks that guide teams through incident resolution
                  </p>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4">
                  <GitBranch className="h-6 w-6 text-primary-600 mb-2" />
                  <h3 className="font-semibold mb-1">Compliance Automation</h3>
                  <p className="text-sm">
                    Automated evidence collection and documentation for major compliance frameworks
                  </p>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4">
                  <Users className="h-6 w-6 text-primary-600 mb-2" />
                  <h3 className="font-semibold mb-1">Security Team Collaboration</h3>
                  <p className="text-sm">
                    Specialized communication tools for security incident management and threat hunting
                  </p>
                </div>
              </div>
              
              <p>
                Our early adopters of these cybersecurity features have reported reducing incident response times by up to 60% and cutting manual compliance documentation work by over 70%.
              </p>
              
              <blockquote>
                "HoneyHive's cybersecurity automation has been a game-changer for our security operations. What used to take hours now happens in minutes, allowing our analysts to focus on the complex threats that require human expertise."
                <cite>— Michael Chen, CISO at FinSecure</cite>
              </blockquote>
              
              <h2>Integration Ecosystem</h2>
              
              <p>
                Our cybersecurity automation features integrate seamlessly with leading security tools including SIEM platforms, endpoint protection solutions, cloud security services, and vulnerability management systems.
              </p>
              
              <p>
                This update represents our commitment to helping security teams work more efficiently and effectively. By automating routine security tasks and standardizing response procedures, HoneyHive enables organizations to build more resilient security operations with their existing teams.
              </p>
              
              <p>
                Interested in seeing how HoneyHive can transform your security operations? <Link to="/contact" className="text-primary-600 hover:text-primary-700">Contact us</Link> to schedule a demo of our new cybersecurity workflow automation capabilities.
              </p>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default withScrollReset(CybersecurityWorkflowAutomation); 