// https://nuxt.com/docs/guide/directory-structure/composables
// https://nuxt.com/docs/guide/directory-structure/server#api-routes

import type { IDemo } from './useDemoJsonStoreComposable.model'

/**
 * Composable for managing CRUD operations against the demoJsonStore API endpoint.
 * Handles fetching, creating, editing, and deleting demo entries,
 * as well as form state and mode switching between 'create' and 'edit'.
 */
export default async function useDemoJsonStoreComposable() {
  // Initial data fetch — `refresh` can be called to re-sync with the server
  const { data: demoJsonData, refresh } = await useFetch(
    '/api/demoJsonStoreEndpoint'
  )

  // Reactive form model shared between create and edit operations
  const demo = ref({
    id: 0,
    title: '',
    content: '',
  }) as Ref<IDemo>

  // Tracks whether the form is in 'create' or 'edit' mode
  const activeMode = ref('create') as Ref<'edit' | 'create'>

  // Static config per mode — drives headline and submit button text
  const modes = {
    edit: {
      headlineText: '"Edit"-mode',
      buttonText: 'Save Data Entry',
    },
    create: {
      headlineText: '"Create"-mode',
      buttonText: 'Create new Data Entry',
    },
  }

  // Derived UI strings based on the current activeMode
  const mode = computed(() => {
    return modes[activeMode.value]
  })

  /**
   * Switches between 'create' and 'edit' modes.
   * In edit mode, loads the matching entry into the form by id.
   */
  const switchMode = (mode: string, id?: number) => {
    if (mode === 'create') {
      activeMode.value = 'create'
      // Clear form fields when returning to create mode
      demo.value.title = ''
      demo.value.content = ''
    } else if (mode === 'edit') {
      activeMode.value = 'edit'
      // Populate form with the selected entry's data
      demo.value = demoJsonData.value?.find((entry: IDemo) => entry.id === id)
    }
  }

  /**
   * Delegates form submission to the correct operation based on activeMode.
   */
  const formSubmit = async () => {
    if (activeMode.value === 'create') {
      await addDemo()
    } else {
      await editDemo()
    }
  }

  /**
   * Sends a PUT request to update the current demo entry, then re-syncs the list.
   */
  const editDemo = async () => {
    demoJsonData.value = '' // Clear stale data while request is in flight
    await $fetch(`/api/demoJsonStoreEndpoint/${demo.value.id}`, {
      method: 'PUT',
      body: JSON.stringify(demo.value),
    })
    // Reset form after successful save
    demo.value.title = ''
    demo.value.content = ''
    await refresh()
  }

  /**
   * Sends a POST request to create a new demo entry, then re-syncs the list.
   */
  const addDemo = async () => {
    demoJsonData.value = '' // Clear stale data while request is in flight
    await $fetch('/api/demoJsonStoreEndpoint', {
      method: 'POST',
      body: JSON.stringify(demo.value),
    })
    // Reset form after successful creation
    demo.value.title = ''
    demo.value.content = ''
    await refresh()
  }

  /**
   * Sends a DELETE request for the given id, re-syncs the list,
   * and resets the form back to create mode.
   */
  const removeDemo = async (id: number) => {
    demoJsonData.value = '' // Clear stale data while request is in flight
    await $fetch(`/api/demoJsonStoreEndpoint/${id}`, {
      method: 'DELETE',
    })
    await refresh()
    activeMode.value = 'create' // Return to create mode after deletion
  }

  return {
    demoJsonData,
    mode,
    demo,
    activeMode,
    refresh,
    switchMode,
    removeDemo,
    formSubmit,
  }
}
