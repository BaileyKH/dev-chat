/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fira: ['"Fira Code"', 'monospace'],
      },
      colors: {
        primLight: "#f8f8f8",
        primDark: "#0a0a0a",
        primAccent: "#7e00ff",
        secAccent: "#ae60ff"
      },
    },
  },
  plugins: [],
  darkMode: "class",
}


