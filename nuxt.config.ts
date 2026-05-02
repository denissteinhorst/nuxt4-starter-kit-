// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      include: ['@vue/devtools-core', '@vue/devtools-kit'],
    },
    css: {
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          silenceDeprecations: ['import'],
          additionalData: '@import "@/assets/scss/app.scss";',
        },
      },
    },
  },
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en-US.json' },
      { code: 'fr', name: 'Français', file: 'fr-FR.json' },
      { code: 'de', name: 'Deutsch', file: 'de-DE.json' },
    ],
    defaultLocale: 'en',
  },
  pinia: {
    storesDirs: ['./stores/**'],
  },
  modules: [
    '@nuxtjs/i18n',
    '@pinia/nuxt',
    'pinia-plugin-unstorage/nuxt',
    '@vueuse/nuxt',
    '@nuxt/eslint',
    '@nuxt/test-utils/module',
  ],
})
