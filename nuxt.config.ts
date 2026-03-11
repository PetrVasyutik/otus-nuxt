// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: ['vuetify-nuxt-module'],

  app: {
    head: {
      style: [
        {
          // фикс порядка CSS-слоёв Vuetify
          textContent:
            '@layer vuetify-core, vuetify-components, vuetify-overrides, vuetify-utilities, vuetify-final;',
        },
      ],
    },
  },
});
