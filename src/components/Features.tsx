import React from 'react';
import { Brain, MessageSquare, BarChart, Layers, DollarSign, Link, Zap, Bell, TrendingUp, CheckSquare, Eye } from 'lucide-react';
import { features } from '../data/features';

const iconComponents = {
  Brain,
  MessageSquare,
  BarChart,
  Layers,
  DollarSign,
  Link,
  Zap,
  Bell,
  TrendingUp,
  CheckSquare,
  Eye,
};

const Features: React.FC = () => {
  const renderIcon = (iconName: string) => {
    const IconComponent = iconComponents[iconName as keyof typeof iconComponents];
    return IconComponent ? <IconComponent className="h-6 w-6 text-primary-600" /> : null;
  };

  return (
    <section id="features" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Cybersecurity Needs Honeyhive</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Today's cybersecurity is expensive, siloed, and ineffective. Honeyhive changes that with intelligent automation and unified workflows.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.slice(0, 6).map((feature, index) => (
            <div 
              key={feature.id}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
              style={{ 
                opacity: 0,
                animation: 'slideUp 0.5s ease-out forwards',
                animationDelay: `${0.1 + index * 0.1}s`
              }}
            >
              <div className="bg-primary-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                {renderIcon(feature.icon)}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-primary-50 rounded-2xl p-8 mb-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">The Honeyhive Difference</h3>
            <p className="text-gray-600 max-w-2xl mx-auto mt-2">
              While other solutions add to the complexity, Honeyhive simplifies cybersecurity with a comprehensive, intuitive platform.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.slice(6, 8).map((feature, index) => (
              <div 
                key={feature.id}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                style={{ 
                  opacity: 0,
                  animation: 'slideUp 0.5s ease-out forwards',
                  animationDelay: `${0.5 + index * 0.1}s`
                }}
              >
                <div className="bg-primary-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                  {renderIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Transform Your Security?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">
            Join forward-thinking companies that are making cybersecurity more effective, affordable, and manageable with Honeyhive.
          </p>
          <button className="px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors">
            Join Waitlist
          </button>
        </div>
      </div>
    </section>
  );
};

export default Features;