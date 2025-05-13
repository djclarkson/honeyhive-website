import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Shield, Award, Users, BookOpen, Building } from 'lucide-react';
import daveClarksonImage from '../assets/images/dave.clarkson.jpg';

const About: React.FC = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Honeyhive</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Innovative cybersecurity workflow automation solutions led by industry experts
            </p>
          </div>
          
          <div className="mb-16">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/3">
                <div className="bg-primary-50 rounded-2xl p-1">
                  <div className="bg-white rounded-xl shadow-md overflow-hidden">
                    <div className="p-6">
                      <div className="flex justify-center mb-4">
                        <div className="h-40 w-40 rounded-full overflow-hidden">
                          <img 
                            src={daveClarksonImage} 
                            alt="David Clarkson" 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <h2 className="text-xl font-bold text-center mb-1">David Clarkson, CISSP</h2>
                      <p className="text-gray-500 text-center mb-4">Founder & CEO</p>
                      <div className="border-t border-gray-100 pt-4 mt-4">
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Award className="h-4 w-4 text-primary-500 mr-2" />
                          <span>Technology & Cybersecurity Expert</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mb-2">
                          <Building className="h-4 w-4 text-primary-500 mr-2" />
                          <span>20+ Years Industry Experience</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                          <BookOpen className="h-4 w-4 text-primary-500 mr-2" />
                          <span>Harvard Business School</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Leadership</h2>
                <p className="text-gray-700 mb-4">
                  Honeyhive is led by David Clarkson, a distinguished cybersecurity veteran with over 20 years of experience at the intersection of technology, security, and business strategy.
                </p>
                <p className="text-gray-700 mb-4">
                  David brings exceptional expertise in cloud architecture, information security, and AI-driven GRC automation solutions. His career spans leadership roles at prominent organizations including US Bank, where he led IT and Cyber Risk Transformation, as well as RSA Security, Symantec, and IBM Global Services.
                </p>
                <p className="text-gray-700">
                  As a thought leader in security workflow automation, David founded Honeyhive with a mission to help organizations strengthen their security posture through intelligent automation that streamlines incident response, threat detection, and compliance processes.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="flex items-center mb-6">
              <Shield className="h-8 w-8 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
            </div>
            
            <p className="text-gray-700 mb-6">
              At Honeyhive, we're on a mission to transform cybersecurity operations through intelligent workflow automation. We believe that by combining advanced AI with deep security expertise, we can help organizations respond faster to threats, maintain compliance more efficiently, and build more resilient security programs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Innovative Solutions</h3>
                <p className="text-gray-600 text-sm">
                  We develop cutting-edge cybersecurity workflow automation tools that integrate seamlessly with your existing security infrastructure.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Expert Guidance</h3>
                <p className="text-gray-600 text-sm">
                  Our solutions are built on decades of real-world cybersecurity experience across financial services, technology, and critical infrastructure.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-5 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-2">Client Success</h3>
                <p className="text-gray-600 text-sm">
                  We measure our success by the security outcomes we help our clients achieve: faster response times, stronger compliance, and enhanced protection.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Security Operations?</h2>
            <p className="text-gray-600 mb-6">
              Learn how Honeyhive's cybersecurity workflow automation can help your organization respond faster to threats and strengthen your security posture.
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

export default About; 