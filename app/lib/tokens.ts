export const tokens = {
  colors: {
    bg: '#08090F',
    surface1: '#0F1020',
    surface2: '#161830',
    border: '#1E2040',
    gold: '#f2c35b',
    goldDim: '#a88f3a',
    lavender: '#8B7CF8',
    lavenderDim: '#4A4580',
    textPrimary: '#F0EDF8',
    textSecondary: '#9B98BC',
    textMuted: '#5A5878',
    white: '#FFFFFF',
    error: '#EF4444',
    success: '#22C55E',
    alpha: {
      gold15: '#f2c35b26',
      ghostBorder: '#f2c35b66',
      badgeBorder: '#f2c35b4D',
      answerSelectedBg: '#f2c35b14',
    },
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },
  radius: {
    sm: 8,
    md: 12,
    lg: 16,
    xl: 24,
    full: 999,
  },
  typography: {
    fontFamilies: {
      display: 'Cormorant',
      body: 'Montserrat',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    sizes: {
      xs: 12,
      sm: 13,
      body: 15,
      bodyLg: 16,
      subheading: 18,
      heading: 24,
      headingLg: 32,
      display: 40,
      displayLg: 56,
    },
    lineHeights: {
      tight: 1.2,
      normal: 1.4,
      relaxed: 1.6,
      loose: 1.7,
    },
  },
  layout: {
    screenPaddingH: 24,
    safeTop: 52,
    safeBottom: 34,
    screenWidth: 390,
    screenHeight: 844,
  },
  elevation: {
    shadow: {
      card: '0 4px 24px rgba(0,0,0,0.4)',
      modal: '0 8px 40px rgba(0,0,0,0.6)',
    },
    glow: {
      gold: '0 0 20px rgba(242,195,91,0.35)',
      lavender: '0 0 20px rgba(139,124,248,0.25)',
      text: '0 0 12px rgba(242,195,91,0.4)',
    },
  },
  components: {
    button: {
      heightMd: 56,
      heightSm: 52,
      borderWidth: 1.5,
    },
    input: {
      height: 56,
    },
    card: {
      borderWidth: 1,
    },
    opacity: {
      locked: 0.7,
      disabled: 0.4,
    },
  },
  icons: {
    library: 'Lucide',
    strokeWidth: '1.5px',
    sizes: {
      sm: 16,
      md: 20,
      lg: 24,
      xl: 32,
    },
  },
  animation: {
    durations: {
      fast: 150,
      normal: 250,
      slow: 400,
      cinematic: 600,
    },
    easing: {
      out: 'cubic-bezier(0.0, 0.0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0.0, 1, 1)',
      spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
  },
};
