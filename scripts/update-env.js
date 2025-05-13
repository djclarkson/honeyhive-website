// This script updates the init-env.js file with environment variables at build time

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to init-env.js in the dist directory
const initEnvPath = path.join(__dirname, '../dist/init-env.js');

// Generate the init-env.js content
const generateInitEnvContent = () => {
  // Get environment variables
  const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
  const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';
  const turnstileSiteKey = process.env.VITE_TURNSTILE_SITE_KEY || process.env.CLOUDFLARE_TURNSTILE_SITE_KEY || '';

  return `// This script is generated at build time 
// It initializes environment variables before the main app loads

// Define global Supabase variables
window.VITE_SUPABASE_URL = "${supabaseUrl}";
window.VITE_SUPABASE_ANON_KEY = "${supabaseAnonKey}";
window.env = {
  CLOUDFLARE_TURNSTILE_SITE_KEY: "${turnstileSiteKey}",
  VITE_TURNSTILE_SITE_KEY: "${turnstileSiteKey}"
};

// Create Vite environment variables on window
if (!window.import) window.import = {};
if (!window.import.meta) window.import.meta = {};
if (!window.import.meta.env) window.import.meta.env = {};

// Add environment variables to import.meta.env as well
window.import.meta.env.VITE_SUPABASE_URL = window.VITE_SUPABASE_URL;
window.import.meta.env.VITE_SUPABASE_ANON_KEY = window.VITE_SUPABASE_ANON_KEY;
window.import.meta.env.VITE_TURNSTILE_SITE_KEY = window.env.VITE_TURNSTILE_SITE_KEY;
window.import.meta.env.CLOUDFLARE_TURNSTILE_SITE_KEY = window.env.CLOUDFLARE_TURNSTILE_SITE_KEY;

console.log("Environment initialization complete");`;
};

// Check if init-env.js exists
if (fs.existsSync(initEnvPath)) {
  // Update the file with the new content
  fs.writeFileSync(initEnvPath, generateInitEnvContent());
  console.log('✅ Successfully updated dist/init-env.js with environment variables');
} else {
  console.error('❌ Error: dist/init-env.js file not found');
  process.exit(1);
} 