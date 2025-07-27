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