// @vitest-environment nuxt
// https://nuxt.com/docs/getting-started/testing#unit-testing
// https://test-utils.vuejs.org/guide/
// https://vitest.dev/guide/

/**
 * Unit test suite for the demo-component.
 * Located in ~/tests/nuxt/ — this directory requires the Nuxt runtime environment
 * (note the @vitest-environment nuxt directive above) for composables, auto-imports, etc.
 * Framework-agnostic unit tests that don't need Nuxt live in ~/tests/ instead.
 * Uses Vue Test Utils' shallowMount to isolate the component from its children.
 * Covers: component instantiation and HTML snapshot integrity.
 *
 * Note: the inline snapshot reflects the pre-refactor component markup —
 * update it after applying the corrected demo-component.vue template.
 */

import { shallowMount } from '@vue/test-utils'
import { beforeAll, describe, expect, test } from 'vitest'
import type { IDemoComponent } from '../../app/components/demo-component/demo-component.model'
import Component from '../../app/components/demo-component/demo-component.vue'

describe('Demo Component (Unit)', () => {
  // Mount the component once before all tests to verify it instantiates without errors
  const preWrapper = shallowMount(Component, {
    props: {
      text: 'lorem',
      text2: 'ipsum',
    } as IDemoComponent,
  })

  // Guard — if the component fails to mount, all subsequent tests are meaningless
  beforeAll(() => {
    expect(preWrapper.vm).toBeTruthy()
  })

  test('to match inline snapshot', () => {
    // Mount a fresh instance with known props for a deterministic snapshot
    const wrapper = shallowMount(Component, {
      props: {
        text: 'lorem',
        text2: 'ipsum',
      } as IDemoComponent,
    })

    // Snapshot the full rendered HTML — update this after any intentional template changes
    expect(wrapper.html()).toMatchInlineSnapshot()
  })
})
