/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        // Paleta de marca LimaLab — morado (LIMA) + teal (LAB).
        // Se conservan las claves "green"/"blue" del diseño original para no
        // tocar cada componente: "green" = morado, "blue" = teal.
        brand: {
          green: '#8E6BA8',
          'green-dark': '#6F4F8A',
          'green-light': '#A98AC0',
          blue: '#3E9B9B',
          'blue-dark': '#2E7C7C',
          'blue-light': '#5FB8B8',
          // Alias semánticos por si se quieren usar directamente
          purple: '#8E6BA8',
          'purple-dark': '#6F4F8A',
          teal: '#3E9B9B',
          'teal-dark': '#2E7C7C',
        },
        ink: '#2E2E66',
        mist: '#F6F4FA',
      },
      height: {
        18: '4.5rem',
      },
      fontFamily: {
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Poppins', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 10px 40px -12px rgba(46, 46, 102, 0.18)',
        glow: '0 0 0 1px rgba(142,107,168,0.12), 0 18px 50px -15px rgba(62,155,155,0.40)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(120deg, #8E6BA8 0%, #3E9B9B 100%)',
        'brand-gradient-soft': 'linear-gradient(135deg, rgba(142,107,168,0.10) 0%, rgba(62,155,155,0.12) 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'bubble-up': {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0.7' },
          '100%': { transform: 'translateY(-120px) scale(0.3)', opacity: '0' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
