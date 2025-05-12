// Copy and paste this into your browser console while on the HoneyHive website
// This uses the authClient that's already loaded in the browser
(async () => {
  try {
    // Access the authClient already loaded in the page
    if (!window.authClient) {
      console.error('❌ authClient not found. Are you on the HoneyHive website?');
      return;
    }
    
    console.log('Creating test user...');
    
    // Use the same approach as the LoginFormBetter component
    await window.authClient.signUp.email({
      email: 'david@honeyhive.com',
      password: 'dogger42p!',
      name: 'David Test User',
      organization: 'HoneyHive',
      callbackURL: '/dashboard'
    }, {
      onSuccess: (data) => {
        console.log('✅ User created successfully!', data);
      },
      onError: (ctx) => {
        console.error('❌ Failed to create user:', ctx.error.message);
      }
    });
  } catch (error) {
    console.error('❌ Error:', error);
  }
})(); 