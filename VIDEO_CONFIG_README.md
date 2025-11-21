# Video Autoplay Configuration

This file provides centralized control for all video autoplay settings across the website.

## Location

`lib/videoConfig.ts`

## Usage

To toggle autoplay for **all videos** on the website, simply change the `autoplay` value:

```typescript
export const VIDEO_CONFIG = {
  autoplay: true, // Set to false to disable autoplay
  loop: true,
  muted: true,
  playsInline: true,
  preload: 'auto' as const,
} as const
```

## Affected Components

This configuration controls video behavior in:

- ✅ **VideoCard** (`components/ui/VideoCard.tsx`) - Hero section carousel videos
- ✅ **FeatureCard** (`components/ui/FeatureCard.tsx`) - Feature section videos
- ✅ **FeaturesSection** (`components/sections/FeaturesSection.tsx`) - Additional feature videos

## Examples

### Enable Autoplay (Default)

```typescript
autoplay: true
```

All videos will automatically play when loaded.

### Disable Autoplay

```typescript
autoplay: false
```

All videos will require manual play interaction.

## Notes

- Changes to `VIDEO_CONFIG` will affect **all videos** across the entire website
- No need to modify individual components
- The configuration is type-safe and centralized for easy maintenance
