// https://nuxt.com/docs/guide/directory-structure/server
// GET handler — proxies a request to the randomuser.me public API and returns the response.
//               Keeping the external API call server-side avoids CORS issues on the client.

export default defineEventHandler(async () => {
  // Fetch a single random user from the public API
  const response = await fetch('https://randomuser.me/api/')

  // Parse and forward the JSON response directly to the client
  return await response.json()
})
