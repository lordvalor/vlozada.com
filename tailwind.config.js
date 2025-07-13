/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,njk,md}" // ajusta según tu estructura
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1E2A38', // Azul profundo
        secondary: '#4BA3C7', // Azul claro
        background: '#F5F7FA', // Gris claro
        muted: '#7A8A99', // Gris medio
        white: '#FFFFFF',
        success: '#A7E6BE' // Verde lima suave (opcional)
      },
      fontFamily: {
        sans: [
          'Inter', 'sans-serif'
        ]
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/images/home-hero-background.jpg')",
      },
    },
  },
  plugins: {"@tailwindcss/postcss": {}},
};
