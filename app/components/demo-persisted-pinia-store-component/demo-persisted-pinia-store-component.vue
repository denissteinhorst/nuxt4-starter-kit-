<script setup lang="ts">
// Persistent Pinia store — survives page refreshes via cookie
const pUser = useDemoPersistentUser()

// Local refs bound to the form inputs
const pNameInput = ref('')
const pDobInput = ref('')

// Passes the current input value to the store's name mutation
const pHandleChangeName = () => {
  pUser.pChangeName(pNameInput.value)
}

// Converts the date string input to a Date object before passing to the store
const pHandleChangeDateOfBirth = () => {
  pUser.pChangeDateOfBirth(new Date(pDobInput.value))
}

// Resets the entire persistent store back to its defaults
const pHandleStoreReset = () => pUser.pResetStore()
</script>

<template>
  <section class="demo-component-pinia" aria-labelledby="pinia-heading">
    <div class="demo-component-pinia__persistent">
      <h2 id="pinia-heading">Pinia PERSISTENT "User" Store</h2>

      <table>
        <caption class="demo-component-pinia__caption">
          Edit persistent user store values below
        </caption>
        <thead>
          <tr>
            <th scope="col">Property</th>
            <th scope="col">Value</th>
            <th scope="col">New Value</th>
            <th scope="col">Submit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Name</td>
            <td>{{ pUser.pFullName }} ({{ pUser.pCurrentAge }})</td>
            <td>
              <label
                for="name-input"
                class="demo-component-pinia__visually-hidden"
              >
                New name
              </label>
              <input
                id="name-input"
                v-model="pNameInput"
                type="text"
                autocomplete="name"
              />
            </td>
            <td>
              <button type="button" @click="pHandleChangeName()">Submit</button>
            </td>
          </tr>
          <tr>
            <td>Days on Planet</td>
            <td>{{ pUser.pDaysOnPlanet }}</td>
            <td>
              <label
                for="dob-input"
                class="demo-component-pinia__visually-hidden"
              >
                Date of birth
              </label>
              <input
                id="dob-input"
                v-model="pDobInput"
                type="date"
                autocomplete="bday"
              />
            </td>
            <td>
              <button type="button" @click="pHandleChangeDateOfBirth()">
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <button
        type="button"
        class="demo-component-pinia__persistent-reset-button"
        @click="pHandleStoreReset()"
      >
        Reset persistent user store
      </button>
    </div>

    <footer class="demo-component-pinia__footer">
      <NuxtLink
        to="https://nuxt.com/docs/guide/directory-structure/components"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nuxt documentation for Components (opens in new tab)"
        class="demo-component-pinia__link"
      >
        Nuxt Documentation — Components
        <span aria-hidden="true">↗</span>
      </NuxtLink>
    </footer>
  </section>
</template>

<style scoped lang="scss">
$block: 'demo-component-pinia';

.#{$block} {
  table {
    border-collapse: collapse;
    width: 60%;
    margin: 0 20%;

    th,
    td {
      text-align: left;
      padding: 8px;
      width: 25%;
    }

    th {
      background-color: #d5d5d5;
      color: black;
    }

    tr > td:nth-child(2) {
      font-weight: bold;
    }
  }

  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }

  button {
    width: 100%;
    background-color: #d5d5d5;
    color: black;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  &__non-persistent {
    padding: 1rem;
  }

  &__persistent {
    padding: 1rem;
  }

  &__visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
}
</style>
