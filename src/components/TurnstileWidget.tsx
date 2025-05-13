import React, { useEffect, useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  className?: string;
}

const TurnstileWidget: React.FC<TurnstileWidgetProps> = ({ onVerify, className = '' }) => {
  // Get the site key from multiple possible sources
  const [siteKey, setSiteKey] = useState<string | null>(null);

  useEffect(() => {
    // Try to get site key from different sources (in order of preference)
    let key = 
      // 1. Try import.meta.env (standard Vite way)
      import.meta.env.VITE_TURNSTILE_SITE_KEY || 
      // 2. Try window.import.meta.env (our custom injection)
      window.import?.meta?.env?.VITE_TURNSTILE_SITE_KEY ||
      // 3. Try older env vars
      import.meta.env.CLOUDFLARE_TURNSTILE_SITE_KEY ||
      window.import?.meta?.env?.CLOUDFLARE_TURNSTILE_SITE_KEY ||
      // 4. Try window.env (our custom global injection)
      window.env?.VITE_TURNSTILE_SITE_KEY || 
      window.env?.CLOUDFLARE_TURNSTILE_SITE_KEY;
    
    console.log("Turnstile site key sources:");
    console.log(" - import.meta.env:", import.meta.env);
    console.log(" - window.import?.meta?.env:", window.import?.meta?.env);
    console.log(" - window.env:", window.env);
    console.log("Site key found:", key);
    
    setSiteKey(key || null);
  }, []);

  if (!siteKey) {
    console.error('Cloudflare Turnstile site key is not defined in environment variables');
    return (
      <div className="text-sm text-red-500 mt-2">
        CAPTCHA configuration error. Please contact support.
      </div>
    );
  }

  return (
    <div className={`my-4 ${className}`}>
      <Turnstile 
        siteKey={siteKey}
        onSuccess={onVerify}
        options={{
          theme: 'light',
          size: 'normal'
        }}
      />
    </div>
  );
};

export default TurnstileWidget; 