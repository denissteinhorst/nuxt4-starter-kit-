<!-- https://nuxt.com/docs/guide/directory-structure/layouts -->
<!-- https://nuxt.com/docs/guide/features/layouts -->

<!--
  Default layout — wraps every page in the app unless a different layout is specified.
  <NuxtLayout> in app.vue activates this automatically.
  <slot /> is where the current page's content gets injected.
-->

<template>
  <div id="app-layout">
    <main>
      <slot />
    </main>
  </div>
</template>
