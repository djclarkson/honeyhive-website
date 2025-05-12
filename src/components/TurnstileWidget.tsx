import React, { useEffect, useState } from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

// Add TypeScript interface for window.env
declare global {
  interface Window {
    env?: {
      CLOUDFLARE_TURNSTILE_SITE_KEY?: string;
    };
  }
}

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  className?: string;
}

const TurnstileWidget: React.FC<TurnstileWidgetProps> = ({ onVerify, className = '' }) => {
  // Get the site key from multiple possible sources
  const [siteKey, setSiteKey] = useState<string | null>(null);

  useEffect(() => {
    // Try to get site key from different sources
    let key = 
      // 1. Try window.env (our custom injection)
      (window.env?.CLOUDFLARE_TURNSTILE_SITE_KEY) || 
      // 2. Try import.meta.env
      import.meta.env.CLOUDFLARE_TURNSTILE_SITE_KEY;
    
    console.log("Available env vars:", import.meta.env);
    console.log("Window env:", window.env);
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