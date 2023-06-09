// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  css: ["~/assets/base.css"],

  googleFonts: {
    families: {
      "bruno-ace": true,
      sans : true,
    
    },
  },
});
