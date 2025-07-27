/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{tsx,css}'],
    theme: {
      fontFamily: {
        sans: ['Lato', 'Inter', 'sans-serif'],
        mono: [
          'Monaco',
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      container: {
        center: true,
        screens: {
          sm: '50rem'
        }
      },
      extend: {
        fontSize: {
          // Fluid responsive font sizes
          'fluid-xs': 'clamp(0.75rem, 0.7rem + 0.25vw, 0.875rem)',
          'fluid-sm': 'clamp(0.875rem, 0.8rem + 0.25vw, 1rem)',
          'fluid-base': 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
          'fluid-lg': 'clamp(1.125rem, 1rem + 0.5vw, 1.25rem)',
          'fluid-xl': 'clamp(1.25rem, 1.125rem + 0.75vw, 1.5rem)',
          'fluid-2xl': 'clamp(1.5rem, 1.25rem + 1vw, 2rem)',
          'fluid-3xl': 'clamp(1.875rem, 1.5rem + 1.5vw, 2.5rem)',
          'fluid-4xl': 'clamp(2.25rem, 1.75rem + 2vw, 3rem)',
          'fluid-5xl': 'clamp(3rem, 2.25rem + 3vw, 4rem)',
        },
        lineHeight: {
          'relaxed': '1.75',
          'loose': '2',
        },
        letterSpacing: {
          'wide': '0.025em',
          'wider': '0.05em',
        },
        colors: {
          primary: {
            DEFAULT: '#a8883a',
            light: '#c5a85e',
            dark: '#8b6f2e'
          },
          accent: {
            DEFAULT: '#2c2c2c',
            light: '#4a4a4a',
            dark: '#1a1a1a'
          },
          neutral: {
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917'
          }
        },
        backgroundImage: {
          'gradient-subtle': 'linear-gradient(135deg, #fafaf9 0%, #f5f5f4 100%)',
          'gradient-dark': 'linear-gradient(135deg, #2c2c2c 0%, #1a1a1a 100%)'
        }
      }
    },
    plugins: []
  };