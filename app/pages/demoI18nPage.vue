<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/pages
// DemoI18nComponent is auto-imported by Nuxt from ~/components — no explicit import needed
</script>

<template>
  <article class="demo-i18n-page" aria-labelledby="i18n-page-heading">
    <h1 id="i18n-page-heading">Showcase: i18n</h1>

    <DemoI18nComponent />

    <footer class="demo-i18n-page__footer">
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
