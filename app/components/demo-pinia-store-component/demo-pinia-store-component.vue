<script setup lang="ts">
// Non-persistent Pinia store — state resets on every page load
const user = useDemoUser()

// Local refs bound to the form inputs
const nameInput = ref('')
const dobInput = ref('')

// Passes the current input value to the store's name mutation
const handleChangeName = () => {
  user.changeName(nameInput.value)
}

// Converts the date string input to a Date object before passing to the store
const handleChangeDateOfBirth = () => {
  user.changeDateOfBirth(new Date(dobInput.value))
}

// Clears any leftover localStorage entry and resets store state on mount
onMounted(() => {
  localStorage.removeItem('pinia:demoUser')
  user.$reset()
})
</script>

<template>
  <section class="demo-component-pinia" aria-labelledby="pinia-user-heading">
    <div class="demo-component-pinia__non-persistent">
      <h2 id="pinia-user-heading">Pinia "User" Store</h2>

      <table>
        <caption class="demo-component-pinia__caption">
          Edit non-persistent user store values below
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
            <td>
              {{ user.fullName }}
              <ClientOnly>( {{ user.currentAge }} )</ClientOnly>
            </td>
            <td>
              <label
                for="name-input"
                class="demo-component-pinia__visually-hidden"
              >
                New name
              </label>
              <input
                id="name-input"
                v-model="nameInput"
                type="text"
                autocomplete="name"
              />
            </td>
            <td>
              <button type="button" @click="handleChangeName()">Submit</button>
            </td>
          </tr>
          <tr>
            <td>Days on Planet</td>
            <td>
              <ClientOnly fallback="...">
                {{ user.daysOnPlanet.toLocaleString() }}
              </ClientOnly>
            </td>
            <td>
              <label
                for="dob-input"
                class="demo-component-pinia__visually-hidden"
              >
                Date of birth
              </label>
              <input
                id="dob-input"
                v-model="dobInput"
                type="date"
                autocomplete="bday"
              />
            </td>
            <td>
              <button type="button" @click="handleChangeDateOfBirth()">
                Submit
              </button>
            </td>
          </tr>
        </tbody>
      </table>
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
