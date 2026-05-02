// https://nuxt.com/docs/getting-started/testing#end-to-end-testing
// https://playwright.dev/docs/library
// https://vitest.dev/guide/

/**
 * E2E test suite for the demo-component page.
 * Uses Playwright for real browser automation across Chromium, Firefox, and WebKit.
 * Nuxt test-utils spins up the actual Nuxt server so tests run against the full stack.
 * Covers: correct content rendering, and cross-browser screenshot capture.
 */
import { type Browser, chromium, firefox, webkit } from 'playwright'
import { describe, expect, test, beforeAll, afterAll } from 'vitest'
import { setup, createPage } from '@nuxt/test-utils'

describe('demo-component (e2e)', async () => {
  await setup({
    server: true,
    browser: false,
  })

  const browserTypes = [chromium, firefox, webkit]

  test(`renders the contents correct`, async () => {
    const page = await createPage('/demoPageComponentPage', {
      viewport: { width: 1280, height: 720 },
    })

    // Wait for the page to fully load before querying — SSR can exceed the default 5s timeout
    await page.waitForLoadState('networkidle')
    await page.waitForSelector('h2', { timeout: 15000 })

    expect(await page.textContent('h2')).toContain(
      "Hello from: '~/components/demo-component.vue'"
    )
    expect(await page.textContent('.demo-component__text')).toContain(
      "Hello from: '~/pages/DemoPageComponent.vue'. I'm a passed property!"
    )
    expect(await page.textContent('.demo-component__subtext')).toContain(
      "This is Demo Component's default text since text2 prop was not passed from parent component"
    )
  }, 30000) // raise test-level timeout to 30s for SSR + Playwright startup overhead

  for (const browserType of browserTypes) {
    let browser: Browser
    beforeAll(async () => {
      browser = await browserType.launch({ headless: true })
    })

    afterAll(async () => {
      browser?.close()
    })

    test(`Screenshot browser test for: ${browserType.name()}`, async () => {
      const page = await createPage('/demoPageComponentPage', {
        viewport: { width: 1280, height: 720 },
      })

      await page.waitForLoadState('networkidle')
      await page.waitForSelector('h2', { timeout: 15000 })

      await page.screenshot({
        path: `test/e2e/__screenshots__/demo-component (${browserType.name()}).png`,
      })

      console.log(
        `\x1b[32m%s\x1b[0m`,
        `Screenshot created, check: ~/test/e2e/__screenshots__/demo-component (${browserType.name()}).png`
      )
    }, 30000)
  }
})
