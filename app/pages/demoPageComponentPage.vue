<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/pages
// https://nuxt.com/docs/guide/directory-structure/components
// DemoComponent is auto-imported by Nuxt from ~/components — no explicit import needed
</script>

<template>
  <article class="demo-component-page" aria-labelledby="component-page-heading">
    <h1 id="component-page-heading">
      Demo Page utilizing a component from <code>~/components/</code>
    </h1>

    <DemoComponent
      text="Hello from: '~/pages/DemoPageComponent.vue'. I'm a passed property!"
    />

    <footer class="demo-component-page__footer">
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
