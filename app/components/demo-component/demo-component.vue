<script setup lang="ts">
import type { IDemoComponent } from './demo-component.model'

const props = withDefaults(defineProps<IDemoComponent>(), {
  text: "This is Demo Component's default text for text prop",
  text2:
    "This is Demo Component's default text since text2 prop was not passed from parent component",
})

const items: string[] = [
  'a Blog Post',
  'a Product Card',
  'a Promo Slider',
  'a List or just an Item of it',
  '... ¯\\_(ツ)_/¯',
]
</script>

<template>
  <section class="demo-component" aria-labelledby="demo-component-heading">
    <h2 id="demo-component-heading" class="demo-component__title">
      Hello from: '~/components/demo-component.vue'
    </h2>

    <p class="demo-component__text">{{ props.text }}</p>
    <p class="demo-component__subtext">{{ props.text2 }}</p>

    <p>This component could be anything&hellip;</p>

    <ul class="demo-component__list" role="list">
      <li v-for="item in items" :key="item">{{ item }}</li>
    </ul>

    <footer class="demo-component__footer">
      <NuxtLink
        to="https://nuxt.com/docs/guide/directory-structure/components"
        target="_blank"
        rel="noopener noreferrer"
        class="demo-component__link"
        aria-label="Nuxt documentation for Components (opens in new tab)"
      >
        Nuxt Documentation — Components
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </footer>
  </section>
</template>

<style scoped lang="scss">
$block: 'demo-component';

.#{$block} {
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 1rem;
  width: 80%;
  margin: pxToRem(32) 10%;

  &__title {
    background: linear-gradient(
      90deg,
      #ff0000 0%,
      #ff7f00 14%,
      #ffff00 28%,
      #00ff00 42%,
      #0000ff 56%,
      #4b0082 70%,
      #ee82ee 84%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-size: 36px;
    font-weight: bolder;
    letter-spacing: 2px;
  }
}
</style>
