import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-oswald)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        logo: ["var(--font-logo-metal)", "var(--font-oswald)", "system-ui", "sans-serif"],
        darkfont: ["var(--font-darkfont)", "var(--font-logo-metal)", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        ring: "hsl(var(--ring))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        page: {
          DEFAULT: "hsl(var(--page-bg))",
          dark: "hsl(var(--section-dark))",
          mid: "hsl(var(--section-mid))",
          surface: "hsl(var(--surface))",
          border: "hsl(var(--border-warm))",
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
