<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/pages
// Explicit import required here since the component lives in a named subdirectory
import DemoVueuseComponent from '~/components/demo-vueuse-component/demo-vueuse-component.vue'
</script>

<template>
  <article class="demo-vueuse-page" aria-labelledby="vueuse-heading">
    <h1 id="vueuse-heading">Showcase: VueUse</h1>
    <p>
      This page showcases the use of VueUse, a collection of essential Vue
      Composition API utilities — featuring 4 random examples from the library.
    </p>

    <DemoVueuseComponent />

    <footer class="demo-vueuse-page__footer">
      <NuxtLink
        to="https://nuxt.com/docs/guide/directory-structure/pages"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nuxt documentation for Pages (opens in new tab)"
      >
        Nuxt Documentation — Pages
        <span aria-hidden="true">↗</span>
      </NuxtLink>
      <br />
      <NuxtLink to="/">Back to Index</NuxtLink>
    </footer>
  </article>
</template>

<style scoped lang="scss"></style>
