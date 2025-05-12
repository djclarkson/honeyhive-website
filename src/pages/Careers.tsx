import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Careers: React.FC = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header
        onLoginClick={() => {}}
        isAuthenticated={false}
        onLogout={() => {}}
      />

      <main className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-lg text-gray-600 mb-6">
              We're building the future of cybersecurity workflow automation. If you're passionate about technology
              and want to make an impact in the cybersecurity space, we'd love to hear from you.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Culture</h2>
            <p className="text-gray-700 mb-6">
              We foster a culture of innovation, continuous learning, and collaboration. Our team is dedicated to solving complex security challenges
              with cutting-edge technology while maintaining a healthy work-life balance.
            </p>
            <p className="text-gray-700">
              We embrace diversity and believe that the best ideas come from teams with a wide range of experiences and perspectives.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Skills We're Looking For</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-primary-600 border-b border-gray-200 pb-2 mb-3">AI/ML Model Training</h3>
                <p className="text-gray-700">
                  Experience with developing and optimizing machine learning models, particularly in the security domain. Skills in Python, TensorFlow, PyTorch, and natural language processing.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-600 border-b border-gray-200 pb-2 mb-3">Cybersecurity Engineering</h3>
                <p className="text-gray-700">
                  Deep knowledge of security principles, threat detection, incident response, and compliance frameworks. Hands-on experience with security tools and technologies.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-600 border-b border-gray-200 pb-2 mb-3">Python Development</h3>
                <p className="text-gray-700">
                  Strong Python programming skills with experience in building scalable applications. Familiarity with FastAPI, Flask or Django frameworks.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-600 border-b border-gray-200 pb-2 mb-3">Pydantic & Type Systems</h3>
                <p className="text-gray-700">
                  Experience with Pydantic for data validation and settings management. Ability to design robust type systems for complex applications.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-600 border-b border-gray-200 pb-2 mb-3">ETL Pipeline Development</h3>
                <p className="text-gray-700">
                  Experience building data pipelines for extracting, transforming, and loading security data. Knowledge of stream processing and batch processing systems.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-primary-600 border-b border-gray-200 pb-2 mb-3">Team Collaboration</h3>
                <p className="text-gray-700">
                  Strong communication skills and ability to work in a fast-paced team environment. Passion for learning and adapting to new technologies.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-primary-50 rounded-xl p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Apply?</h2>
            <p className="text-gray-700 mb-6">
              We don't have specific job postings at the moment, but we're always looking for talented individuals to join our team.
              If you believe you have what it takes, reach out to us!
            </p>
            <div>
              <Link
                to="/contact"
                className="inline-block px-8 py-3 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-medium transition-colors"
              >
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

export default Careers; 