/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'dancing': ['Dancing Script', 'cursive'],
        'poppins': ['Poppins', 'sans-serif'],
      },
      colors: {
        'primary-pink': '#FFB6C1',
        'dark-pink': '#FF69B4',
        'light-pink': '#FFC0CB',
        'gold': '#FFD700',
        'black': '#2C2C2C',
        'white': '#FFFFFF',
      },
      boxShadow: {
        'soft': '0 4px 6px rgba(0, 0, 0, 0.1)',
        'medium': '0 8px 25px rgba(0, 0, 0, 0.15)',
        'strong': '0 15px 35px rgba(0, 0, 0, 0.2)',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s ease-out',
        'fadeInLeft': 'fadeInLeft 0.8s ease-out',
        'fadeInRight': 'fadeInRight 0.8s ease-out',
        'scaleIn': 'scaleIn 0.6s ease-out',
        'rotateIn': 'rotateIn 1s ease-out',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 2s infinite',
        'typewriter': 'typewriter 4s steps(40) 1s forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' }
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.8)' },
          '100%': { opacity: '1', transform: 'scale(1)' }
        },
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-180deg) scale(0.5)' },
          '100%': { opacity: '1', transform: 'rotate(0deg) scale(1)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        typewriter: {
          '0%': { width: '0' },
          '100%': { width: '100%' }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}