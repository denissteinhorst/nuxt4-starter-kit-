// https://pinia.vuejs.org/core-concepts/

/**
 * Non-persistent Pinia store for a demo user.
 * State is reset on every page reload — no cookie or storage backing.
 * Suffixed with `NP` on raw state keys to distinguish from the persistent store's shape.
 */

export const useDemoUser = defineStore('demoUser', {
  state: () => ({
    nameNP: 'Max Mustermann',
    dobNP: '1970-01-01T00:00:00.000Z', // stored as ISO string to avoid serialisation issues
  }),

  getters: {
    // Exposes nameNP under a clean public alias
    fullName: (state) => state.nameNP,

    // Calculates days alive; 86400000 = ms in a day
    daysOnPlanet: (state): number => {
      const dob = new Date(state.dobNP)
      return Math.floor((Date.now() - dob.getTime()) / 86400000)
    },

    // Calculates age in years; 31557600000 = ms in a Julian year (365.25 days)
    currentAge: (state): number => {
      const dob = new Date(state.dobNP)
      return Math.floor((Date.now() - dob.getTime()) / 31557600000)
    },
  },

  actions: {
    // Overwrites the stored name with the provided value
    changeName(name: string) {
      this.nameNP = name
    },

    // Normalises Date or string input to an ISO string before storing
    changeDateOfBirth(dob: Date | string) {
      this.dobNP =
        dob instanceof Date ? dob.toISOString() : new Date(dob).toISOString()
    },
  },

  // Empty pick list — nothing is persisted; store resets on every page load
  unstorage: {
    pick: [],
  },
})
