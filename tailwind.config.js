/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#6998FF', // Electric Indigo (primary accent)
          dark: '#0F1115', // Charcoal background
          surface: '#16181D', // Surface/cards
          text: '#ECEFF1', // Light text
          cyan: '#00CEC9', // Secondary accent
          alert: '#FF7675', // Error/danger
        },
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0, 0, 0, 0.15)',
      },
    },
  },
  plugins: [],
};
