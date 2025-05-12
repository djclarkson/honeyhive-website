/**
 * Verifies a Cloudflare Turnstile token with the Cloudflare API
 * @param token The Turnstile token to verify
 * @returns A response object with success status and error codes if applicable
 */
export async function verifyTurnstileToken(token: string): Promise<{
  success: boolean;
  error?: string;
  errorCodes?: string[];
}> {
  try {
    // Skip verification in development if configured to do so
    if (process.env.NODE_ENV === 'development' && process.env.SKIP_TURNSTILE_IN_DEV === 'true') {
      console.log('Skipping Turnstile verification in development');
      return { success: true };
    }

    // Get the secret key from environment variables
    const secretKey = process.env.TURNSTILE_SECRET || process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    
    if (!secretKey) {
      console.error('Turnstile secret key is not defined');
      return { success: false, error: 'CAPTCHA configuration error' };
    }

    // Prepare the request to Cloudflare API
    const formData = new URLSearchParams();
    formData.append('secret', secretKey);
    formData.append('response', token);

    // Make the request to Cloudflare API
    const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const result = await fetch(verifyEndpoint, {
      method: 'POST',
      body: formData,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    // Parse the response
    const outcome = await result.json();
    
    if (!outcome.success) {
      console.error('Turnstile verification failed:', outcome);
      return { 
        success: false, 
        error: 'CAPTCHA verification failed', 
        errorCodes: outcome['error-codes'] 
      };
    }

    return { success: true };
  } catch (error) {
    console.error('Error verifying Turnstile token:', error);
    return { success: false, error: 'An error occurred during CAPTCHA verification' };
  }
} 