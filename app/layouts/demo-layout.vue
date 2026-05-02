<!-- https://nuxt.com/docs/guide/directory-structure/layouts -->
<!-- https://nuxt.com/docs/guide/features/layouts -->

<!--
  Default layout — automatically wraps every page unless overridden via definePageMeta({ layout: '...' }).
  <slot /> is the injection point where the matched page's content renders.
-->
<template>
  <div id="custom-app-layout">
    <header class="custom-app-layout__header" role="banner">
      <h1>Custom App Layout Header</h1>
    </header>

    <!--
      id and tabindex="-1" allow a "skip to main content" anchor to programmatically
      focus this element — important for keyboard and screen reader navigation.
    -->
    <main id="main-content" class="custom-app-layout__content" tabindex="-1">
      <slot />
    </main>

    <footer class="custom-app-layout__footer" role="contentinfo">
      <!-- <small> is for fine print/legal text — use <p> for general footer content -->
      <p>Custom App Layout Footer</p>
    </footer>

    <!--
      The NuxtLink below is layout-level UI — consider moving it into a dedicated
      <nav> inside the header or footer rather than floating outside semantic regions.
      <hr> removed — use CSS border/spacing instead.
    -->
    <nav class="custom-app-layout__meta-nav" aria-label="Documentation links">
      <NuxtLink
        to="https://nuxt.com/docs/guide/directory-structure/layouts"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nuxt documentation for Layouts (opens in new tab)"
      >
        Nuxt Documentation — Layouts
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </nav>
  </div>
</template>

<style scoped lang="scss">
$block: 'custom-app-layout';

.#{$block} {
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  &__header {
    flex: 0 0 auto;
    padding: pxToRem(20);
    background-color: #f8f8f8;
  }

  &__content {
    flex: 1 0 auto;
    padding: pxToRem(20);
  }

  &__footer {
    flex: 0 0 auto;
    padding: pxToRem(20);
    background-color: #f8f8f8;
  }

  &__meta-nav {
    padding: pxToRem(10) pxToRem(20);
  }
}
</style>
