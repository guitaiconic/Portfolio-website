/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "white", // White background
        accent: {
          light: "#f472b6", // Soft pink
          DEFAULT: "#db2777", // Hot pink (buttons etc.)
          dark: "#9d174d",
        },
        primary: {
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9", // Electric blue highlight
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        purple: {
          500: "#a855f7", // Spotlight purple
        },
        grayish: "#9ca3af",
        dark: "#1f2937",
        light: "#f3f4f6",
      },
      fontFamily: {
        primary: ["Playfair Display", "serif"],
        secondary: ["Mulish", "sans-serif"],
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1192px",
      },
    },
  },
  plugins: [],
};
