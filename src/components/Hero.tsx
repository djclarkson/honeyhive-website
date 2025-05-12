import React from 'react';
import { ChevronRight } from 'lucide-react';
import heroScreenSm from '../assets/images/hero-screen-sm.png';
import heroScreenLg from '../assets/images/hero-screen-lg.png';
import heroScreenXl from '../assets/images/hero-screen-xl.png';

interface HeroProps {
  onLoginClick: () => void;
  onWaitlistClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLoginClick, onWaitlistClick }) => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 animate-fade-in">
              <span className="text-primary-600">Cyber Security</span> Workflow Automation
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8 animate-slide-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
              Strengthen your security posture with AI-powered automation that streamlines incident response, threat detection, and compliance workflows.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
              <button 
                onClick={onLoginClick}
                className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors flex items-center justify-center"
              >
                Login
                <ChevronRight size={18} className="ml-1" />
              </button>
              
              <button 
                onClick={onWaitlistClick}
                className="px-8 py-3 rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium transition-colors flex items-center justify-center"
              >
                Join Waitlist
              </button>
            </div>
          </div>
          
          <div className="md:w-1/2 animate-scale-in opacity-0" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
            <div className="relative">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[#ffebd0] to-[#ffd7a8] transform rotate-2 scale-105 shadow-lg"></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
                {/* Browser chrome */}
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-sm font-medium text-gray-500"></div>
                    <div className="w-8"></div> {/* Empty div for balance */}
                  </div>
                </div>
                
                {/* Responsive Hero Screen Images */}
                <div className="bg-gray-50">
                  <picture>
                    <source srcSet={heroScreenXl} media="(min-width: 1280px)" />
                    <source srcSet={heroScreenLg} media="(min-width: 768px)" />
                    <img 
                      src={heroScreenSm} 
                      alt="Security Dashboard Interface" 
                      className="w-full h-auto"
                    />
                  </picture>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;