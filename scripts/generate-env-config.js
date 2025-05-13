// Generate env-config.js file with environment variables
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get directory name in ESM
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Define the content of the env-config.js file
const content = `// This file is generated at build time
// It allows environment variables to be available globally in the browser
window.env = {
  CLOUDFLARE_TURNSTILE_SITE_KEY: '${process.env.VITE_TURNSTILE_SITE_KEY || ""}',
  SUPABASE_URL: '${process.env.VITE_SUPABASE_URL || ""}',
  SUPABASE_ANON_KEY: '${process.env.VITE_SUPABASE_ANON_KEY || ""}'
}; 
`;

// Define the path to the output file in the dist directory
const outputPath = path.resolve(__dirname, '../dist/env-config.js');

// Write the file
fs.writeFileSync(outputPath, content);

console.log('env-config.js generated successfully with environment variables:');
console.log(`- VITE_TURNSTILE_SITE_KEY: ${process.env.VITE_TURNSTILE_SITE_KEY ? '✓ (set)' : '✗ (not set)'}`);
console.log(`- VITE_SUPABASE_URL: ${process.env.VITE_SUPABASE_URL ? '✓ (set)' : '✗ (not set)'}`);
console.log(`- VITE_SUPABASE_ANON_KEY: ${process.env.VITE_SUPABASE_ANON_KEY ? '✓ (set)' : '✗ (not set)'}`); 