/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "indie-cyan": "#00D9FF",
        "indie-orange": "#FF6B35",
        "indie-cream": "#FFF8F0",
        "indie-ink": "#1A1A2E",
      },
      fontFamily: {
        display: ["Bebas Neue", "cursive"],
        mono: ["Space Mono", "monospace"],
        sans: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};
