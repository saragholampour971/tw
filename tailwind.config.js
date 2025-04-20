/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

module.exports = {
  content: ['./index.html', './public/index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      height: {
        navbarHeight: 'var(--navbar-height)',
      },
      spacing: {
        maxWidth: '1248px',
        navbarHeight: 'var(--navbar-height)',


      },
      fontSize: {
        h1: '2.25rem', // 36px
        h2: '1.875rem', // 30px
        h3: '1.5rem', // 24px
        h4: '1.25rem', // 20px
        h5: '1.125rem', // 18px
        h6: '1rem', // 16px
      },
      colors: {
        "gray-medium": '#CBD2D9',
        "gray-dark": '#7B8794',
        "red-primary": "#FD4141",
        "red-light": "#fd414133",
        "red-brand": "#CC0000"
      }
    },

  },
  plugins: [
    plugin(function ({addBase, theme}) {
      addBase({
        h1: {fontSize: theme('fontSize.h1')},
        h2: {fontSize: theme('fontSize.h2')},
        h3: {fontSize: theme('fontSize.h3')},
        h4: {fontSize: theme('fontSize.h4')},
        h5: {fontSize: theme('fontSize.h5')},
        h6: {fontSize: theme('fontSize.h6')},
        ".content-layout": {
          maxWidth: theme("spacing.maxWidth"),
          padding: '0 40px',
          margin: '0 auto'
        },
        ".mobile-content-layout": {
          padding: '0 16px',
          margin: '0 auto'
        },
        '.line-after': {
          '&::after': {
            content: '""',
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: '#10151A',
          },
        },
        '.active-tab-line': {
          '&::after': {
            content: '""',
            display: 'block',
            width: '100%',
            height: '2px',
            backgroundColor: '#EF4444',
            position: 'absolute',
            bottom: '0',
            left: '0',
          }
        }
      });
    }),
  ],
}

