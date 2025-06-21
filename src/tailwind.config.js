/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{tsx,css}'],
    theme: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
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
          slate: {
            850: 'hsl(222deg 47% 16%)'
          },
          primary: '#5fc3e7',
          // Thai-inspired color palette
          thai: {
            gold: '#D4AF37',
            'gold-light': '#E6C555',
            'gold-dark': '#B8941F',
            teal: '#2E8B8B',
            'teal-light': '#4AA0A0',
            'teal-dark': '#1F6B6B',
            cream: '#FFF8DC',
            'cream-dark': '#F5F0C8',
            burgundy: '#8B1538',
            'burgundy-light': '#A03450',
            coral: '#FF7F7F',
            'coral-light': '#FF9999'
          }
        },
        backgroundImage: {
          'thai-gradient': 'linear-gradient(135deg, #D4AF37 0%, #2E8B8B 100%)',
          'thai-hero': 'linear-gradient(135deg, rgba(212, 175, 55, 0.8) 0%, rgba(46, 139, 139, 0.6) 100%)',
          'thai-subtle': 'linear-gradient(180deg, #FFF8DC 0%, #F5F0C8 100%)'
        }
      }
    },
    plugins: []
  };