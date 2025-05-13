// This file is generated for testing
window.env = {
  CLOUDFLARE_TURNSTILE_SITE_KEY: "TEST_VALUE"
};

// Add environment variables to import.meta.env
window.importMetaEnv = {
  VITE_SUPABASE_URL: "https://test-supabase-instance.supabase.co",
  VITE_SUPABASE_ANON_KEY: "test-anon-key"
};

// Attach to import.meta.env
try {
  if (typeof import.meta !== 'undefined') {
    import.meta.env = {
      ...import.meta.env,
      ...window.importMetaEnv
    };
  }
} catch (e) {
  console.warn("Could not attach to import.meta.env");
} 
