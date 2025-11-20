# 🏗️ Degaus Landing Page - Project Structure

## 📋 Overview

Professionally organized landing page built with Next.js 15 using React/Next.js best practices.

## 📁 Directory Structure

```
degaus/
├── app/
│   ├── globals.css          # CSS variables, utility classes
│   ├── layout.tsx           # Root layout with fonts
│   └── page.tsx             # Main page (sections composition)
│
├── components/
│   ├── Header.tsx           # Navigation with liquid glass effect
│   ├── Footer.tsx           # Footer with links
│   │
│   ├── ui/                  # Reusable UI components
│   │   ├── index.ts         # Barrel export of all UI components
│   │   ├── Badge.tsx        # Section badges
│   │   ├── Button.tsx       # Gradient buttons
│   │   ├── CheckIcon.tsx    # SVG checkmark icon
│   │   ├── Container.tsx    # Container with max-width
│   │   ├── FeatureList.tsx  # Feature list with checkmarks
│   │   ├── PricingCard.tsx  # Pricing plan card
│   │   ├── Section.tsx      # Section wrapper
│   │   ├── SectionHeading.tsx  # Section heading component
│   │   ├── StatsCard.tsx    # Statistics card
│   │   └── VideoCard.tsx    # Video card component
│   │
│   ├── sections/            # Landing sections
│   │   ├── HeroSection.tsx      # Hero with main CTA
│   │   ├── UseCasesSection.tsx  # Use cases with videos
│   │   ├── FeaturesSection.tsx  # 3-column features
│   │   ├── PricingSection.tsx   # Pricing plans
│   │   └── FAQSection.tsx       # Q&A accordion
│   │
│   └── icons/               # SVG icons
│       ├── BalloonIcon.tsx
│       ├── GemIcon.tsx
│       └── SparklesIcon.tsx
│
├── lib/
│   ├── design-system.ts     # Design tokens (colors, typography)
│   └── constants.ts         # Section data
│
└── public/
    ├── videos/              # Video files
    ├── images/
    │   ├── cards/           # Card images
    │   └── brands/          # Brand logos
    └── *.svg                # SVG icons (checked-blue, checked-pink, etc.)
```

## 🎨 Design System

### colors (`lib/design-system.ts`)

```typescript
colors: {
  background: {
    primary: '#ffffff',
    secondary: '#f3f3f9',
    tertiary: '#e9e8f5',
    faq: '#f9f9ff',
    dark: '#1e1e22'
  },
  text: {
    primary: '#323232',
    secondary: '#616161',
    tertiary: '#8d8d8d',
    badge: '#7e7e7e',
    muted: '#c6c6c6'
  },
  accent: {
    blue: '#152cd3',
    purple: '#a01c96',
    gradientStart: '#152cd3',
    gradientEnd: '#b308a7'
  },
  border: {
    light: '#e5e5e5',
    white: '#ffffff',
    dark: '#36383f',
    darker: '#484848'
  }
}
```

### Typography

- **Fonts**: Bricolage Grotesque (headings), Darker Grotesque (body)
- **Sizes**: 50px, 34px, 28px, 24px, 20px, 18px
- **Letter spacing**: from -1.5px to -0.52px

### Spacing

- Section padding: 4rem (64px)
- Container max-width: 1280px
- Border radius: 5px, 10px, 15px, 20px, 40px

## 🧩 Reusable Components

### UI Components (`components/ui/`)

#### **Badge**

```tsx
<Badge>Pricing</Badge>
```

- White badge with shadow
- Used in section headers

#### **SectionHeading**

```tsx
<SectionHeading
  title='Start creating more content today'
  subtitle='Choose the plan that makes the most sense...'
/>
```

- Title + subtitle
- Centered text

#### **FeatureList**

```tsx
<FeatureList items={features} checkColor='bg-linear-to-br from-blue-400 to-blue-500' />
```

- List with checkmarks
- Custom icon colors

#### **VideoCard**

```tsx
<VideoCard
  videoSrc='/videos/example.mov'
  title='End-to-end Ads'
  icon={<GemIcon />}
  features={features}
  checkIconSrc='/checked-blue.svg'
/>
```

- Autoplay video
- Title, icon, feature list

#### **PricingCard**

