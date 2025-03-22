// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],
  ui: {
    colorMode: false,
  },

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },
  runtimeConfig: {
    private: {
      mongoUri: process.env.MONGO_URI,
    },
  },

  compatibilityDate: "2024-11-27",
});
