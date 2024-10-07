// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  ssr: true,

  css: ["~/assets/css/main.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ["@nuxtjs/color-mode", "@nuxtjs/tailwindcss", "@nuxt/icon"],
  colorMode: {
    preference: "system", // Default to system, but users can change it
    fallback: "light", // Fallback if no preference found
    storageKey: "nuxt-color-mode", // Store user preference in localStorage
    storage: "localStorage", // Persist across page reloads
    classSuffix: "", // Adds `-mode` suffix to `dark` or `light` classes
  },
});
