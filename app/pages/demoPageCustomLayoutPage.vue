<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/pages
// https://nuxt.com/docs/guide/directory-structure/layouts
// Overrides the default layout for this page only
definePageMeta({
  layout: 'demo-layout',
})
</script>

<template>
  <article
    class="demo-custom-layout-page"
    aria-labelledby="custom-layout-heading"
  >
    <h1 id="custom-layout-heading">
      Demo Page utilizing a custom layout:
      <code>~/layouts/demo-layout.vue</code>
    </h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde
      mollitia reprehenderit id sed ea, iure necessitatibus amet adipisci.
      Suscipit in eveniet rem, blanditiis modi rerum atque neque explicabo
      quibusdam?
    </p>

    <footer class="demo-custom-layout-page__footer">
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
