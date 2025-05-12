// seedUsers.js - Script to create test users for development
import fetch from 'node-fetch';

const TEST_USERS = [
  {
    email: 'david@honeyhive.com',
    password: 'dogger42p!',
    name: 'David Test User',
    organization: 'HoneyHive'
  }
];

async function seedUsers() {
  console.log('Seeding test users...');
  
  // Change this URL to match your development server
  const apiUrl = 'http://localhost:3000/api/auth/register';
  
  for (const user of TEST_USERS) {
    try {
      console.log(`Creating user: ${user.email}`);
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      
      if (!response.ok) {
        const errorData = await response.json();
        console.error(`Failed to create user ${user.email}:`, errorData);
        continue;
      }
      
      console.log(`✅ Successfully created user: ${user.email}`);
    } catch (error) {
      console.error(`❌ Error creating user ${user.email}:`, error.message);
    }
  }
  
  console.log('User seeding complete');
}

seedUsers(); 