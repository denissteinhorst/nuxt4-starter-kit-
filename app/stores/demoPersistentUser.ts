/* eslint-disable @typescript-eslint/no-unused-expressions */
// https://pinia.vuejs.org/core-concepts/
// https://github.com/litingyes/pinia-plugin-unstorage

/**
 * Persistent Pinia store for a demo user.
 * State survives page reloads via pinia-plugin-unstorage (cookie-backed).
 * Prefixed with `p` to distinguish persistent store members from the non-persistent demoUser store.
 */

export const useDemoPersistentUser = defineStore('demoPersistentUser', {
  state: () => {
    return {
      name: 'Change me',
      dob: new Date('1970-01-01T00:00:00.000Z'),
    }
  },

  getters: {
    // Returns the user's full name — currently single-part, ready to be extended
    pFullName(): string {
      return `${this.name}`
    },

    // Calculates days alive from dob; coerces string dob (e.g. after cookie deserialisation) to Date first
    pDaysOnPlanet(): string {
      typeof this.dob === 'string'
        ? useDemoPersistentUser().pChangeDateOfBirth(new Date(this.dob))
        : ''
      return Math.floor(
        (Date.now() - this.dob.getTime()) / 1000 / 60 / 60 / 24
      ).toLocaleString()
    },

    // Calculates age in years from dob; same string-coercion guard as pDaysOnPlanet
    pCurrentAge(): number {
      typeof this.dob === 'string'
        ? useDemoPersistentUser().pChangeDateOfBirth(new Date(this.dob))
        : ''
      return Math.floor(
        (Date.now() - this.dob.getTime()) / 1000 / 60 / 60 / 24 / 365
      )
    },
  },

  actions: {
    // Overwrites the stored name with the provided value
    pChangeName(name: string) {
      this.name = name
    },

    // Accepts a Date or ISO string and normalises to a Date before storing
    pChangeDateOfBirth(dob: Date | string) {
      this.dob = typeof dob === 'string' ? new Date(dob) : dob
    },

    // Resets the store back to its initial state
    pResetStore() {
      this.$reset()
    },

    // Called by pinia-plugin-unstorage after rehydration to ensure dob is a Date, not a raw string
    hydrate() {
      if (typeof this.dob === 'string') {
        this.dob = new Date(this.dob)
      }
    },
  },

  // Persist only name and dob to the cookie — other keys (if added) won't be stored
  unstorage: {
    pick: ['name', 'dob'],
    // omit: [], // alternative: exclude specific keys instead of allowlisting
  },
})

// Enable Pinia HMR in development so store changes don't require a full page reload
if (import.meta.hot != null) {
  import.meta.hot.accept(
    acceptHMRUpdate(useDemoPersistentUser, import.meta.hot)
  )
}
