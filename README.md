# Honeyhive

A modern security platform with Supabase integration.

## Technology Stack

- React with TypeScript
- Supabase for authentication, database, and edge functions
- GitHub Pages for static hosting
- Supabase Edge Functions for serverless API endpoints

## Development

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
```bash
cp env.example .env
```

3. Run the development server:
```bash
npm run dev
```

## Deployment

The application automatically deploys to GitHub Pages when changes are pushed to the master branch via GitHub Actions.

### GitHub Actions Environment Variables

The deployment relies on environment variables configured in GitHub:

1. Repository secrets are stored in the "github-pages" environment
2. Workflow-level environment variables must be defined in the `.github/workflows/deploy.yml` file:
   ```yaml
   env:
     VITE_SUPABASE_URL: ${{ secrets.VITE_SUPABASE_URL }}
     VITE_SUPABASE_ANON_KEY: ${{ secrets.VITE_SUPABASE_ANON_KEY }}
     VITE_TURNSTILE_SITE_KEY: ${{ secrets.VITE_TURNSTILE_SITE_KEY }}
   ```
3. The build process creates the `init-env.js` file with these variables during deployment

**Important**: Never hardcode the placeholders in `public/init-env.js` as this will break the application. The placeholders are replaced during the build process.

### Manual Deployment to GitHub Pages
```bash
npm run deploy
```

## Supabase Edge Functions

Edge functions are deployed to Supabase and provide serverless API endpoints.

### Deploying Edge Functions
```bash
# Install Supabase CLI if not already installed
npm install -g supabase

# Login to Supabase
supabase login

# Deploy the waitlist function
supabase functions deploy waitlist
```

## Migrated from Cloudflare Pages
This project was migrated from Cloudflare Pages to GitHub Pages, with API functionality moved to Supabase Edge Functions. 