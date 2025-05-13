import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Get the repository name from package.json or use a fallback
const repo = 'new.honeyhive.com';

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? `/${repo}/` : '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});