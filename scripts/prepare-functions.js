import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Paths
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const functionsDir = path.resolve(distDir, 'functions');
const apiDir = path.resolve(rootDir, 'api');
const srcApiDir = path.resolve(rootDir, 'src', 'api');

// Ensure directories exist
if (!fs.existsSync(distDir)) {
  fs.mkdirSync(distDir, { recursive: true });
}

if (!fs.existsSync(functionsDir)) {
  fs.mkdirSync(functionsDir, { recursive: true });
}

// Create the functions/api directory structure
const functionsApiDir = path.resolve(functionsDir, 'api');
if (!fs.existsSync(functionsApiDir)) {
  fs.mkdirSync(functionsApiDir, { recursive: true });
}

// Create the auth directory structure
const functionsAuthDir = path.resolve(functionsApiDir, 'auth');
if (!fs.existsSync(functionsAuthDir)) {
  fs.mkdirSync(functionsAuthDir, { recursive: true });
}

// Copy and convert the waitlist API
const waitlistApiPath = path.resolve(apiDir, 'waitlist.ts');
const waitlistFunctionContent = `
// Cloudflare Pages Function for waitlist API
export async function onRequestPost(context) {
  try {
    const { request, env } = context;
    const body = await request.json();
    const { email, turnstileToken } = body;

    if (!email) {
      return new Response(JSON.stringify({ error: 'Email is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    if (!turnstileToken) {
      return new Response(JSON.stringify({ error: 'CAPTCHA verification is required' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Verify turnstile token
    const secretKey = env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    if (!secretKey) {
      return new Response(JSON.stringify({ error: 'CAPTCHA configuration error' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', turnstileToken);

    const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(verifyEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const outcome = await result.json();
    if (!outcome.success) {
      return new Response(JSON.stringify({ 
        error: 'CAPTCHA verification failed', 
        errorCodes: outcome['error-codes'] 
      }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    // Create Supabase client
    const supabaseUrl = env.VITE_SUPABASE_URL;
    const supabaseAnonKey = env.VITE_SUPABASE_ANON_KEY;
    
    // Call the Supabase Edge Function for waitlist
    const response = await fetch(\`\${supabaseUrl}/functions/v1/waitlist\`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': \`Bearer \${supabaseAnonKey}\`
      },
      body: JSON.stringify({ email })
    });

    const data = await response.json();
    
    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    return new Response(JSON.stringify({ 
      error: error.message || 'Internal server error' 
    }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
}
`;

// Write the waitlist function
fs.writeFileSync(
  path.resolve(functionsApiDir, 'waitlist.js'),
  waitlistFunctionContent
);

// Create the auth function
const authFunctionContent = `
// Cloudflare Pages Function for auth API
export async function onRequest(context) {
  const { request, env } = context;
  
  // Proxy the request to Supabase Auth API
  const supabaseUrl = env.VITE_SUPABASE_URL;
  const path = new URL(request.url).pathname.replace('/api/auth', '/auth/v1');
  const url = \`\${supabaseUrl}\${path}\`;
  
  // Forward the request
  const response = await fetch(url, {
    method: request.method,
    headers: request.headers,
    body: request.body
  });
  
  return response;
}
`;

// Write the catch-all auth function
fs.writeFileSync(
  path.resolve(functionsAuthDir, '_middleware.js'),
  authFunctionContent
);

// Create a _routes.json file in the dist directory for proper SPA routing
const routesJson = {
  "version": 1,
  "include": ["/*"],
  "exclude": [
    "/assets/*",
    "/functions/*"
  ]
};

fs.writeFileSync(
  path.resolve(distDir, '_routes.json'),
  JSON.stringify(routesJson, null, 2)
);

console.log('API functions prepared successfully for Cloudflare Pages!'); 