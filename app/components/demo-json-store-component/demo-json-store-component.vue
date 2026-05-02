<script setup lang="ts">
// Named composable import — manages all CRUD state and actions for the demo store
import useDemoJsonStoreComposable from '~/composables/useDemoJsonStoreComposable'

// Await ensures async setup (e.g. initial fetch) resolves before render
const {
  demoJsonData, // reactive list of all entries
  mode, // object holding dynamic headline and button text for current mode
  demo, // reactive form model (title, content)
  activeMode, // string: 'create' | 'edit' — drives conditional UI
  refresh, // re-fetches data from the JSON source
  switchMode, // sets activeMode and optionally loads an entry into the form
  removeDemo, // deletes an entry by id
  formSubmit, // handles both create and edit submission
} = await useDemoJsonStoreComposable()
</script>

<template>
  <NuxtErrorBoundary>
    <template #error="{ error }">
      <p role="alert">An error occurred: {{ error }}</p>
    </template>

    <section class="demo-card" aria-labelledby="demo-card-heading">
      <div class="demo-card__wrapper">
        <h2 id="demo-card-heading">Current Demo Data</h2>

        <template v-if="demoJsonData && demoJsonData.length">
          <article
            v-for="entry in demoJsonData"
            :key="entry.id"
            class="demo-card__item"
            :aria-label="`Entry ${entry.id}: ${entry.title}`"
          >
            <header class="demo-card__header">
              <div class="demo-card__title">
                id: [{{ entry.id }}] | {{ entry.title }}
              </div>
              <button
                class="demo-card__edit"
                type="button"
                :aria-label="`Edit entry: ${entry.title}`"
                @click="switchMode('edit', entry.id)"
              >
                Edit
              </button>
              <button
                class="demo-card__delete"
                type="button"
                :aria-label="`Delete entry: ${entry.title}`"
                @click="removeDemo(entry.id)"
              >
                Delete
              </button>
            </header>

            <div class="demo-card__content">
              <p>{{ entry.content }}</p>
            </div>
          </article>

          <section aria-labelledby="demo-form-heading">
            <h2 id="demo-form-heading">{{ mode.headlineText }}</h2>
            <form @submit.prevent="formSubmit">
              <label for="title">Title</label>
              <input id="title" v-model="demo.title" type="text" required />

              <label for="content">Content</label>
              <input id="content" v-model="demo.content" type="text" required />

              <button type="submit">{{ mode.buttonText }}</button>

              <button
                v-if="activeMode === 'edit'"
                type="button"
                @click="switchMode('create')"
              >
                Abort Edit
              </button>
            </form>
          </section>
        </template>

        <template v-else>
          <p>No data</p>
          <button type="button" @click="refresh()">Refresh</button>
        </template>

        <footer class="demo-card__footer">
          <p class="demo-card__source">
            Data source: <code>~/public/data/demoJsonStoreData.json</code>
          </p>
          <NuxtLink
            to="https://nuxt.com/docs/guide/directory-structure/components"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Nuxt documentation for Components (opens in new tab)"
            class="demo-card__link"
          >
            Nuxt Documentation — Components
            <span aria-hidden="true">↗</span>
          </NuxtLink>
        </footer>
      </div>
    </section>
  </NuxtErrorBoundary>
</template>

<style scoped lang="scss">
$block: 'demo-card';

.#{$block} {
  &__wrapper {
    width: 100%;
    max-width: 500px;
    margin: pxToRem(50) auto;
  }

  &__header {
    background-color: #f1f1f1;
    border: 1px solid #e6e4e4;
    padding: pxToRem(5);
    font-weight: 600;
  }

  &__delete,
  &__edit {
    float: right;
    background-color: #fff;
    border: 1px solid #e6e4e4;
    margin: pxToRem(-2);
    font-weight: 600;
    margin-left: pxToRem(20);
    cursor: pointer;

    &:hover {
      background-color: #444;
      color: #fff;
    }
  }

  &__content {
    padding: pxToRem(5);
    border: 1px solid #e6e4e4;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    label {
      margin: pxToRem(2) 0;
    }
    input,
    button {
      margin: pxToRem(2) 0;
      padding: pxToRem(10);
      width: 100%;
    }
    button {
      background-color: lightgray;
      border: 1px solid #e6e4e4;
      cursor: pointer;
      font-weight: bold;
      padding: pxToRem(10);

      &:hover {
        background-color: #444;
        color: #fff;
      }
    }
  }
}
</style>
