import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const TermsOfService: React.FC = () => {
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
        <h1 className="text-3xl font-bold mb-8">Terms of Service</h1>
        
        <p className="mb-4 text-gray-700">Last Updated: {formattedDate}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            Welcome to HoneyHive ("Company", "we", "our", "us")! These Terms of Service ("Terms") govern your access to and use of the HoneyHive platform, 
            including any associated mobile and desktop applications and websites (collectively, the "Service").
          </p>
          <p className="mb-4">
            By accessing or using the Service, you agree to be bound by these Terms. If you disagree with any part of the Terms, you may not access the Service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. Communications</h2>
          <p className="mb-4">
            By creating an account on our Service, you agree to subscribe to newsletters, marketing or promotional materials and other information we may send. 
            However, you may opt out of receiving any, or all, of these communications from us by following the unsubscribe link or instructions provided in any email we send.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. User Accounts</h2>
          <p className="mb-4">
            When you create an account with us, you must provide us information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of these Terms, which may result in immediate termination of your account on our Service.
          </p>
          <p className="mb-4">
            You are responsible for safeguarding the password that you use to access the Service and for any activities or actions under your password, whether your password is with our Service or a third-party service.
          </p>
          <p className="mb-4">
            You agree not to disclose your password to any third party. You must notify us immediately upon becoming aware of any breach of security or unauthorized use of your account.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Content and Intellectual Property Rights</h2>
          <p className="mb-4">
            Our Service allows you to post, link, store, share and otherwise make available certain information, text, graphics, videos, or other material ("Content"). You are responsible for the Content that you post on or through the Service, including its legality, reliability, and appropriateness.
          </p>
          <p className="mb-4">
            By posting Content on or through the Service, You represent and warrant that: (i) the Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms, and (ii) the posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
          </p>
          <p className="mb-4">
            We reserve the right to terminate the account of anyone found to be infringing on a copyright.
          </p>
          <p className="mb-4">
            You retain any and all of your rights to any Content you submit, post or display on or through the Service and you are responsible for protecting those rights.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. Use of AI and Data Processing</h2>
          <p className="mb-4">
            Our Service uses artificial intelligence technologies to analyze and process data, facilitate team communication, and provide various features. By using our Service, you acknowledge and agree that:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Content you provide may be processed by AI algorithms to enhance the Service's functionality.</li>
            <li>While we implement appropriate safeguards, AI technology is evolving and may not be perfect.</li>
            <li>You should review any AI-generated content before using it for critical business decisions.</li>
            <li>We use your data to train and improve our AI systems, in accordance with our Privacy Policy.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Prohibited Uses</h2>
          <p className="mb-4">
            You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail", "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate the Company, a Company employee, another user, or any other person or entity.</li>
            <li>To engage in any other conduct that restricts or inhibits anyone's use or enjoyment of the Service, or which may harm the Company or users of the Service or expose them to liability.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Subscription and Payments</h2>
          <p className="mb-4">
            Some parts of the Service are billed on a subscription basis. You will be billed in advance on a recurring and periodic basis, depending on the type of subscription plan you select.
          </p>
          <p className="mb-4">
            At the end of each period, your subscription will automatically renew under the same conditions unless you cancel it or the Company cancels it.
          </p>
          <p className="mb-4">
            You may cancel your subscription either through your online account management page or by contacting our customer support team.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Limitation of Liability</h2>
          <p className="mb-4">
            In no event shall the Company, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>Your access to or use of or inability to access or use the Service;</li>
            <li>Any conduct or content of any third party on the Service;</li>
            <li>Any content obtained from the Service; and</li>
            <li>Unauthorized access, use or alteration of your transmissions or content.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Governing Law</h2>
          <p className="mb-4">
            These Terms shall be governed and construed in accordance with the laws of Singapore, without regard to its conflict of law provisions.
          </p>
          <p className="mb-4">
            Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Changes to Terms</h2>
          <p className="mb-4">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect.
          </p>
          <p className="mb-4">
            By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">11. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about these Terms, please contact us at:
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

export default TermsOfService; 