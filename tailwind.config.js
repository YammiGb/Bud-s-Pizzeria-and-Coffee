/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        buds: {
          red: '#DC2626', // Primary red for pizza theme
          redLight: '#EF4444', // Lighter red for accents
          redDark: '#B91C1C', // Darker red for text
          green: '#16A34A', // Primary green for herbs/vegetables
          greenLight: '#22C55E', // Lighter green for accents
          greenDark: '#15803D', // Darker green for text
          offWhite: '#FAFAF9', // Off-white background
          cream: '#F5F5F4', // Slightly darker cream
          beige: '#E7E5E4', // Light beige for cards
          gold: '#F59E0B', // Gold for highlights
          charcoal: '#1F2937', // Dark text
          gray: '#6B7280' // Medium gray for secondary text
        }
      },
      fontFamily: {
        'pretendard': ['Pretendard', 'system-ui', 'sans-serif'],
        'noto-kr': ['Noto Serif KR', 'serif'],
        'playfair': ['Playfair Display', 'serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif']
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.4s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
        'scale-in': 'scaleIn 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' }
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};