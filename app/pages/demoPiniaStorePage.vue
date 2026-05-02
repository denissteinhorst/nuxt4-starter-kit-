<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/pages
// Explicit import required here since the component lives in a named subdirectory
import DemoPiniaStoreComponent from '~/components/demo-pinia-store-component/demo-pinia-store-component.vue'

// SSR disabled — Pinia store relies on client-side state that cannot be hydrated server-side
definePageMeta({ ssr: false })
</script>

<template>
  <article class="demo-pinia-store-page" aria-labelledby="pinia-store-heading">
    <h1 id="pinia-store-heading">Showcase: Pinia Store</h1>

    <p>
      This page showcases a non-persistent Pinia store — state is lost on page
      reload.
    </p>

    <DemoPiniaStoreComponent />

    <footer class="demo-pinia-store-page__footer">
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
