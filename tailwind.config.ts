import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DDAAA5",
          50: "#fdf6f5",
          100: "#faecea",
          200: "#f4d9d6",
          300: "#ebb8b3",
          400: "#DDAAA5",
          500: "#cc8880",
          600: "#b56860",
          700: "#965148",
          800: "#7c433d",
          900: "#693b36",
        },
        secondary: {
          DEFAULT: "#F4ECE7",
          50: "#fdfaf8",
          100: "#F4ECE7",
          200: "#e8d8cf",
          300: "#d8c0b4",
          400: "#c4a090",
          500: "#b08070",
        },
        accent: {
          DEFAULT: "#8C6E63",
          50: "#f5f0ee",
          100: "#e8ddd9",
          200: "#d1bbb5",
          300: "#b89288",
          400: "#9d7267",
          500: "#8C6E63",
          600: "#75574d",
          700: "#604641",
          800: "#513b37",
          900: "#463330",
        },
        background: {
          DEFAULT: "#FAF7F5",
          dark: "#1a1614",
        },
        text: {
          DEFAULT: "#1E293B",
          muted: "#64748b",
          dark: "#f8fafc",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-nunito)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      animation: {
        "float-slow": "float 6s ease-in-out infinite",
        "float-medium": "float 4s ease-in-out infinite",
        "pulse-soft": "pulse-soft 3s ease-in-out infinite",
        "gradient-shift": "gradient-shift 8s ease infinite",
        "spin-slow": "spin 20s linear infinite",
        "fade-up": "fade-up 0.6s ease-out forwards",
        "slide-in": "slide-in 0.5s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      backdropBlur: {
        xs: "2px",
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.07)",
        "glass-sm": "0 4px 16px 0 rgba(31, 38, 135, 0.05)",
        soft: "0 4px 24px rgba(140, 110, 99, 0.12)",
        "soft-lg": "0 12px 48px rgba(140, 110, 99, 0.18)",
        premium: "0 20px 60px rgba(140, 110, 99, 0.15), 0 4px 16px rgba(140, 110, 99, 0.1)",
      },
    },
  },
  plugins: [],
};

export default config;
