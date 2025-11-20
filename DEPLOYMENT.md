# 🚀 Production Deployment Guide

## Pre-Deployment Checklist

### ✅ Code Quality

- [x] All TypeScript types properly defined
- [x] No console.log statements in production code
- [x] Error boundaries implemented
- [x] All lint errors resolved
- [x] Build passes successfully (`npm run build`)

### ✅ Performance

- [x] Images optimized (AVIF/WebP)
- [x] Code splitting configured
- [x] Lazy loading implemented
- [x] Bundle size optimized
- [x] Framer Motion optimized imports

### ✅ SEO

- [x] Meta tags configured
- [x] OpenGraph tags added
- [x] Twitter Card tags added
- [x] Sitemap.xml generated
- [x] Robots.txt configured
- [x] Proper heading hierarchy

### ✅ Accessibility

- [x] ARIA labels added
- [x] Alt text for all images
- [x] Keyboard navigation tested
- [x] Semantic HTML used
- [x] Focus management

### ✅ Security

- [x] No API keys exposed
- [x] Environment variables secured
- [x] Headers configured
- [x] XSS protection enabled

## 🌐 Deployment Options

### Option 1: Vercel (Recommended)

1. **Install Vercel CLI**

```bash
npm i -g vercel
```

2. **Login to Vercel**

```bash
vercel login
```

3. **Deploy**

```bash
vercel
```

4. **Deploy to Production**

```bash
vercel --prod
```

### Option 2: Netlify

1. **Build Command**: `npm run build`
2. **Publish Directory**: `.next`
3. **Environment Variables**: Add in Netlify dashboard

### Option 3: Docker

```dockerfile
FROM node:18-alpine AS base

# Install dependencies
FROM base AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# Build
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN npm run build

# Production
FROM base AS runner
WORKDIR /app
ENV NODE_ENV=production
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000
CMD ["node", "server.js"]
```

### Option 4: VPS (Digital Ocean, AWS, etc.)

1. **Install Node.js 18+**
2. **Clone repository**
3. **Install dependencies**: `npm install`
4. **Build**: `npm run build`
5. **Start with PM2**:

```bash
npm i -g pm2
pm2 start npm --name "degaus" -- start
pm2 save
pm2 startup
```

## 🔧 Environment Variables

Create `.env.production` file:

```env
# Required
NEXT_PUBLIC_SITE_URL=https://degaus.com
NEXT_PUBLIC_SITE_NAME=degaus

# Optional - Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Optional - Error Tracking
NEXT_PUBLIC_SENTRY_DSN=https://...
SENTRY_AUTH_TOKEN=...

# Optional - API
API_URL=https://api.degaus.com
API_KEY=...
```

## 📊 Performance Monitoring

### Lighthouse CI

```bash
npm i -g @lhci/cli
lhci autorun --config=lighthouserc.json
```

### Web Vitals

The app reports Web Vitals automatically. In production, send these to your analytics:

```typescript
// app/layout.tsx
export const reportWebVitals = (metric: any) => {
  // Send to analytics service
  analytics.track(metric.name, metric.value)
}
```

## 🔒 Security Headers

Add to `next.config.ts`:

```typescript
async headers() {
  return [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-DNS-Prefetch-Control',
          value: 'on'
        },
        {
          key: 'X-Frame-Options',
          value: 'SAMEORIGIN'
        },
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        }
      ]
    }
  ]
}
```

## 🚦 CI/CD Pipeline

### GitHub Actions Example

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm ci
      - run: npm run build
      - run: npm run lint
      - uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID}}
          vercel-project-id: ${{ secrets.PROJECT_ID}}
```

## 📈 Post-Deployment

### 1. Domain Setup

- Configure DNS records
- Enable HTTPS/SSL
- Set up CDN if needed

### 2. Analytics

- Install Google Analytics
- Configure GTM
- Set up conversion tracking

### 3. Monitoring

- Set up error tracking (Sentry, LogRocket)
- Configure uptime monitoring
- Set up performance monitoring

### 4. Testing

- Run Lighthouse audit
- Test on real devices
- Verify all links work
- Test forms and CTAs

## 🔄 Updates & Maintenance

### Regular Tasks

- Update dependencies monthly
- Monitor performance metrics
- Check error logs weekly
- Backup database/data

### Updating Dependencies

```bash
# Check for updates
npm outdated

# Update patch versions
npm update

# Update major versions (carefully)
npx npm-check-updates -u
npm install
```

## 🆘 Troubleshooting

### Build Fails

1. Clear `.next` folder: `rm -rf .next`
2. Clear node_modules: `rm -rf node_modules && npm install`
3. Check Node version: Should be 18+

### Performance Issues

1. Check bundle size: `npm run build -- --analyze`
2. Optimize images
3. Enable caching
4. Use CDN for static assets

### Runtime Errors

1. Check error boundary logs
2. Verify environment variables
3. Check API endpoints
4. Review browser console

## 📞 Support

For deployment issues:

- Technical: tech@degaus.com
- General: contact@degaus.com

---

Last Updated: November 2025
