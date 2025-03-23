import mongodb from "./server/plugins/mongodb";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@nuxt/eslint", "@nuxt/image"],
  ui: {
    colorMode: false,
  },

  css: ["~/assets/css/main.css"],

  future: {
    compatibilityVersion: 4,
  },
  runtimeConfig: {
    mongoUri: process.env.MONGO_URI,
  },
  devtools: { enabled: true },
  compatibilityDate: "2024-11-27",
});
