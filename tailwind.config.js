/** @type {import('tailwindcss').Config} */
    module.exports = {
      content: [
        "./src/**/*.{js,jsx,ts,tsx}",
      ],
      theme: {
        extend: {
          colors: {
            brand: {
              dark: '#0f172a',
              primary: '#3b82f6',
              accent: '#8b5cf6',
              success: '#10b981',
            }
          },
          fontFamily: {
            sans: ['Inter', 'system-ui', 'sans-serif'],
          }
        },
      },
      plugins: [],
    }
