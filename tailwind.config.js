/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warm: {
          bg: '#F5F3EE',          // Primary warm off-white canvas
          surface: '#ECE9E2',     // Elevated warm stone tone
          muted: '#E4E0D7',       // Subtle border / input surface
          card: '#FFFFFF',        // Clean white card background
        },
        dark: {
          bg: '#111214',          // Deep charcoal / near-black primary background
          surface: '#18191D',     // Elevated dark surface
          surfaceMuted: '#212328',// Secondary surface / inputs / cards
          border: '#2C2E35',      // Subtle dark borders
          text: '#EDEDEC',        // Warm off-white primary text
          textMuted: '#9E9EA4',   // Muted gray secondary text
        },
        charcoal: {
          950: '#0E1012',
          900: '#17191B',         // Deep industrial charcoal
          800: '#222528',
          700: '#33373D',
          600: '#525860',         // Secondary body text
          400: '#878E96',         // Muted captions & technical labels
          200: '#D5D8DC',
        },
        accent: {
          orange: '#ED5A24',      // Super Parcel freight orange (restrained)
          orangeHover: '#D94C18',
        }
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        display: ['Manrope', 'system-ui', 'sans-serif'],
      },
      borderColor: {
        'steel': 'rgba(23, 25, 27, 0.09)',
        'steel-strong': 'rgba(23, 25, 27, 0.18)',
        'steel-dark': 'rgba(255, 255, 255, 0.08)',
        'steel-dark-strong': 'rgba(255, 255, 255, 0.15)',
      },
      boxShadow: {
        'subtle': '0 4px 20px -2px rgba(23, 25, 27, 0.04)',
        'elevated': '0 20px 40px -15px rgba(23, 25, 27, 0.07)',
        'dark-subtle': '0 4px 20px -2px rgba(0, 0, 0, 0.35)',
        'dark-elevated': '0 20px 40px -15px rgba(0, 0, 0, 0.55)',
      }
    },
  },
  plugins: [],
}
