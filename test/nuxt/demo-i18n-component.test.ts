// @vitest-environment nuxt
// https://nuxt.com/docs/getting-started/testing#unit-testing
// https://test-utils.vuejs.org/guide/
// https://vitest.dev/guide/

/**
 * Unit test suite for the demo-i18n-component.
 * Located in ~/tests/nuxt/ — this directory requires the Nuxt runtime environment
 * (note the @vitest-environment nuxt directive above) for i18n, composables, auto-imports, etc.
 * Framework-agnostic unit tests that don't need Nuxt live in ~/tests/ instead.
 * Uses mountSuspended from @nuxt/test-utils to support async setup and Nuxt context.
 * Covers: correct headline rendering per locale (en, fr, de).
 *
 * Note: expected strings are empty — fill them in once i18n translation keys are finalized.
 */

import { mountSuspended } from '@nuxt/test-utils/runtime'
import { describe, expect, test } from 'vitest'
import Component from '../../app/components/demo-i18n-component/demo-i18n-component.vue'

// Selector for the blog entry title element — kept as a constant to avoid repetition
const headlineClass = '.demo-i18n-component__blogentry--title'

describe('demo-i18n-component', () => {
  test('renders English headline', async () => {
    // Mount with English as the active locale and assert the translated headline
    const wrapper = await mountSuspended(Component, {
      nuxt: {
        defaultLocale: 'en',
      },
    })

    expect(wrapper.find(headlineClass).text()).toContain('') // TODO: insert expected English string
  })

  test('renders French headline', async () => {
    // Mount with French as the active locale and assert the translated headline
    const wrapper = await mountSuspended(Component, {
      nuxt: {
        defaultLocale: 'fr',
      },
    })

    expect(wrapper.find(headlineClass).text()).toContain('') // TODO: insert expected French string
  })

  test('renders German headline', async () => {
    // Mount with German as the active locale and assert the translated headline
    const wrapper = await mountSuspended(Component, {
      nuxt: {
        defaultLocale: 'de',
      },
    })

    expect(wrapper.find(headlineClass).text()).toContain('') // TODO: insert expected German string
  })
})
