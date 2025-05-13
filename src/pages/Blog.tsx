import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, ChevronRight } from 'lucide-react';
import withScrollReset from '../components/withScrollReset';

interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const blogPosts: BlogPost[] = [
  {
    id: '2',
    title: "Honeyhive Expands with Cybersecurity Workflow Automation Features",
    date: "September 19, 2024",
    excerpt: "We're thrilled to announce a major update to Honeyhive, introducing powerful cybersecurity workflow automation capabilities to help security teams respond faster to threats...",
    slug: 'cybersecurity-workflow-automation'
  },
  {
    id: '1',
    title: "Introducing Honeyhive: Team Communication Automation for the Modern Workplace",
    date: "October 13, 2014",
    excerpt: "Today we're excited to announce the launch of Honeyhive, our innovative communication automation platform designed to streamline team collaboration...",
    slug: 'introducing-honeyhive'
  }
];

const Blog: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Honeyhive Blog</h1>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Latest updates, insights and news about cybersecurity workflow automation
            </p>
          </div>
          
          <div className="space-y-8">
            {blogPosts.map(post => (
              <div key={post.id} className="bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden transition-all duration-300 hover:shadow-lg">
                <Link to={`/blog/${post.slug}`} className="block p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>{post.date}</span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary-600 font-medium">
                    Read more <ChevronRight className="h-4 w-4 ml-1" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default withScrollReset(Blog); 