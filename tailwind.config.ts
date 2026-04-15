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
          900: "#050a19",
          800: "#0f1c3f",
          700: "#1a2e5d",
        },
        "kips-yellow": {
          500: "#fec601",
          600: "#ca8a04",
        },
        "kips-red": {
          600: "#d90429",
          700: "#b90322",
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
