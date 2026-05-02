<script setup lang="ts">
// Access current locale and full list of available locales from vue-i18n
const { locale, locales } = useI18n()

// Returns a function that generates a path for a given locale code
const switchLocalePath = useSwitchLocalePath()

// Filter out the current locale so only switchable alternatives are shown
const availableLocales = computed(() => {
  return locales.value.filter((i) => i.code !== locale.value)
})
</script>

<template>
  <article class="demo-i18n-component" aria-labelledby="i18n-headline">
    <section class="demo-i18n-component__blogentry">
      <h2 id="i18n-headline" class="demo-i18n-component__blogentry--title">
        {{ $t('headline') }}
      </h2>
      <p class="demo-i18n-component__blogentry--content">
        {{ $t('content') }}
      </p>
    </section>

    <nav
      class="demo-i18n-component__lang-nav"
      aria-label="$t('nuxtLinkHeadline')"
    >
      <strong>{{ $t('nuxtLinkHeadline') }}:</strong>
      <ul role="list">
        <li v-for="eachLocale in availableLocales" :key="eachLocale.code">
          <NuxtLink :to="switchLocalePath(eachLocale.code)">
            {{ eachLocale.name }}
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <p>{{ $t('nuxtLinkOutro') }}</p>

    <DemoI18nLangSwitcher />

    <footer class="demo-i18n-component__footer">
      <NuxtLink
        to="https://nuxt.com/docs/guide/directory-structure/components"
        target="_blank"
        rel="noopener noreferrer"
        class="demo-i18n-component__link"
        aria-label="Nuxt documentation for Components (opens in new tab)"
      >
        Nuxt Documentation — Components
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </footer>
  </article>
</template>

<style scoped lang="scss"></style>
