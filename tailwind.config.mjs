export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'error-container': '#93000a',
        'on-secondary': '#402d00',
        'primary-container': '#FF6B00',
        'secondary-fixed': '#ffdea3',
        'surface-dim': '#141313',
        'on-primary-fixed-variant': '#5d4201',
        'tertiary-container': '#a7a5a4',
        'on-error': '#690005',
        'surface': '#141313',
        'surface-bright': '#3a3939',
        'error': '#ffb4ab',
        'on-error-container': '#ffdad6',
        'on-tertiary': '#303030',
        'on-surface-variant': '#d1c5b4',
        'surface-container-high': '#2b2a2a',
        'on-primary-container': '#1b0d00',
        'secondary-fixed-dim': '#e8c176',
        'surface-container-lowest': '#0f0e0e',
        'on-secondary-container': '#d9b36a',
        'tertiary-fixed-dim': '#c8c6c5',
        'primary': '#FF6B00',
        'on-tertiary-fixed-variant': '#474746',
        'primary-fixed-dim': '#FF6B00',
        'on-primary': '#000000',
        'on-secondary-fixed-variant': '#5c4200',
        'secondary-container': '#5f4502',
        'tertiary': '#c8c6c5',
        'outline-variant': '#4e4639',
        'inverse-surface': '#e6e1e1',
        'inverse-on-surface': '#313030',
        'surface-container-low': '#1c1b1b',
        'tertiary-fixed': '#e4e2e1',
        'on-tertiary-container': '#3b3b3b',
        'on-secondary-fixed': '#261900',
        'primary-fixed': '#ff9e59',
        'outline': '#9a8f80',
        'on-primary-fixed': '#261900',
        'surface-container-highest': '#363434',
        'on-surface': '#e6e1e1',
        'background': '#141313',
        'surface-container': '#201f1f',
        'on-tertiary-fixed': '#1b1c1b',
        'surface-variant': '#363434',
        'secondary': '#FF6B00',
        'inverse-primary': '#775a19',
        'on-background': '#e6e1e1',
        'surface-tint': '#FF6B00'
      },
      borderRadius: {
        'DEFAULT': '0.125rem',
        'lg': '0.25rem',
        'xl': '0.5rem',
        'full': '9999px'
      },
      fontFamily: {
        'headline': ['Noto Serif'],
        'body': ['Manrope'],
        'label': ['Manrope']
      }
    }
  }
}
