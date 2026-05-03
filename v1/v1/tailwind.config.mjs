/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Phoenix Rising palette — multi-temperature flame on deep ember
        // Surfaces (deep, warm, charred)
        'background': '#0e0604',
        'surface': '#0e0604',
        'surface-dim': '#0a0403',
        'surface-bright': '#1f110a',
        'surface-container-lowest': '#080302',
        'surface-container-low': '#140905',
        'surface-container': '#1a0d07',
        'surface-container-high': '#22130b',
        'surface-container-highest': '#2c1a10',
        'surface-variant': '#2c1a10',

        // Foreground (warm parchment, never pure white)
        'on-surface': '#fbe9d4',
        'on-surface-variant': '#e8c9a3',
        'on-background': '#fbe9d4',
        'outline': '#8a5a3a',
        'outline-variant': '#3d2316',

        // Flame stack — primary (molten), accent (gold flare), peak (white-hot)
        'primary': '#ff5a1f',           // molten core
        'primary-container': '#ff8a3d', // licking flame
        'primary-fixed': '#ffb627',     // gold flare
        'primary-fixed-dim': '#ffd166', // soft gold
        'on-primary': '#1a0500',
        'on-primary-container': '#2a0d00',
        'on-primary-fixed': '#3a1a00',
        'on-primary-fixed-variant': '#5a2d00',

        // Secondary — deep crimson ember (for cool/dark accents inside the fire)
        'secondary': '#c9302c',
        'secondary-container': '#7a1a18',
        'secondary-fixed': '#ff7a6e',
        'secondary-fixed-dim': '#ffb4a8',
        'on-secondary': '#ffffff',
        'on-secondary-container': '#ffe5e1',
        'on-secondary-fixed': '#410001',
        'on-secondary-fixed-variant': '#690005',

        // Tertiary — white-hot tip / smoke contrast
        'tertiary': '#fff4d6',
        'tertiary-container': '#3d2316',
        'tertiary-fixed': '#fff4d6',
        'tertiary-fixed-dim': '#f5dfb0',
        'on-tertiary': '#1a0500',
        'on-tertiary-container': '#fbe9d4',
        'on-tertiary-fixed': '#1a0500',
        'on-tertiary-fixed-variant': '#3a1a00',

        // Status
        'error': '#ff8a73',
        'error-container': '#5a1500',
        'on-error': '#1a0500',
        'on-error-container': '#ffd5cb',

        // Inverse (used for light-on-dark inversions)
        'inverse-surface': '#fbe9d4',
        'inverse-on-surface': '#1a0d07',
        'inverse-primary': '#7a2900',
        'surface-tint': '#ff5a1f',
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'sm': '0.25rem',
        'md': '0.5rem',
        'lg': '0.75rem',
        'xl': '1.25rem',
        '2xl': '1.75rem',
        'full': '9999px',
      },
      fontFamily: {
        'headline': ['"Noto Serif"', 'Georgia', 'serif'],
        'body': ['Manrope', 'system-ui', 'sans-serif'],
        'label': ['Manrope', 'system-ui', 'sans-serif'],
        'mono': ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'fade-up': 'fadeUp 1.2s cubic-bezier(0.22,1,0.36,1) forwards',
        'fade-in': 'fadeIn 1.6s ease-out forwards',
        'float': 'float 7s ease-in-out infinite',
        'ember-rise': 'emberRise linear infinite',
        'flame-flicker': 'flameFlicker 3s ease-in-out infinite',
        'heat-shimmer': 'heatShimmer 8s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'marquee': 'marquee 40s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        emberRise: {
          '0%':   { transform: 'translate3d(0, 0, 0) scale(1)', opacity: '0' },
          '15%':  { opacity: '0.9' },
          '85%':  { opacity: '0.7' },
          '100%': { transform: 'translate3d(var(--drift,0px), -110vh, 0) scale(0.4)', opacity: '0' },
        },
        flameFlicker: {
          '0%, 100%': { opacity: '0.95', filter: 'hue-rotate(0deg) brightness(1)' },
          '25%':      { opacity: '0.85', filter: 'hue-rotate(-6deg) brightness(1.08)' },
          '50%':      { opacity: '1',    filter: 'hue-rotate(4deg)  brightness(0.96)' },
          '75%':      { opacity: '0.9',  filter: 'hue-rotate(-2deg) brightness(1.04)' },
        },
        heatShimmer: {
          '0%, 100%': { transform: 'translateX(0) skewX(0deg)' },
          '50%':      { transform: 'translateX(2px) skewX(0.4deg)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(255,90,31,0.55), 0 0 40px 0 rgba(255,90,31,0.25)' },
          '50%':      { boxShadow: '0 0 0 10px rgba(255,90,31,0.0), 0 0 60px 8px rgba(255,182,39,0.35)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    }
  }
}
