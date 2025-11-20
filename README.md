# Degaus - AI Content Landing Page

Modern, production-ready landing page for AI content creation platform. Built with Next.js 16, React 19, and Tailwind CSS 4 with smooth animations and optimized performance.

## ✨ Features

- 🎨 **Modern Design** - Clean UI with Tailwind CSS and custom design system
- 🎬 **Smooth Animations** - Fade-up scroll animations with Framer Motion
- 📱 **Fully Responsive** - Mobile-first design that works on all devices
- ⚡ **Performance Optimized** - AVIF/WebP images, code splitting, compression
- 🔍 **SEO Ready** - Complete metadata, OpenGraph, Twitter Cards, sitemap
- ♿ **Accessible** - ARIA labels, semantic HTML, proper heading hierarchy
- 🎯 **Production Ready** - Error boundaries, performance monitoring, optimized build

## 🚀 Getting Started

### Environment Setup

Create a `.env.local` file in the root directory:

```bash
# PostHog Analytics
NEXT_PUBLIC_POSTHOG_KEY=your_posthog_project_api_key
NEXT_PUBLIC_POSTHOG_HOST=https://app.posthog.com
```

See `.env.local.example` for reference.

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint

# Auto-fix lint issues
npm run lint:fix
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
degaus/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── sitemap.ts         # Dynamic sitemap
├── components/
│   ├── sections/          # Landing page sections
│   │   ├── HeroSection.tsx
│   │   ├── FeaturesSection.tsx
│   │   ├── UseCasesSection.tsx
│   │   ├── PricingSection.tsx
│   │   └── FAQSection.tsx
│   ├── ui/                # Reusable UI components
│   │   ├── Badge.tsx
│   │   ├── FadeInView.tsx
│   │   ├── FeatureCard.tsx
│   │   ├── FeatureList.tsx
│   │   ├── PricingCard.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── StatsCard.tsx
│   │   └── VideoCard.tsx
│   ├── Header.tsx
│   ├── Footer.tsx
│   └── ErrorBoundary.tsx  # Production error handling
├── lib/
│   ├── constants.ts       # App constants and content
│   ├── design-system.ts   # Design tokens
│   ├── performance.ts     # Performance monitoring
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
├── public/                # Static assets
│   ├── icons/
│   ├── images/
│   └── videos/
└── DEPLOYMENT.md          # Deployment guide
```

## 🛠️ Tech Stack

- **Next.js 16.0.3** - React framework with App Router and Turbopack
- **React 19.2.0** - Latest React with improved performance
- **TypeScript 5** - Type safety and better DX
- **Tailwind CSS 4** - Utility-first CSS with custom design tokens
- **Framer Motion 12** - Smooth scroll animations
- **Google Fonts** - Bricolage Grotesque (headings) & Darker Grotesque (body)

## 🎨 Design System

The project uses a consistent design system with Tailwind colors:

- **Backgrounds**: `violet-100`, `gray-50`, `violet-50`
- **Text**: `gray-800` (primary), `gray-500` (secondary), `gray-600` (muted)
- **Accents**: `violet-200`, `violet-300`, `cyan-200`
- **Buttons**: `blue-700` to `fuchsia-700` gradients

## 🔧 Configuration

- **next.config.ts** - Next.js with compression, image optimization, Strict Mode
- **tailwind.config.ts** - Custom design tokens and Tailwind 4 setup
- **tsconfig.json** - TypeScript with strict mode
- **eslint.config.mjs** - ESLint with Next.js config

## 📊 Performance

- Static site generation (SSG)
- Optimized images (AVIF/WebP)
- Code splitting and lazy loading
- Framer Motion optimized imports
- Compression enabled
- No powered-by header

## 🚀 Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions for Vercel, Netlify, and other platforms.

## 📝 Key Features

### Sections

- **Hero** - Eye-catching introduction with CTA
- **Features** - Built-in AI video editor showcase
- **Use Cases** - End-to-end Ads & Organic Content
- **Pricing** - Free, Pro, and Enterprise plans with "Most Popular" badge
- **FAQ** - Expandable questions with smooth transitions

### Components

- Animated scroll effects on all sections
- Responsive pricing cards with glow effects
- Interactive FAQ accordion
- Video previews with custom styling
- Stats cards with gradients
- Feature cards with icons

## 📄 License

Private project
