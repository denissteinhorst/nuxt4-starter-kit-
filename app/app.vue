<!-- https://nuxt.com/docs/guide/directory-structure/app -->

<!--
  App root — wraps every page in the app.
  NuxtRouteAnnouncer: announces route changes to screen readers (a11y).
  NuxtLayout:         injects the active layout (default or per-page override).
  NuxtPage:           renders the matched page component into the layout's <slot />.
-->
<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
/**
 * Global styles — applied to every page across the entire app.
 * In a real-world project, move these into ~/assets/scss/ and
 * import them via the css[] array in nuxt.config.ts instead.
 */
html {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  line-height: 1.47059;
  letter-spacing: -0.022em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
