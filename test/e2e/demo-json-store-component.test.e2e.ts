// https://nuxt.com/docs/getting-started/testing#end-to-end-testing
// https://vitest.dev/guide/

/**
 * E2E test suite for the demo-json-store-component page.
 * Uses Nuxt test-utils to spin up the full Nuxt server and assert against real HTTP responses.
 * Covers: page rendering, component presence, and API response integrity against the local JSON file.
 */

import { $fetch, fetch, setup, url } from '@nuxt/test-utils'
import { describe, expect, test } from 'vitest'

describe('demo-json-store-component (e2e)', async () => {
  // Boot the Nuxt server before tests run; browser: false uses $fetch instead of Playwright
  await setup({
    server: true,
    browser: false,
  })

  // Holds the parsed contents of the local JSON file for API response comparison
  let localApiJsonResponse: unknown = []

  try {
    const { readFile } = await import('node:fs/promises')

    // Read the source JSON file directly — used as the expected value in the API test
    const file = await readFile(
      new URL('../../public/data/demoJsonStoreData.json', import.meta.url),
      'utf-8'
    )

    localApiJsonResponse = JSON.parse(file)
  } catch (error) {
    console.error('Error reading local demoJsonStoreData.json file', error)
  }

  test('renders the demoJsonStorePage page', async () => {
    // Fetch the page HTML and assert the main heading is present
    const html = await $fetch('/demoJsonStorePage')
    expect(html).toContain('Showcase: CRUD-Operations')
  })

  test('renders the demoJsonStoreComponent', async () => {
    // Confirm the component has mounted and rendered its data section heading
    const html = await $fetch('/demoJsonStorePage')
    expect(html).toContain('Current Demo Data')
  })

  test('demoJsonStorePage contacts the API', async () => {
    // Call the API endpoint directly and compare its response to the local JSON file
    const endpoint = url('/api/demoJsonStoreEndpoint')
    const response = await fetch(endpoint).then(async (res) => await res.json())

    expect(response).toStrictEqual(localApiJsonResponse)
  })
})
