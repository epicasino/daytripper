/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    animation: {
      'spin-slow': 'spin 3s linear infinite',
    },

    fontFamily: {
      kawaii: ['Averia Serif Libre', 'serif'],
      basic: ['Roboto', 'sans-serif'],
    },

    fontSize: {
      sm: '0.8rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.563rem',
      '3xl': '1.953rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },    

    spacing: {
      '1': '8px',
      '2': '12px',
      '3': '16px',
      '4': '24px',
      '5': '32px',
      '6': '48px',
      sm: '8px',
      md: '12px',
      lg: '16px',
      xl: '24px',
    },

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': "#ffffff",
      'black': "#000000",
      'sand': "#E0B666",
      'dirt': "#9B7838",
      'coral': "#DA603E",
      'terracotta': "#B0442A",
      'green': "#2E4842",
      'sage': "#81A89B",
    }, 

    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },    
  },
  plugins: [],
}