```tsx
<PricingCard name='Pro' price='$149.99' period='/ month' popular={true} features={features} />
```

- Pricing plan card
- Popular badge support

#### **StatsCard**

```tsx
<StatsCard
  imageSrc='/images/cards/stats1.png'
  imageAlt='Statistics'
  backgroundColor='#fef7e6'
  title='5x+'
  description='More posts'
/>
```

- Statistics card
- Gradient background, image

## 📊 Data (`lib/constants.ts`)

Centralized data storage for sections:

- `PRICING_PLANS` - pricing plans
- `FAQ_ITEMS` - FAQ questions
- `USE_CASES` - use cases with videos

## 🎯 Best Practices

### ✅ Applied:

1. **Component Architecture**

   - Separation into ui/sections/icons
   - Barrel exports (`components/ui/index.ts`)
   - Component reusability

2. **Design System**

   - CSS variables in `globals.css`
   - Design tokens in `lib/design-system.ts`
   - Single source of truth for colors/fonts

3. **TypeScript Typing**

   - Interfaces for all props
   - Type safety everywhere

4. **Performance**

   - Next.js Image optimization
   - Lazy loading videos
   - Avoiding CSS-in-JS (Tailwind)

5. **DRY Principle**

   - No code duplication
   - Reusable components
   - Centralized data

6. **Accessibility**

   - Semantic HTML tags
   - Alt texts for images
   - ARIA labels where needed

7. **Style Organization**
   - Tailwind for utilities
   - CSS variables for theming
   - Utility classes for repeating patterns

## 🚀 Usage

### Adding a new section:

1. Create component in `components/sections/`
2. Use UI components from `components/ui/`
3. Add data to `lib/constants.ts` (if needed)
4. Import in `app/page.tsx`

### Adding a new UI component:

1. Create file in `components/ui/`
2. Add export to `components/ui/index.ts`
3. Use design tokens from `lib/design-system.ts`

### Changing colors/styles:

1. Update `lib/design-system.ts`
2. Update CSS variables in `app/globals.css`
3. Components will update automatically

## 📝 Usage Examples

### Creating a new section with Badge and Heading:

```tsx
import { Badge, SectionHeading, Container } from '@/components/ui'

export default function NewSection() {
  return (
    <section className='bg-[#e9e8f5] py-16'>
      <Container>
        <Badge>New Section</Badge>
        <SectionHeading title='Amazing Title' subtitle='Some description here' />
        {/* Section content */}
      </Container>
    </section>
  )
}
```

### Using FeatureList:

```tsx
import { FeatureList } from '@/components/ui'

const features = [
  { text: 'Feature 1', enabled: true },
  { text: 'Feature 2', enabled: true },
  { text: 'Feature 3', enabled: false }
]

<FeatureList
  items={features}
  checkColor="bg-linear-to-br from-blue-400 to-blue-500"
/>
```

## 🔧 Technologies

- **Next.js 15** - App Router, RSC
- **React 19** - Latest features
- **TypeScript** - Type safety
- **Tailwind CSS v4** - Utility-first CSS
- **Fonts**: Bricolage Grotesque, Darker Grotesque

## 📦 Export Structure

### UI Components Barrel Export:

```typescript
// components/ui/index.ts
export { Badge } from './Badge'
export { Button } from './Button'
export { CheckIcon } from './CheckIcon'
export { Container } from './Container'
export { FeatureList } from './FeatureList'
export { PricingCard } from './PricingCard'
export { Section } from './Section'
export { SectionHeading } from './SectionHeading'
export { StatsCard } from './StatsCard'
export { VideoCard } from './VideoCard'
```

This allows importing like:

```typescript
import { Badge, SectionHeading, PricingCard } from '@/components/ui'
```

## 🎨 CSS Utility Classes

Available in `globals.css`:

- `.section-badge` - badge style
- `.btn-gradient` - gradient button
- `.card-shadow` - card shadow
- `.card-inset-shadow` - inset shadow
- `.liquid-glass` - glass effect (header)

## ✨ Summary

The project now has:

- ✅ Clean component architecture
- ✅ Design System with variables
- ✅ Reusable UI components
- ✅ Centralized data
- ✅ TypeScript typing
- ✅ React/Next.js best practices
- ✅ Maintainable and scalable code
