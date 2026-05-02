<script setup lang="ts">
import {
  useFps,
  useIdle,
  useIntervalFn,
  useMouse,
  useTimestamp,
} from '@vueuse/core'
import { rand } from '@vueuse/shared'
import { computed, ref } from 'vue'

// https://vueuse.org/core/useMouse/
const { x, y, sourceType } = useMouse()

// https://vueuse.org/core/useIdle/
const { lastActive } = useIdle(5000)
const now = useTimestamp()
const idledFor = computed(() =>
  Math.floor((now.value - lastActive.value) / 1000)
)

// https://vueuse.org/core/useFps/
const fps = useFps()

// https://vueuse.org/shared/useIntervalFn/
const greetings = [
  'Hello',
  'Hi',
  'Yo!',
  'Hey',
  'Hola',
  'こんにちは',
  'Bonjour',
  'Salut!',
  '你好',
  'Привет',
]
const word = ref('Hello')
const interval = ref(500)
const { pause, resume, isActive } = useIntervalFn(() => {
  word.value = greetings[rand(0, greetings.length - 1)]!
}, interval)
</script>

<template>
  <section class="demo-vueuse-component" aria-label="VueUse feature demos">
    <article
      class="demo-vueuse-component__item"
      aria-labelledby="mouse-heading"
    >
      <h2 id="mouse-heading">
        <NuxtLink to="https://vueuse.org/core/useMouse/"
          >core/useMouse</NuxtLink
        >
      </h2>
      <p>
        <span aria-label="Mouse position and source">
          pos: <output>{{ x }}, {{ y }}</output
          >, {{ sourceType }}
        </span>
      </p>
    </article>

    <article class="demo-vueuse-component__item" aria-labelledby="idle-heading">
      <h2 id="idle-heading">
        <NuxtLink to="https://vueuse.org/core/useIdle/">core/useIdle</NuxtLink>
      </h2>
      <p>
        Inactive:
        <output class="text-primary" aria-live="polite" aria-atomic="true"
          >{{ idledFor }}s</output
        >
      </p>
    </article>

    <article class="demo-vueuse-component__item" aria-labelledby="fps-heading">
      <h2 id="fps-heading">
        <NuxtLink to="https://vueuse.org/core/useFps/">core/useFps</NuxtLink>
      </h2>
      <p>
        FPS: <output aria-live="polite" aria-atomic="true">{{ fps }}</output>
      </p>
    </article>

    <article
      class="demo-vueuse-component__item"
      aria-labelledby="interval-heading"
    >
      <h2 id="interval-heading">
        <NuxtLink to="https://vueuse.org/shared/useIntervalFn/"
          >shared/useIntervalFn</NuxtLink
        >
      </h2>
      <p aria-live="polite" aria-atomic="true">{{ word }}</p>
      <p>
        <label for="interval-input">Interval (ms)</label>
        <input
          id="interval-input"
          v-model="interval"
          type="number"
          min="100"
          placeholder="interval"
        />
      </p>
      <button v-if="isActive" type="button" @click="pause">Pause</button>
      <button v-if="!isActive" type="button" @click="resume">Resume</button>
    </article>
  </section>

  <footer class="demo-vueuse-component__footer">
    <NuxtLink
      to="https://vueuse.org/functions.html"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="VueUse documentation for Functions (opens in new tab)"
    >
      VueUse Documentation — Functions
      <span aria-hidden="true">↗</span>
    </NuxtLink>
    <NuxtLink
      to="https://nuxt.com/docs/guide/directory-structure/components"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Nuxt documentation for Components (opens in new tab)"
    >
      Nuxt Documentation — Components
      <span aria-hidden="true">↗</span>
    </NuxtLink>
  </footer>
</template>

<style scoped lang="scss">
$block: 'demo-vueuse-component';

.#{$block} {
  width: 50%;
  margin: 0 25%;
  display: flex;
  justify-content: space-between;

  div {
    padding: 1rem;
    margin: 1rem;
  }
}
</style>
