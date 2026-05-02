<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/pages
// Explicit import required here since the component lives in a named subdirectory
import DemoPublicApiComponent from '~/components/demo-public-api-component/demo-public-api-component.vue'
</script>

<template>
  <article class="demo-public-api-page" aria-labelledby="public-api-heading">
    <h1 id="public-api-heading">Showcase: Public API</h1>

    <p>
      This demo showcases how you could use a
      <code>&lt;DemoPublicApiComponent /&gt;</code>
      to display contents fetched from a public API's JSON data.
    </p>

    <section aria-labelledby="public-api-how-heading">
      <h2 id="public-api-how-heading">How it works</h2>
      <p>
        The component
        <code>~/components/demo-public-api-component.vue</code> provides the UI
        to display data. It uses the composable
        <code>~/composables/useDemoPublicApiComposable.ts</code> to request data
        from a local REST API endpoint at
        <code>~/server/api/demoPublicApiEndpoint/*</code>, which itself proxies
        data from the public API at
        <a
          href="https://randomuser.me"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="randomuser.me public API (opens in new tab)"
          >randomuser.me</a
        >.
      </p>
    </section>

    <DemoPublicApiComponent />

    <footer class="demo-public-api-page__footer">
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
