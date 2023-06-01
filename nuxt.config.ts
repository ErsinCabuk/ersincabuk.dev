// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    layoutTransition: { name: 'layout', mode: 'out-in' },
    head: {
      charset: 'utf-8',
      title: "Ersin Çabuk",
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" }
      ]
    }
  },
  modules: ['@nuxtjs/tailwindcss']
})