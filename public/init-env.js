// This script initializes environment variables before the main app loads
// It will be replaced with actual values during the GitHub Actions build

// Define global Supabase variables
window.VITE_SUPABASE_URL = '__SUPABASE_URL__';
window.VITE_SUPABASE_ANON_KEY = '__SUPABASE_ANON_KEY__';
window.env = {
  CLOUDFLARE_TURNSTILE_SITE_KEY: '__TURNSTILE_SITE_KEY__'
}; 