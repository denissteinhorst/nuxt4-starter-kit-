<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/pages
// DemoJsonStoreComponent is auto-imported by Nuxt from ~/components — no explicit import needed
</script>

<template>
  <article class="demo-json-store-page" aria-labelledby="json-store-heading">
    <h1 id="json-store-heading">Showcase: CRUD-Operations</h1>

    <p>
      This demo showcases how you could use a
      <code>&lt;DemoJsonStoreComponent /&gt;</code>
      to perform CRUD operations on local JSON data.
    </p>

    <section aria-labelledby="json-store-how-heading">
      <h2 id="json-store-how-heading">How it works</h2>
      <p>
        The component
        <code>~/components/demo-json-store-component.vue</code> provides a
        simple UI to display data and trigger CRUD operations. Data is stored in
        <code>~/data/demoJsonStoreData.json</code> and accessed via the
        composable <code>~/composables/demoJsonStoreComponent.ts</code>, which
        calls the local REST API at
        <code>~/server/api/demoJsonStoreEndpoint/*</code>.
      </p>
    </section>

    <section aria-labelledby="json-store-warning-heading">
      <h2 id="json-store-warning-heading">Warning</h2>
      <p>
        This is a demo only and far from production-ready. No authentication,
        authorization, sanitization, or validation is included — do not use this
        pattern as-is in a real application.
      </p>
    </section>

    <DemoJsonStoreComponent />

    <footer class="demo-json-store-page__footer">
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
