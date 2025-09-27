import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          secondary: "hsl(var(--background-secondary))",
          tertiary: "hsl(var(--background-tertiary))",
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          muted: "hsl(var(--foreground-muted))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          dark: "hsl(var(--primary-dark))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        electric: {
          blue: "hsl(var(--electric-blue))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        glass: {
          bg: "hsla(var(--glass-bg))",
          border: "hsla(var(--glass-border))",
          shadow: "hsla(var(--glass-shadow))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      backgroundImage: {
        'gradient-primary': 'var(--gradient-primary)',
        'gradient-secondary': 'var(--gradient-secondary)',
        'gradient-hero': 'var(--gradient-hero)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        'glass': 'var(--shadow-glass)',
        'elevated': 'var(--shadow-elevated)',
        'glow': 'var(--shadow-glow)',
        'glow-primary': 'var(--glow-primary)',
        'glow-secondary': 'var(--glow-secondary)',
        'glow-accent': 'var(--glow-accent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite alternate',
        'slide-up': 'slide-up 0.5s ease-out',
        'fade-in': 'fade-in 0.6s ease-out',
        'scale-in': 'scale-in 0.3s ease-out',
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(180deg)" },
        },
        "pulse-glow": {
          "0%": { boxShadow: "0 0 20px hsl(var(--primary) / 0.5)" },
          "100%": { boxShadow: "0 0 40px hsl(var(--primary) / 0.8)" },
        },
        "slide-up": {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      transitionTimingFunction: {
        'spring': 'var(--ease-spring)',
        'smooth': 'var(--ease-smooth)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
