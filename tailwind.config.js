/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f7ff',
          100: '#e6eeff',
          200: '#cfe0ff',
          300: '#99c2ff',
          400: '#66a3ff',
          500: '#3b82f6', // primary-500
          600: '#2563eb',
          700: '#1846b3',
        },
        secondary: {
          50: '#fff5f9',
          100: '#ffeef3',
          200: '#ffd2e6',
          300: '#ffa6cc',
          400: '#ff77b0',
          500: '#ec4899', // secondary-500
        }
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(16,24,40,0.05)',
        'lg': '0 10px 25px rgba(2,6,23,0.08)'
      }
    },
  },
  plugins: [],
}
