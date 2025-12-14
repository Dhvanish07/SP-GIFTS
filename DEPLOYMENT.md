# Vercel Deployment Guide

## Pre-Deployment Checklist

✅ Next.js 16.0.10 with Turbopack
✅ TypeScript configured
✅ Tailwind CSS for styling
✅ All pages compiled successfully
✅ Image optimization enabled
✅ Environment variables configured
✅ GitHub repository configured

## Quick Deploy to Vercel

### Option 1: Import from GitHub (Recommended)

1. Go to [Vercel Dashboard](https://vercel.com)
2. Click **Add New → Project**
3. Select **Import Git Repository**
4. Paste GitHub URL: `https://github.com/Dhvanish07/SHREE-PARSHVA-GIFTS`
5. Configure project:
   - **Framework Preset:** Next.js
   - **Build Command:** `npm run build` (default)
   - **Output Directory:** `.next` (default)
6. Add environment variables (optional):
   ```
   NEXT_PUBLIC_APP_NAME=Shree Parshva Gifts
   NEXT_PUBLIC_WHATSAPP_NUMBER=919421246733
   ```
7. Click **Deploy**

### Option 2: CLI Deployment

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# For production
vercel --prod
```

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_APP_NAME=Shree Parshva Gifts
NEXT_PUBLIC_WHATSAPP_NUMBER=919421246733
NEXT_PUBLIC_ENABLE_ANALYTICS=false
```

In Vercel Dashboard, add these same variables to project settings.

## Build & Test Locally

```bash
# Build
npm run build

# Start production server
npm start

# Or use dev server
npm run dev
```

## Deployed Routes

- `/` - Home page
- `/hampers` - Hamper customizer
- `/corporate` - Corporate gifting
- `/trousseau` - Trousseau packing
- `/dryfruits` - Dry fruits customizer
- `/about` - About page
- `/stories` - Customer stories
- `/cart` - Shopping cart

## Image Assets

All images are stored in `public/media/` with the following naming convention:
- No spaces in filenames
- Use hyphens for word separation
- Example: `spg-logo.png`, `customer-satisfaction.jpeg`

## Performance Optimizations

- ✅ Image optimization with next/image
- ✅ Automatic WebP/AVIF conversion
- ✅ Static page pre-rendering
- ✅ CSS minification with Tailwind
- ✅ JavaScript code splitting
- ✅ 60-day cache for images

## Troubleshooting

### Build Fails with "Not Found" Error
- Check image filenames for special characters or spaces
- Ensure all referenced files exist in `public/media/`
- Review build logs in Vercel dashboard

### Images Not Loading
- Verify file paths are relative to `public/` folder
- Use lowercase filenames for consistency
- Check image optimization settings in next.config.ts

### Slow Initial Load
- Verify images are optimized
- Check bundle size: `next/info`
- Consider lazy loading for below-fold images

## Support

For Vercel-specific issues, visit:
- [Vercel Docs](https://vercel.com/docs)
- [Next.js Docs](https://nextjs.org/docs)

## Custom Domain (Optional)

In Vercel Dashboard:
1. Go to Project Settings
2. Domains → Add Domain
3. Follow DNS configuration steps

---

**Project Ready for Production! 🚀**
