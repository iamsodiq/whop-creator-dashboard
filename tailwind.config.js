/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefaff',
          100: '#d9f2ff',
          200: '#b3e5ff',
          300: '#85d4ff',
          400: '#4fbaff',
          500: '#1f9cff',
          600: '#0b7fe6',
          700: '#0763b4',
          800: '#084f8d',
          900: '#0a446f',
        },
        primary: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
      },
    },
  },
  plugins: [],
}










