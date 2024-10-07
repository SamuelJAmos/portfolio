/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  darkMode: "selector",
  theme: {
    screens: {
      sm: "640px", // Small devices (mobile)
      md: "768px", // Medium devices (tablets)
      lg: "1024px", // Large devices (desktops)
      xl: "1280px", // Extra large devices
      "2xl": "1536px", // Extra extra large devices
    },
    colors: {
      // primary: "#FF5722", // For main headings, CTAs, hover states
      // secondary: "#0A2342", // For secondary headings, body text, backgrounds
      // accent: "#00B4D8", // For buttons, icons, highlights, links
      // light: "#F5F5F5", // For light mode backgrounds, dark text
      // dark: "#2F4550", // For dark mode backgrounds, contrast elements
      light: {
        primary: "#FF5722", 
        secondary: "#0A2342",
        accent: "#00B4D8",
        background: "#F5F5F5",
        text: "#2F4550",
      },
      dark: {
        primary: "#FF5722",
        secondary: "00B4D8",
        accent: "FFAB40",
        background: "#2F4550",
        text: "#F5F5F5",
      },
    },
    fontFamily: {
      heading: ["Montserrat", "sans-serif"],
      body: ["Open Sans", "serif"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
