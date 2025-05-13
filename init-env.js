// This script is generated at build time 
// It initializes environment variables before the main app loads

// Define global Supabase variables
window.VITE_SUPABASE_URL = "";
window.VITE_SUPABASE_ANON_KEY = "";
window.env = {
  CLOUDFLARE_TURNSTILE_SITE_KEY: "",
  VITE_TURNSTILE_SITE_KEY: ""
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

console.log("Environment initialization complete");