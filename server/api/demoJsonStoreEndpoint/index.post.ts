// https://nuxt.com/docs/guide/directory-structure/server
// POST handler — adds a new demo entry to the local JSON file with an auto-incremented id.

import { promises as fs } from 'fs'
import { join } from 'path'

export default defineEventHandler(async (event) => {
  // Read the new demo object from the request body
  const demo = await readBody(event)

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

  if (demos.length > 0) {
    // Find the highest existing id and increment it by 1
    const lastId =
      demos.reduce((prev: { id: number }, current: { id: number }) =>
        prev.id > current.id ? prev : current
      ).id ?? 0
    demo.id = lastId + 1
  } else {
    // No existing entries — start the id sequence at 1
    demo.id = 1
  }

  // Prepend the new entry and persist the updated list back to the JSON file
  await fs.writeFile(
    filePath,
    JSON.stringify([demo, ...demos], null, 2),
    'utf-8'
  )

  return 'demo added'
})
