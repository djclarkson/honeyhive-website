// Create a test user for better-auth
// Run with: node src/scripts/create-test-user.js
import fetch from 'node-fetch';

async function createTestUser() {
  const apiUrl = 'http://localhost:3000/api/auth/sign-up'; // Better-auth signup endpoint
  
  const userData = {
    email: 'david@honeyhive.com',
    password: 'dogger42p!',
    name: 'David Test User',
    organization: 'HoneyHive'
  };
  
  console.log('Creating test user:', userData.email);
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    const responseData = await response.text();
    const contentType = response.headers.get('content-type');
    
    const data = contentType?.includes('application/json') && responseData 
      ? JSON.parse(responseData) 
      : responseData;
    
    if (!response.ok) {
      console.error(`Error (${response.status}):`, data);
    } else {
      console.log('✅ User created successfully!');
      console.log('Response:', data);
    }
  } catch (error) {
    console.error('❌ Failed to create user:', error.message);
  }
}

createTestUser(); 