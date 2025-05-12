// Test login for the created test user
// Run with: node src/scripts/test-login.js
import fetch from 'node-fetch';

async function testLogin() {
  const apiUrl = 'http://localhost:3000/api/auth/sign-in';
  
  const credentials = {
    email: 'david@honeyhive.com',
    password: 'dogger42p!',
  };
  
  console.log('Testing login with:', credentials.email);
  
  try {
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(credentials),
    });
    
    const responseData = await response.text();
    const contentType = response.headers.get('content-type');
    
    const data = contentType?.includes('application/json') && responseData 
      ? JSON.parse(responseData) 
      : responseData;
    
    if (!response.ok) {
      console.error(`Login failed (${response.status}):`, data);
    } else {
      console.log('✅ Login successful!');
      console.log('Session data:', data);
    }
  } catch (error) {
    console.error('❌ Error testing login:', error.message);
  }
}

testLogin(); 