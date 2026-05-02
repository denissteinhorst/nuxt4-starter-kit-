<script setup lang="ts">
// Access full locale list, current locale, and the setter from vue-i18n
const { locales, locale, setLocale } = useI18n()

// Two-way computed: reads current locale, writes by switching it on set
const language = computed({
  get: () => locale.value,
  set: (value) => setLocale(value),
})
</script>

<template>
  <div class="demo-i18n-lang-switcher">
    <!--
      <label> associates the visible text with the <select> for screen readers.
      Wrapping both keeps the association implicit without needing an id pair.
    -->
    <label class="demo-i18n-lang-switcher__label">
      {{ $t('langSwitcherHeadline') }}

      <select v-model="language" class="demo-i18n-lang-switcher__select">
        <!--
          Locales can be strings or locale objects — the ternary handles both shapes.
          :key and :value use the code; display falls back to the raw string if needed.
        -->
        <option
          v-for="item in locales"
          :key="typeof item === 'object' ? item.code : item"
          :value="typeof item === 'object' ? item.code : item"
        >
          {{ typeof item === 'object' ? item.name : item }}
        </option>
      </select>
    </label>
  </div>
</template>

<style scope lang="scss">
$block: 'demo-i18n-lang-switcher';

.#{$block} {
  font-weight: bold;
  margin-top: 50px;

  &__select {
    padding: 5px;
    margin: 10px 0;
  }
}
</style>
