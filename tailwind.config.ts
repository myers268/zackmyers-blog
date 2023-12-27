import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

const fromVar = (value: string) => `hsl(from var(${value}) h s l / <alpha-value>)`;

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: fromVar("--background"),
        foreground: fromVar("--foreground"),
        primary: {
          DEFAULT: fromVar("--primary"),
          foreground: fromVar("--primary-foreground"),
        },
        disabled: {
          DEFAULT: fromVar("--disabled"),
          foreground: fromVar("--disabled-foreground"),
        },
        border: fromVar("--border"),
        focus: fromVar("--focus"),
        accent: fromVar("--accent"),
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;
