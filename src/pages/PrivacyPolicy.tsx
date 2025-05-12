import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PrivacyPolicy: React.FC = () => {
  // Format current date in a consistent way (MM/DD/YYYY)
  const today = new Date();
  const formattedDate = `${today.getMonth() + 1}/${today.getDate()}/${today.getFullYear()}`;
  
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header 
        onLoginClick={() => {}} 
        isAuthenticated={false}
        onLogout={() => {}}
      />
      
      <main className="container mx-auto py-12 px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
        
        <p className="mb-4 text-gray-700">Last Updated: {formattedDate}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            HoneyHive, operated by Hive 42 Pte Ltd ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by HoneyHive.
          </p>
          <p className="mb-4">
            This Privacy Policy applies to our website, platform, and related services (collectively, our "Service"). By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
          
          <h3 className="text-xl font-semibold mb-3">2.1 Information You Provide to Us</h3>
          <p className="mb-4">
            We collect information you provide directly to us when you:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Create or modify your account</li>
            <li>Use our Service</li>
            <li>Communicate with us</li>
            <li>Register for our events or promotions</li>
            <li>Complete surveys</li>
          </ul>
          <p className="mb-4">
            The types of information we may collect include:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Contact information (name, email address, postal address, phone number)</li>
            <li>Account credentials (username, password)</li>
            <li>Profile information (profile picture, job title, department)</li>
            <li>Communications and messages shared through our platform</li>
            <li>Feedback and correspondence (survey responses, customer support requests)</li>
            <li>Payment information (credit card details, billing address)</li>
          </ul>
          
          <h3 className="text-xl font-semibold mb-3">2.2 Information We Collect Automatically</h3>
          <p className="mb-4">
            When you use our Service, we automatically collect certain information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Device information (hardware model, operating system, IP address)</li>
            <li>Log information (access times, browser type, pages viewed)</li>
            <li>Usage data (features used, interactions, content shared)</li>
            <li>Location information</li>
            <li>Cookies and similar technologies</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
          <p className="mb-4">
            We use the information we collect for various purposes, including to:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Provide, maintain, and improve our Service</li>
            <li>Process transactions and send related information</li>
            <li>Send notifications, updates, and technical notices</li>
            <li>Respond to your comments, questions, and requests</li>
            <li>Communicate about products, services, offers, promotions, and events</li>
            <li>Monitor and analyze trends, usage, and activities</li>
            <li>Detect, investigate, and prevent fraudulent transactions and unauthorized access</li>
            <li>Personalize and improve your experience</li>
            <li>Develop new products and services</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. AI Processing and Message Data</h2>
          <p className="mb-4">
            Our Service utilizes artificial intelligence and machine learning technologies to provide enhanced features like smart suggestions, content analysis, and workflow automation. To provide these features:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>We process message content and data shared on our platform to deliver these AI-powered features</li>
            <li>We may analyze patterns and content within your team's communications to improve collaboration and productivity</li>
            <li>Our AI systems are designed to respect privacy and confidentiality</li>
          </ul>
          <p className="mb-4">
            You control the extent to which your data is used for AI processing through your account settings. You may opt-out of certain AI-powered features while still using the core Service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. How We Share Your Information</h2>
          <p className="mb-4">
            We may share your personal information in the following situations:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>With Other Users:</strong> When you use collaborative features, your information may be visible to other users with whom you interact or share workspace access.</li>
            <li><strong>With Service Providers:</strong> We may share your information with third-party vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.</li>
            <li><strong>For Legal Reasons:</strong> We may disclose your information if we believe it is necessary to comply with a legal obligation, protect our rights and property, or during a corporate transaction.</li>
            <li><strong>With Your Consent:</strong> We may share your information when you direct us to do so or provide your consent.</li>
          </ul>
          <p className="mb-4">
            We do not sell your personal information to advertisers or other third parties.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Data Retention</h2>
          <p className="mb-4">
            We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. When determining the specific retention period, we take into account various criteria, such as the type of service provided, the nature and length of our relationship, and legal requirements.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Data Security</h2>
          <p className="mb-4">
            We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable, and we cannot guarantee the security of our systems or your information.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Your Rights and Choices</h2>
          <p className="mb-4">
            Depending on your location, you may have certain rights regarding your personal information, including:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Accessing, correcting, or deleting your information</li>
            <li>Withdrawing your consent</li>
            <li>Opting out of certain communications</li>
            <li>Objecting to certain uses of your information</li>
            <li>Requesting the transfer of your information</li>
            <li>Lodging a complaint with a data protection authority</li>
          </ul>
          <p className="mb-4">
            To exercise these rights, please contact us using the information provided in the "Contact Us" section.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. International Data Transfers</h2>
          <p className="mb-4">
            Your information may be transferred to, and maintained on, computers located outside of your state, province, country, or other governmental jurisdiction where the data protection laws may differ from those in your jurisdiction.
          </p>
          <p className="mb-4">
            If you are located outside Singapore and choose to provide information to us, please note that we transfer the information to Singapore and process it there. By submitting your information, you consent to this transfer.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Children's Privacy</h2>
          <p className="mb-4">
            Our Service is not directed to children under the age of 13 (or the applicable age in your jurisdiction). We do not knowingly collect personal information from children. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us, and we will take steps to delete such information.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Changes to This Privacy Policy</h2>
          <p className="mb-4">
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">12. Contact Us</h2>
          <p className="mb-4">
            If you have questions or concerns about this Privacy Policy or our practices, please contact us at:
          </p>
          <p className="mb-4">
            Email: counsel@honeyhive.com<br />
            Address: 36 Robinson Road # 20-01 City House Singapore 068877
          </p>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy; 