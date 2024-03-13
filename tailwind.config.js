/* global module */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('./assets/site-bg.jpg')",
        about: "url('./assets/about.png')",
        services: "url('./assets/services.png')",
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(120px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInDown: {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInRight: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(100px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)' 
          },
        },
        fadeInLeft: {
          '0%': { 
            opacity: '0',
            transform: 'translateX(-100px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0)'
          },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1s ease-out forwards',
        'fade-in-down': 'fadeInDown 0.5s ease-out forwards',
        'fade-in-right': 'fadeInRight 1.5s ease-out forwards',
        'fade-in-left': 'fadeInLeft 1.5s ease-out forwards',
      },
    },
  },
  plugins: [],
}
