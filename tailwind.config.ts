import type { Config } from 'tailwindcss'
import { indigo } from 'tailwindcss/colors'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}'
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1240px'
      }
    },
    extend: {
      colors: {
        primary: { ...indigo, DEFAULT: indigo[600] },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
          'foreground-2': 'hsl(var(--muted-foreground-2))'
        }
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        spaceGrotesk: ['Space Grotesk', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif']
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' }
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    ({ addUtilities }) => {
      addUtilities({
        '.flex-center': { '@apply flex items-center justify-center': {} },

        /* PAGE SPACE */
        '.content-space': { '@apply mt-[2rem] lg:mt-[3.75rem]': {} },
        '.content-space-lg': { '@apply mt-[4rem] lg:mt-[7rem]': {} }
      })
    }
  ]
} satisfies Config

export default config
