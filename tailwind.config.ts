import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
    "./sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-serif)"],
        sans: ["var(--font-sans)"],
      },
      colors: {
        sand: "#f7f9f3",
        stone: "#2f3a31",
        linen: "#fffef8",
        gold: "#b85b6a",
        champagne: "#dfe8d6",
      },
      boxShadow: {
        soft: "0 18px 52px rgba(47, 58, 49, 0.10)",
      },
      backgroundImage: {
        "paper-glow":
          "linear-gradient(135deg, rgba(255, 254, 248, 0.96), rgba(239, 246, 232, 0.86))",
      },
    },
  },
  plugins: [],
};

export default config;
