import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const CookiePolicy: React.FC = () => {
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
        <h1 className="text-3xl font-bold mb-8">Cookie Policy</h1>
        
        <p className="mb-4 text-gray-700">Last Updated: {formattedDate}</p>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
          <p className="mb-4">
            This Cookie Policy explains how HoneyHive, operated by Hive 42 Pte Ltd ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website and use our services (collectively, our "Service"). It explains what these technologies are and why we use them, as well as your rights to control our use of them.
          </p>
          <p className="mb-4">
            This Cookie Policy is part of and is incorporated into our Terms of Service and Privacy Policy. By using our Service, you are agreeing to the use of cookies and similar technologies for the purposes described in this policy.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">2. What Are Cookies?</h2>
          <p className="mb-4">
            Cookies are small data files that are placed on your computer or mobile device when you visit a website. Cookies are widely used by website owners to make their websites work, or to work more efficiently, as well as to provide reporting information.
          </p>
          <p className="mb-4">
            Cookies set by the website owner (in this case, HoneyHive) are called "first-party cookies". Cookies set by parties other than the website owner are called "third-party cookies". Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., analytics, interactive content and advertising).
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">3. Types of Cookies We Use</h2>
          <p className="mb-4">
            We use the following types of cookies:
          </p>
          
          <h3 className="text-xl font-semibold mb-3">3.1 Essential Cookies</h3>
          <p className="mb-4">
            These cookies are necessary for the Service to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in, or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the Service will not then work.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">3.2 Performance/Analytics Cookies</h3>
          <p className="mb-4">
            These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our Service. They help us to know which pages are the most and least popular and see how visitors move around the Service. All information these cookies collect is aggregated and therefore anonymous.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">3.3 Functionality Cookies</h3>
          <p className="mb-4">
            These cookies enable the Service to provide enhanced functionality and personalization. They may be set by us or by third-party providers whose services we have added to our pages. If you do not allow these cookies, then some or all of these services may not function properly.
          </p>
          
          <h3 className="text-xl font-semibold mb-3">3.4 Targeting/Advertising Cookies</h3>
          <p className="mb-4">
            These cookies may be set through our Service by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant advertisements on other websites. They do not directly store personal information but are based on uniquely identifying your browser and internet device.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">4. Specific Cookies We Use</h2>
          <p className="mb-4">
            Below is a detailed list of the cookies we use on our Service:
          </p>
          
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-4 py-2 border">Cookie Name</th>
                  <th className="px-4 py-2 border">Type</th>
                  <th className="px-4 py-2 border">Purpose</th>
                  <th className="px-4 py-2 border">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border">_honeyhive_session</td>
                  <td className="px-4 py-2 border">Essential</td>
                  <td className="px-4 py-2 border">Maintains user session</td>
                  <td className="px-4 py-2 border">Session</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">_honeyhive_auth</td>
                  <td className="px-4 py-2 border">Essential</td>
                  <td className="px-4 py-2 border">Authentication token</td>
                  <td className="px-4 py-2 border">30 days</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">_ga</td>
                  <td className="px-4 py-2 border">Analytics</td>
                  <td className="px-4 py-2 border">Google Analytics cookie used to distinguish users</td>
                  <td className="px-4 py-2 border">2 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">_gid</td>
                  <td className="px-4 py-2 border">Analytics</td>
                  <td className="px-4 py-2 border">Google Analytics cookie used to distinguish users</td>
                  <td className="px-4 py-2 border">24 hours</td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border">_honeyhive_preferences</td>
                  <td className="px-4 py-2 border">Functionality</td>
                  <td className="px-4 py-2 border">Stores user preferences</td>
                  <td className="px-4 py-2 border">1 year</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <p className="mb-4">
            We may update this list as our Service evolves or as we introduce new features that use cookies.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">5. How We Use Cookies and Similar Technologies</h2>
          <p className="mb-4">
            We use cookies and similar technologies for the following purposes:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li>To authenticate users and maintain sessions</li>
            <li>To provide personalized content and user experience</li>
            <li>To analyze usage patterns and traffic to improve our Service</li>
            <li>To remember your preferences and settings</li>
            <li>To secure user accounts and protect against fraud</li>
            <li>To process payments and transactions</li>
            <li>To integrate with AI-powered features and services</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">6. Other Tracking Technologies</h2>
          <p className="mb-4">
            In addition to cookies, we may use other similar technologies to track your use of our Service:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Web Beacons:</strong> Small graphic images (also known as "pixel tags" or "clear GIFs") that may be included on our Service and typically work in conjunction with cookies to identify our users and user behavior.</li>
            <li><strong>Local Storage Objects:</strong> Technologies such as HTML5 Local Storage and Flash may be used to store information on your device. This helps us provide a better user experience but also serves similar purposes as cookies.</li>
            <li><strong>Analytics Scripts:</strong> JavaScript code segments that collect information about how visitors use our Service.</li>
          </ul>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">7. Managing Your Cookie Preferences</h2>
          <p className="mb-4">
            Most web browsers allow you to control cookies through their settings preferences. Below are instructions for managing cookies in popular browsers:
          </p>
          <ul className="list-disc pl-6 mb-4 space-y-2">
            <li><strong>Google Chrome:</strong> Settings → Privacy and Security → Cookies and other site data</li>
            <li><strong>Mozilla Firefox:</strong> Options → Privacy & Security → Cookies and Site Data</li>
            <li><strong>Safari:</strong> Preferences → Privacy → Cookies and website data</li>
            <li><strong>Microsoft Edge:</strong> Settings → Cookies and site permissions → Cookies and site data</li>
          </ul>
          <p className="mb-4">
            In addition, we provide a cookie preference center within our Service where you can choose which optional cookies you allow us to use.
          </p>
          <p className="mb-4">
            Please note that if you choose to block or delete cookies, some features of the Service may not function properly.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">8. Do Not Track</h2>
          <p className="mb-4">
            Some browsers have a "Do Not Track" feature that signals to websites that you visit that you do not want to have your online activity tracked. Due to the lack of a common interpretation of Do Not Track signals across the industry, we currently do not respond to Do Not Track signals. We continue to review new technologies and may adopt a standard once one is created.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">9. Updates to This Cookie Policy</h2>
          <p className="mb-4">
            We may update this Cookie Policy from time to time to reflect changes in technology, regulation, or our business practices. Any changes will become effective when we post the revised Cookie Policy on our Service. We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies and related technologies.
          </p>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
          <p className="mb-4">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us at:
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

export default CookiePolicy; 