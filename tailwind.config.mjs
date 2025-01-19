/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        pilowlava: ["pilowlava", "sans-serif"],
        patriot: ["patriot", "sans-serif"],
        typefesse: ["typefesse", "sans-serif"],
        outward: ["outward", "sans-serif"],
        budge: ["budge", "sans-serif"],
        humane: ["humane", "sans-serif"],
      },
    },
  },
  plugins: [],
};

