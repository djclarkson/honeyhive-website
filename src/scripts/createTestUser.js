// This is a simple script to create a test user
// Run with: node src/scripts/createTestUser.js

const fetch = require('node-fetch');

async function createTestUser() {
  console.log('Creating test user...');
  
  const apiUrl = 'http://localhost:3000/api/auth/sign-up';
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'david@honeyhive.com',
        password: 'dogger42p!',
        name: 'David Test User',
        organization: 'HoneyHive'
      }),
    });
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Failed with status ${response.status}: ${JSON.stringify(error)}`);
    }
    
    const data = await response.json();
    console.log('✅ Test user created successfully:', data);
  } catch (error) {
    console.error('❌ Failed to create test user:', error.message);
  }
}

createTestUser(); 