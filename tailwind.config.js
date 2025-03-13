/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#353777",
          foreground: "#ffffff",
          50: "#eeeef7",
          100: "#d4d4eb",
          200: "#a9a9d7",
          300: "#7e7ec3",
          400: "#5353af",
          500: "#353777", // Main primary color
          600: "#2e2f65",
          700: "#272853",
          800: "#202241",
          900: "#191b30",
        },
        secondary: {
          DEFAULT: "#3b5998",
          foreground: "#ffffff",
          50: "#eef1f8",
          100: "#d4dbed",
          200: "#a9b7db",
          300: "#7e93c9",
          400: "#536fb7",
          500: "#3b5998", // Main secondary color
          600: "#324c82",
          700: "#2a3f6c",
          800: "#213256",
          900: "#192540",
        },
        accent: {
          DEFAULT: "#e9414d",
          foreground: "#ffffff",
          50: "#feecee",
          100: "#fcd0d3",
          200: "#f9a1a7",
          300: "#f5717b",
          400: "#f2424f",
          500: "#e9414d", // Main accent color
          600: "#c73742",
          700: "#a52e37",
          800: "#83242c",
          900: "#621b21",
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
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulse: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.5 },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        spin: {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        bounce: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 3s ease-in-out infinite",
        pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        shimmer: "shimmer 2s linear infinite",
        spin: "spin 10s linear infinite",
        bounce: "bounce 2s ease-in-out infinite",
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(to right, #353777 0%, #3b5998 50%, #353777 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}

