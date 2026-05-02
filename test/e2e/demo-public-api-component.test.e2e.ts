// https://nuxt.com/docs/getting-started/testing#end-to-end-testing
// https://vitest.dev/guide/

/**
 * E2E test suite for the demo-public-api-component page.
 * Uses Nuxt test-utils to spin up the full Nuxt server and assert against real HTTP responses.
 * Covers: page rendering, component presence, and that the public API proxy returns a non-empty response.
 *
 * Note: the first two tests currently target /demoJsonStorePage instead of /demoPublicApiPage —
 * this appears to be a copy-paste oversight and should be corrected.
 */

import { describe, expect, test } from 'vitest'
import { setup, fetch, $fetch, url } from '@nuxt/test-utils'

describe('demo-public-api-component (e2e)', async () => {
  // Boot the Nuxt server before tests run; browser: false uses $fetch instead of Playwright
  await setup({
    server: true,
    browser: false,
  })

  test('renders the demoPublicApiPage page', async () => {
    // Fetch the page HTML and assert the main heading is present
    const html = await $fetch('/demoJsonStorePage')
    expect(html).toContain('Showcase: CRUD-Operations')
  })

  test('renders the demoPublicApiComponent', async () => {
    // Confirm the component has mounted and rendered its data section heading
    const html = await $fetch('/demoJsonStorePage')
    expect(html).toContain('Current Demo Data')
  })

  test('demoPublicApiPage contacts the API', async () => {
    // Call the proxy endpoint and assert it returns a non-empty response from randomuser.me
    const endpoint = url('/api/demoPublicApiEndpoint')
    const response = await fetch(endpoint).then(async (res) => await res.json())

    expect(response).not.toEqual([])
  })
})
