// https://nuxt.com/docs/guide/directory-structure/server
// PUT handler for a single demo entry — updates it in the local JSON file by id.

import { promises as fs } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  // Parse the dynamic [id] route param; fall back to 0 if missing
  const id = parseInt(event.context.params?.id ?? '0')

  // Read the updated demo object from the request body
  const editedDemo = await readBody(event)

  // Resolve the absolute path to the JSON data file at runtime
  const filePath = join(
    process.cwd(),
    'public',
    'data',
    'demoJsonStoreData.json'
  )

  let demos = []
  try {
    // Read and parse the current list of demo entries
    const file = await fs.readFile(filePath, 'utf-8')
    demos = JSON.parse(file)
  } catch (e) {
    // If the file is missing or malformed, log and continue with an empty list
    console.error('Error reading demoJsonStoreData.json:', e)
    demos = []
  }

  // Replace the matching entry with the edited version; leave all others unchanged
  const newDemos = demos.map((demo: { id: number }) =>
    demo.id === id ? editedDemo : demo
  )

  // Persist the updated list back to the JSON file
  await fs.writeFile(filePath, JSON.stringify(newDemos, null, 2), 'utf-8')

  return 'demo edited'
})
