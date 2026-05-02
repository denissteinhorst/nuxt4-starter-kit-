<script setup lang="ts">
// Fetches random user data from a public API via a composable
const { demoPublicData, refresh } = await useDemoPublicApiComposable()

// Prevents rapid re-fetching by disabling the button for 3 seconds after each request
const buttonCooldown = ref(false)
const requestNewRandomUser = async () => {
  buttonCooldown.value = true
  await refresh()
  setTimeout(() => {
    buttonCooldown.value = false
  }, 3000)
}
</script>

<template>
  <NuxtErrorBoundary>
    <section class="demo-component" aria-labelledby="public-api-heading">
      <div class="demo-component__wrapper">
        <h2 id="public-api-heading" class="demo-component__title">
          Random User
        </h2>

        <button
          type="button"
          :disabled="buttonCooldown"
          :aria-disabled="buttonCooldown"
          :aria-label="
            buttonCooldown
              ? 'Cooldown active, please wait 3 seconds'
              : 'Fetch new random user'
          "
          @click="requestNewRandomUser"
        >
          Fetch new random user
          <span aria-hidden="true">(3s cooldown)</span>
        </button>

        <pre aria-live="polite" aria-label="Fetched user data">{{
          demoPublicData
        }}</pre>
      </div>

      <footer class="demo-component__footer">
        <NuxtLink
          to="https://nuxt.com/docs/guide/directory-structure/components"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Nuxt documentation for Components (opens in new tab)"
          class="demo-component__link"
        >
          Nuxt Documentation — Components
          <span aria-hidden="true">↗</span>
        </NuxtLink>
      </footer>
    </section>

    <!-- https://nuxt.com/docs/getting-started/error-handling#rendering-errors-within-your-app -->
    <template #error="{ error }">
      <p role="alert">An error occurred: {{ error }}</p>
    </template>
  </NuxtErrorBoundary>
</template>

<style scoped lang="scss">
$block: 'demo-component';

.#{$block} {
  &__wrapper {
    font-size: 12px;
  }

  button {
    padding: 10px;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
}
</style>
