/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    screens: {
      sm: { min: "640px" }, // => @media (min-width: 640px) { ... }

      md: { min: "768px" },
      // => @media (min-width: 768px) { ... }

      lg: { min: "1024px" },
      // => @media (min-width: 1024px) { ... }

      xl: { min: "1280px" }, // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
};
