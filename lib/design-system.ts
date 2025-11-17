/**
 * Design System
 * Централизованные константы дизайна для всего приложения
 */

export const colors = {
  // Primary colors
  primary: {
    blue: '#152cd3',
    purple: '#b308a7',
    gradient: 'bg-linear-to-r from-[#152cd3] to-[#b308a7]',
  },

  // Background colors
  background: {
    main: '#F3F3F9',
    section: {
      light: '#e9e8f5',
      lighter: '#f3f3f9',
      card: '#f9f9ff',
    },
  },

  // Text colors
  text: {
    primary: '#323232',
    secondary: '#616161',
    tertiary: '#7e7e7e',
    muted: '#8d8d8d',
    link: '#152cd3',
  },

  // Border colors
  border: {
    light: '#e5e5e5',
    white: '#ffffff',
    dark: '#36383f',
  },

  // Feature specific
  feature: {
    dark: {
      bg: '#1e1e22',
      text: '#eeeeee',
      textLight: '#e0e0e0',
      textMuted: '#c6c6c6',
      border: '#36383f',
      divider: '#484848',
    },
  },
} as const

export const typography = {
  // Font families
  fonts: {
    heading: "font-['Bricolage_Grotesque']",
    body: "font-['Darker_Grotesque']",
  },

  // Font sizes (Darker Grotesque)
  fontSize: {
    xs: 'text-base', // 16px
    sm: 'text-lg', // 18px
    base: 'text-xl', // 20px
    lg: 'text-2xl', // 24px
    xl: 'text-[26px]', // 26px
    '2xl': 'text-[28px]', // 28px
    '3xl': 'text-[34px]', // 34px
    '4xl': 'text-5xl', // 48px
    hero: 'text-[clamp(3rem,2.4435rem+2.7826vw,5rem)]', // 48-80px responsive
  },

  // Letter spacing
  tracking: {
    tight: 'tracking-[-1.5px]',
    normal: 'tracking-[-0.72px]',
    wide: 'tracking-[-0.6px]',
    wider: 'tracking-[-0.84px]',
  },

  // Font weights
  weight: {
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  },
} as const

export const spacing = {
  section: {
    py: 'py-16',
    px: 'px-6',
  },
  container: {
    maxWidth: 'max-w-7xl',
    maxWidthNarrow: 'max-w-6xl',
  },
  gap: {
    sm: 'gap-3',
    md: 'gap-6',
    lg: 'gap-9',
    xl: 'gap-14',
  },
} as const

export const shadows = {
  card: 'shadow-[0px_4px_4px_0px_rgba(0,0,0,0.15)]',
  cardLg: 'shadow-lg',
  button:
    'shadow-[0px_4px_15px_0px_rgba(46,71,249,0.25),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.35)]',
  buttonDark:
    'shadow-[0px_4px_15px_0px_rgba(16,16,17,0.25),inset_0px_-4px_4px_0px_rgba(0,0,0,0.3),inset_0px_4px_4px_0px_rgba(255,255,255,0.35)]',
  badge: 'shadow-[0px_4px_10px_0px_rgba(50,84,255,0.25)]',
  inset:
    'shadow-[inset_0px_-4px_4px_0px_rgba(0,0,0,0.05),inset_0px_4px_4px_0px_rgba(255,255,255,0.3)]',
  insetHover:
    'shadow-[inset_0px_-2px_2px_0px_rgba(0,0,0,0.05),inset_0px_2px_2px_0px_rgba(255,255,255,0.4)]',
} as const

export const borderRadius = {
  sm: 'rounded-[5px]',
  md: 'rounded-[10px]',
  lg: 'rounded-[15px]',
  xl: 'rounded-[20px]',
  '2xl': 'rounded-3xl',
  '3xl': 'rounded-[40px]',
} as const

/**
 * Utility для создания классов с константами дизайн-системы
 */
export const getTextClass = (
  size: keyof typeof typography.fontSize,
  weight: keyof typeof typography.weight = 'bold',
  color: string = colors.text.primary
) => {
  return `${typography.fontSize[size]} ${typography.weight[weight]} text-[${color}]`
}

export const getSectionClass = () => {
  return `${spacing.section.py} ${spacing.section.px}`
}
