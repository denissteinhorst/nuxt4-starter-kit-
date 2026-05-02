// https://nuxt.com/docs/guide/directory-structure/composables
// https://nuxt.com/docs/guide/directory-structure/server#api-routes

/**
 * Composable for fetching a random user from a public API via a server-side proxy endpoint.
 * Exposes the fetched data and a refresh function to trigger a new request on demand.
 */
export default async function useDemoPublicApiComposable() {
  // Fetches on init; `refresh` re-triggers the request without a full page reload
  const { data: demoPublicData, refresh } = await useFetch(
    '/api/demoPublicApiEndpoint'
  )

  return {
    demoPublicData,
    refresh,
  }
}
