/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#E2F5FB',
        "custom-text-color":"#003569",
        "custom-text-color2":"#17414F",
        "custom-text-color3":"#215D72",
        "medition-backcolor":"#FFE9B5",
      },
    },
  },
  plugins: [],
}

