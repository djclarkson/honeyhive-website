// A Vite plugin to seed test users during development

/**
 * Creates a Vite plugin that injects a script to create a test user
 * Add this to your vite.config.js:
 * 
 * import { seedUsersPlugin } from './src/scripts/vite-plugin-seed-users';
 * 
 * export default defineConfig({
 *   plugins: [
 *     react(),
 *     seedUsersPlugin()
 *   ],
 *   // ... other config
 * });
 */
export function seedUsersPlugin() {
  const testUsers = [
    {
      email: 'david@honeyhive.com',
      password: 'dogger42p!',
      name: 'David Test User',
      organization: 'HoneyHive'
    }
  ];
  
  return {
    name: 'vite-plugin-seed-users',
    transformIndexHtml() {
      const seedScript = `
        <script>
          (function() {
            // Only run in development
            if (window.location.hostname !== 'localhost') return;
            
            console.log('[Seed] Checking if test users exist...');
            
            const testUsers = ${JSON.stringify(testUsers)};
            
            // Try to create test users on page load
            window.addEventListener('load', function() {
              setTimeout(() => {
                if (!window.authClient) {
                  console.warn('[Seed] authClient not available');
                  return;
                }
                
                testUsers.forEach(user => {
                  console.log('[Seed] Creating test user:', user.email);
                  
                  window.authClient.signUp.email({
                    ...user,
                    callbackURL: '/dashboard'
                  }, {
                    onSuccess: () => console.log('[Seed] Created test user:', user.email),
                    onError: (ctx) => console.warn('[Seed] Failed to create user:', ctx.error.message)
                  }).catch(e => console.warn('[Seed] Error:', e.message));
                });
              }, 1000);
            });
          })();
        </script>
      `;
      
      return {
        html: seedScript,
        tags: []
      };
    },
  };
} 