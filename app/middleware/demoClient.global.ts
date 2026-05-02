// https://nuxt.com/docs/guide/directory-structure/server#server-middleware

/**
 * Server middleware runs on every request to the Nitro server, before the matched API handler.
 * Unlike route handlers, it has no return value — it intercepts and can modify the event.
 * Scope is always global; there is no per-route or named variant on the server side.
 * Common uses: request logging, auth header validation, CORS headers, rate limiting.
 */

export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'global-test',
    (from, to) => {
      console.log(
        'this global middleware was added on Client side and will be run on every route change'
      )
      console.table({ from, to })
    },
    { global: true }
  )
})
