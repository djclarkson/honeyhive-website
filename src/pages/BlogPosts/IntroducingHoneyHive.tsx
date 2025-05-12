import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Calendar, ChevronLeft, MessageSquare, Users, Target } from 'lucide-react';
import withScrollReset from '../../components/withScrollReset';

const IntroducingHoneyHive: React.FC = () => {
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
                <span>October 13, 2014</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Introducing HoneyHive: Team Communication Automation for the Modern Workplace
              </h1>
            </div>
            
            <div className="prose prose-lg max-w-none">
              <p>
                Today we're excited to announce the launch of HoneyHive, our innovative communication automation platform designed to streamline team collaboration and enhance productivity in today's distributed work environment.
              </p>
              
              <p>
                As workplaces evolve and remote work becomes increasingly common, teams face growing challenges in maintaining effective communication. Traditional tools leave gaps that lead to information silos, missed action items, and disconnected workflows.
              </p>
              
              <h2>What is HoneyHive?</h2>
              
              <p>
                HoneyHive is a comprehensive communication automation platform that integrates traditional online messaging with structured team management, task tracking, and goal setting. Our platform creates a unified workspace where teams can:
              </p>
              
              <ul>
                <li>
                  <strong>Streamline Communications</strong> - Bring together messaging, file sharing, and structured communications in a single interface
                </li>
                <li>
                  <strong>Enhance Team Collaboration</strong> - Organize teams and projects with customizable workspaces and permission controls
                </li>
                <li>
                  <strong>Automate Workflows</strong> - Convert conversations into trackable tasks and actionable goals with intelligent automation
                </li>
                <li>
                  <strong>Track Progress</strong> - Monitor team performance and goal completion with intuitive dashboards and reporting
                </li>
              </ul>
              
              <h2>Key Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-6">
                <div className="bg-primary-50 rounded-lg p-4">
                  <MessageSquare className="h-6 w-6 text-primary-600 mb-2" />
                  <h3 className="font-semibold mb-1">Smart Messaging</h3>
                  <p className="text-sm">
                    Intelligent message organization with context-aware threading and priority flagging
                  </p>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4">
                  <Users className="h-6 w-6 text-primary-600 mb-2" />
                  <h3 className="font-semibold mb-1">Team Management</h3>
                  <p className="text-sm">
                    Flexible team structures with customizable roles and communications channels
                  </p>
                </div>
                
                <div className="bg-primary-50 rounded-lg p-4">
                  <Target className="h-6 w-6 text-primary-600 mb-2" />
                  <h3 className="font-semibold mb-1">Goals & Tasks</h3>
                  <p className="text-sm">
                    Integrated goal-setting and task management with automated tracking
                  </p>
                </div>
              </div>
              
              <p>
                Early users of HoneyHive have reported saving an average of 5 hours per week on communication and coordination tasks, allowing their teams to focus on what matters most.
              </p>
              
              <blockquote>
                "HoneyHive has transformed how our teams collaborate. The integration of messaging with tasks and goals means nothing falls through the cracks, and everyone stays aligned on priorities."
                <cite>— Sarah Johnson, CTO at TechForward</cite>
              </blockquote>
              
              <h2>What's Next</h2>
              
              <p>
                This is just the beginning for HoneyHive. Our roadmap includes expanding our integration capabilities with popular tools, enhancing our automation features, and introducing specialized workflows for different team functions.
              </p>
              
              <p>
                We're excited to be on this journey and look forward to helping teams communicate more effectively and achieve their goals with less friction.
              </p>
              
              <p>
                Ready to transform your team's communication? <Link to="/contact" className="text-primary-600 hover:text-primary-700">Contact us</Link> to schedule a demo or learn more about HoneyHive.
              </p>
            </div>
          </article>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default withScrollReset(IntroducingHoneyHive); 