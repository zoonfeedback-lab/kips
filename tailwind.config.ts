import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "kips-navy": {
          900: "#0855A4",
          800: "#06429e",
          700: "#0a69c8",
        },
        "kips-yellow": {
          500: "#FAB920",
          600: "#d99a10",
        },
        "kips-red": {
          600: "#CB1A2C",
          700: "#a81424",
        },
        "kips-light": {
          50: "#f7f8fc",
          100: "#eef0f8",
        },
        "kips-text": {
          900: "#1a2235",
          700: "#3b4a68",
          400: "#8a96b0",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        "xl-2": "1.25rem",
      },
      backgroundOpacity: {
        8: "0.08",
        12: "0.12",
      },
    },
  },
  plugins: [],
} satisfies Config;
