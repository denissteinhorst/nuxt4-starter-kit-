<script setup lang="ts">
// https://nuxt.com/docs/guide/directory-structure/pages
</script>

<template>
  <article class="demo-page" aria-labelledby="demo-page-heading">
    <h1 id="demo-page-heading">This is your ordinary Demo Page</h1>

    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam unde
      mollitia reprehenderit id sed ea, iure necessitatibus amet adipisci.
      Suscipit in eveniet rem, blanditiis modi rerum atque neque explicabo
      quibusdam?
    </p>

    <footer class="demo-page__footer">
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
