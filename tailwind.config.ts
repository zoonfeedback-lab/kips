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
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      borderRadius: {
        'xl-2': '1.25rem',
      }
    },
  },
  plugins: [],
} satisfies Config;
