// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
//
//


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class', // Esto es crucial para el funcionamiento del tema oscuro
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
          800: '#075985',
          900: '#0c4a6e',
        },
        secondary: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        dark: {
          // Fondos
          'bg-primary': '#121212',
          'bg-secondary': '#1E1E1E',
          'bg-elevated': '#242424',
          // Textos
          'text-primary': '#FFFFFF',
          'text-secondary': '#A0AEC0',
          'text-tertiary': '#718096',
          // Bordes
          'border-primary': '#2D3748',
          'border-secondary': '#4A5568'
        },
        light: {
          // Fondos
          'bg-primary': '#FFFFFF',
          'bg-secondary': '#F7FAFC',
          'bg-elevated': '#EDF2F7',
          // Textos
          'text-primary': '#1A202C',
          'text-secondary': '#4A5568',
          'text-tertiary': '#718096',
          // Bordes
          'border-primary': '#E2E8F0',
          'border-secondary': '#EDF2F7'
        }
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '2rem',
      },
      fontSize: {
        'xxs': '0.625rem',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
        'soft': '0 2px 4px rgba(0,0,0,0.1)',
        'card': '0 2px 4px rgba(0,0,0,0.1), 0 8px 16px rgba(0,0,0,0.1)',
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'Noto Sans', 'sans-serif'],
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
      zIndex: {
        '-1': '-1',
        '60': '60',
        '70': '70',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
  variants: {
    extend: {
      backgroundColor: ['dark', 'dark-hover', 'dark-group-hover', 'dark-even', 'dark-odd'],
      borderColor: ['dark', 'dark-hover', 'dark-focus', 'dark-focus-within'],
      textColor: ['dark', 'dark-hover', 'dark-active'],
      opacity: ['dark'],
      ringColor: ['dark', 'dark-hover', 'dark-focus'],
      ringOffsetColor: ['dark'],
      ringOffsetWidth: ['dark'],
      ringOpacity: ['dark'],
      ringWidth: ['dark'],
      rotate: ['dark'],
      scale: ['dark']
    },
  }
};