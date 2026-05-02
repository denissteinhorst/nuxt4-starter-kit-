// https://nuxt.com/docs/guide/directory-structure/server
// GET handler — reads and returns all demo entries from the local JSON file.

import { promises as fs } from 'fs'
import { join } from 'path'

export default defineEventHandler(async () => {
  try {
    // Resolve the absolute path to the JSON data file at runtime
    const filePath = join(
      process.cwd(),
      'public',
      'data',
      'demoJsonStoreData.json'
    )

    // Read and parse the current list of demo entries
    const file = await fs.readFile(filePath, 'utf-8')
    const demos = JSON.parse(file)

    return demos
  } catch (e) {
    // If the file is missing or malformed, log and return a safe fallback
    console.error('Error reading demoJsonStoreData.json:', e)
    return [{ content: 'No demos found' }]
  }
})
