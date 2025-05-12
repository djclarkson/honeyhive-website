import React from 'react';
import { Turnstile } from '@marsidev/react-turnstile';

interface TurnstileWidgetProps {
  onVerify: (token: string) => void;
  className?: string;
}

const TurnstileWidget: React.FC<TurnstileWidgetProps> = ({ onVerify, className = '' }) => {
  // This should be set in your .env files
  const siteKey = import.meta.env.VITE_CLOUDFLARE_TURNSTILE_SITE_KEY || 
                  import.meta.env.CLOUDFLARE_TURNSTILE_SITE_KEY;

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