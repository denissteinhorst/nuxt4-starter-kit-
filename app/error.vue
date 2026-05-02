<script setup lang="ts">
// https://nuxt.com/docs/4.x/directory-structure/app/error
// https://nuxt.com/docs/getting-started/error-handling#rendering-an-error-page

import type { NuxtError } from '#app'

// Receives the full Nuxt error object from the framework when an unhandled error occurs
const props = defineProps<{
  error: NuxtError
}>()

// Clears the error state and redirects back to the index page
const handleError = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <article class="error-page" aria-labelledby="error-heading">
    <h1 id="error-heading">{{ error.status }} — {{ error.statusText }}</h1>

    <p>
      An unexpected error occurred. You can try clearing the error and returning
      to the homepage.
    </p>

    <!-- Full error detail for debugging — consider hiding in production -->
    <pre class="error-page__detail" aria-label="Error details">{{
      props.error
    }}</pre>

    <button type="button" @click="handleError">Clear error and go home</button>

    <footer class="error-page__footer">
      <NuxtLink
        to="https://nuxt.com/docs/getting-started/error-handling#rendering-an-error-page"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nuxt documentation for rendering an error page (opens in new tab)"
      >
        Nuxt Documentation — Error Handling
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </footer>
  </article>
</template>
