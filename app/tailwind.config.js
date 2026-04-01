/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Nieuw rustig, vrouwelijk palet
        ivory: {
          DEFAULT: '#FAF8F5',
          dark: '#F5F2ED',
        },
        beige: {
          DEFAULT: '#F5F0E8',
          light: '#FAF7F2',
          dark: '#EBE5DB',
          deeper: '#E5DED1',
        },
        cream: {
          DEFAULT: '#F0EBE3',
          light: '#F7F4EE',
          dark: '#E8E2D8',
        },
        taupe: {
          DEFAULT: '#D4C8B8',
          light: '#E0D6C8',
          dark: '#C4B8A8',
        },
        sand: {
          DEFAULT: '#C9B8A0',
          light: '#D9CBB8',
          dark: '#B9A890',
        },
        brown: {
          DEFAULT: '#7D7166',
          light: '#9A8E82',
          lighter: '#B5AA9F',
          dark: '#5C5249',
          deep: '#4A4239',
        },
        gold: {
          DEFAULT: '#C9A574',
          light: '#D9BC94',
          dark: '#B89260',
          soft: '#DBC4A4',
        },
        // Legacy colors voor backward compatibility
        'legacy-brown': '#3D3229',
        'legacy-gold': '#C9A962',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
