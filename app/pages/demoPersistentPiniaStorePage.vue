<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/pages
// Explicit import required here since the component lives in a named subdirectory
import DemoPersistedPiniaStoreComponent from '~/components/demo-persisted-pinia-store-component/demo-persisted-pinia-store-component.vue'
</script>

<template>
  <article
    class="demo-persistent-pinia-page"
    aria-labelledby="persistent-pinia-heading"
  >
    <h1 id="persistent-pinia-heading">Showcase: Persistent Pinia Store</h1>

    <p>
      This page showcases a persistent Pinia store — state is retained across
      page reloads via <code>pinia-plugin-unstorage/nuxt</code> and the
      <code>unstorage</code> option in the store definition.
    </p>

    <!--
      <ClientOnly> prevents SSR for this component since the persisted store
      reads from a cookie that is only available on the client side.
      `placeholder` renders in its place during server render.
    -->
    <ClientOnly placeholder="Loading...">
      <DemoPersistedPiniaStoreComponent />
    </ClientOnly>

    <footer class="demo-persistent-pinia-page__footer">
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
