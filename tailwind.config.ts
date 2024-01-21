import type { Config } from "tailwindcss";
import animatePlugin from "tailwindcss-animate";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontSize: {
      xs: "var(--step--2)",
      sm: "var(--step--1)",
      base: "var(--step-0)",
      md: "var(--step-1)",
      lg: "var(--step-2)",
      xl: "var(--step-3)",
      "2xl": "var(--step-4)",
      "3xl": "var(--step-5)",
    },
    spacing: {
      "3xs": "var(--space-3xs)",
      "2xs": "var(--space-2xs)",
      xs: "var(--space-xs)",
      sm: "var(--space-s)",
      md: "var(--space-m)",
      lg: "var(--space-l)",
      xl: "var(--space-xl)",
      "2xl": "var(--space-2xl)",
      "3xl": "var(--space-3xl)",
    },
    extend: {
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        subtle: {
          DEFAULT: "oklch(var(--subtle) / <alpha-value>)",
          foreground: "oklch(var(--subtle-foreground) / <alpha-value>)",
        },
        disabled: {
          DEFAULT: "oklch(var(--disabled) / <alpha-value>)",
          foreground: "oklch(var(--disabled-foreground) / <alpha-value>)",
        },
        border: "oklch(var(--border) / <alpha-value>)",
        focus: "oklch(var(--focus) / <alpha-value>)",
        accent: "oklch(var(--accent) / <alpha-value>)",
      },
    },
  },
  plugins: [animatePlugin],
} satisfies Config;
