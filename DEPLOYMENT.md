# Deployment Guide

Your portfolio website is ready to deploy! Here are the step-by-step instructions.

## Quick Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications with zero configuration.

### Option 1: Deploy via GitHub (Easiest - No local Node.js needed)

1. **Create a GitHub repository**:
   - Go to [github.com](https://github.com/new)
   - Create a new repository (can be public or private)
   - Don't initialize with README (we already have one)

2. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
   git push -u origin main
   ```

3. **Deploy with Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login (you can use your GitHub account)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js and configure everything
   - Click "Deploy"
   - Your site will be live in ~2 minutes! 🎉

4. **Your site is now live!**
   - Vercel will give you a URL like: `your-project.vercel.app`
   - Every push to `main` branch will automatically redeploy
   - You can add a custom domain in Vercel settings

### Option 2: Deploy via Vercel CLI (Requires Node.js)

If you have Node.js installed locally:

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

3. **Follow the prompts**:
   - Login to your Vercel account
   - Confirm project settings
   - Deploy!

## Alternative Deployment Options

### Netlify

1. **Push to GitHub** (same as above)
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect your GitHub repo
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`
6. Click "Deploy"

### AWS Amplify

1. **Push to GitHub** (same as above)
2. Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
3. Click "New app" → "Host web app"
4. Connect your repository
5. Amplify will auto-detect Next.js settings
6. Deploy

## Before You Deploy - Customization Checklist

Make sure to update these before deploying:

- [ ] Update site title and description in [src/app/layout.tsx](src/app/layout.tsx)
- [ ] Change "Your Name" in [src/components/HeroSection.tsx](src/components/HeroSection.tsx)
- [ ] Update about page content in [src/app/about/page.tsx](src/app/about/page.tsx)
- [ ] Update contact information in [src/app/contact/page.tsx](src/app/contact/page.tsx)
- [ ] Update footer links in [src/components/Footer.tsx](src/components/Footer.tsx)
- [ ] Add your own projects in `content/projects/`
- [ ] Add project images to `public/images/projects/`

## After Deployment

1. **Add a custom domain** (optional):
   - In Vercel/Netlify dashboard, go to Settings → Domains
   - Add your custom domain
   - Update DNS records as instructed

2. **Set up analytics** (optional):
   - Google Analytics
   - Vercel Analytics
   - Plausible

3. **Enable automatic deployments**:
   - Already enabled if you deployed via GitHub
   - Every push to `main` will trigger a new deployment

## Environment Variables

If you need environment variables:

1. Copy `.env.example` to `.env.local`
2. Fill in your values
3. Add the same variables in your deployment platform:
   - Vercel: Settings → Environment Variables
   - Netlify: Site settings → Environment variables

## Troubleshooting

### Build fails with "npm not found"
- Vercel/Netlify will handle this automatically
- For local builds, install Node.js from [nodejs.org](https://nodejs.org)

### Images not showing
- Make sure images are in `public/images/projects/`
- Update image paths in MDX files to match actual filenames

### 404 on project pages
- Vercel/Netlify handle dynamic routes automatically
- No additional configuration needed

## Need Help?

- Vercel Documentation: [vercel.com/docs](https://vercel.com/docs)
- Next.js Deployment: [nextjs.org/docs/deployment](https://nextjs.org/docs/deployment)
- Check [README.md](README.md) for project structure

---

Your site is ready to go live! 🚀
