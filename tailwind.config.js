/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ THÊM DÒNG NÀY để sử dụng dark mode theo class
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
