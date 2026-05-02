<script setup lang="ts">
// Set SEO meta tags server-side only to avoid hydration mismatches
if (import.meta.server) {
  useSeoMeta({
    title: process.env.APP_NAME,
    description: 'testing...',
  })
}

// Each entry represents a demo feature with its route, label, and highlight terms
const demoLinks = [
  {
    title: '☑️ Navigate to another Page in (~/pages)',
    linkText: 'goto /demoPage',
    link: '/demoPage',
    highlight: ['navigate to', 'Page in', '(~/pages)'],
  },
  {
    title: '☑️ a Page that not exists and show custom error Page',
    linkText: 'goto /CustomErrorPage',
    link: '/ignoreThisWarningItsExpectedToShowPageForAnUnknownRoute',
    highlight: ['show custom error Page'],
  },
  {
    title: '☑️ Navigate to a Page utilizing a custom layout',
    linkText: 'goto /demoPageCustomLayout',
    link: '/demoPageCustomLayoutPage',
    highlight: ['utilizing a custom layout'],
  },
  {
    title: '☑️ Navigate to a Page utilizing a Component from (~/components)',
    linkText: 'goto /demoPageComponent',
    link: '/demoPageComponentPage',
    highlight: ['utilizing a Component'],
  },
  {
    title:
      '☑️ Navigate to a Page to showcase CRUD-Operations for local JSON data',
    linkText: 'goto /demoJsonStorePage',
    link: '/demoJsonStorePage',
    highlight: ['showcase CRUD-Operations '],
  },
  {
    title:
      '☑️ Navigate to a Page to showcase component with data from an public API',
    linkText: 'goto /demoPublicApiPage',
    link: '/demoPublicApiPage',
    highlight: ['showcase component with data from an public API'],
  },
  {
    title: '☑️ Navigate to a Page to showcase pinia store',
    linkText: 'goto /demoPiniaStorePage',
    link: '/demoPiniaStorePage',
    highlight: ['showcase pinia store'],
  },
  {
    title: '☑️ Navigate to a Page to showcase persistent pinia store',
    linkText: 'goto /demoPersistentPiniaStorePage',
    link: '/demoPersistentPiniaStorePage',
    highlight: ['showcase persistent pinia store'],
  },
  {
    title: '☑️ Navigate to a Page to showcase vueuse',
    linkText: 'goto /demoVueusePage',
    link: '/demoVueusePage',
    highlight: ['showcase vueuse'],
  },
  {
    title: '☑️ Navigate to a Page to showcase i18n',
    linkText: 'goto /demoI18nPage',
    link: '/demoI18nPage',
    highlight: ['showcase i18n'],
  },
  {
    title:
      '☑️ Middleware on Client- and Server Side<br /><br />Client (~/middleware/demoClient.global.ts):<br />Watch your browser console after every route change<br /><br />Server (~/server/middleware/demoServer.global.ts):<br />Watch your terminal after sending a request to /api/',
    highlight: ['Middleware on Client- and Server Side'],
    linkText: '',
    link: '',
  },
]

const repoLink = 'https://github.com/denissteinhorst/nuxt4-starter-kit'

const readmeLink =
  'https://github.com/denissteinhorst/nuxt4-starter-kit/blob/main/README.md'

// Section jumpmarks for the GitHub README
const readmeJumpmarks = [
  { title: 'About The Project', link: '#about-the-project' },
  { title: 'Prerequisites', link: '#prerequisites' },
  { title: 'Installation', link: '#installation' },
  { title: 'Usage', link: '#usage' },
  { title: 'How to Deploy', link: '#how-to-deploy' },
  { title: 'Troubleshooting', link: '#troubleshooting' },
  { title: 'Contributing', link: '#contributing' },
  { title: 'Contact', link: '#contact' },
  { title: 'Stack Documentation', link: '#stack-documentation' },
]

// Wraps matched highlight terms in <strong> tags for visual emphasis
const highlight = (text: string, highlight: string[]) => {
  const regex = new RegExp(`(${highlight.join('|')})`, 'gi')
  return text.replace(regex, '<strong>$1</strong>')
}
</script>

<template>
  <article class="index-page" aria-labelledby="index-heading">
    <h1 id="index-heading" class="index-page__title">
      Thanks for choosing the `Nuxt4-Starter-Kit`
    </h1>

    <p>
      The Nuxt 4 Starter Kit is a plug-and-play foundation for your next
      project. Environments, testing, staging, TypeScript, linting, routing,
      layouts, composables, Pinia stores, i18n, VueUse and public API
      integration — all pre-configured, fully commented, and documented with
      direct links to the official docs. No boilerplate hunting, no setup
      headaches. Just clone and go 🚀
    </p>

    <p>
      Use the following examples to get a brief overview how things work. You
      can also run: <code>cleanup.sh</code> / <code>cleanup.ps1</code> to get
      rid of all examples.
    </p>

    <table class="index-page__table">
      <caption class="index-page__table-caption">
        Available demo pages and features
      </caption>
      <thead>
        <tr>
          <th scope="col">Available Demos</th>
          <th scope="col">Link</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="demoLink in demoLinks" :key="demoLink.link">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <td v-html="highlight(demoLink.title, demoLink.highlight)" />
          <td>
            <NuxtLink v-if="demoLink.link" :to="demoLink.link">
              {{ demoLink.linkText }}
            </NuxtLink>
          </td>
        </tr>
      </tbody>
    </table>

    <aside class="index-page__rate" aria-label="Closing note">
      <strong>Closing Note:</strong>
      Thanks to claude, every file in this kit was fully commented and enriched
      with direct links to the official documentation in no time — so you can
      learn as you go without having to search. The goal is a clean,
      ready-to-use starting point that spares you the hassle of knitting
      everything together yourself: routing, layouts, components, composables,
      stores, i18n, testing and more — all pre-configured and documented out of
      the box. If you have any suggestions, find broken links or wrong
      information feel free to open an issue or a pull request. I'm always happy
      to hear from you! If you like the
      <code>Nuxt4-Starter-Kit</code>, please support me by granting a ⭐️ on
      <a :href="repoLink" target="_blank" rel="noopener noreferrer">Github</a>!
    </aside>

    <nav class="index-page__readme" aria-label="Documentation links">
      <NuxtLink
        to="https://nuxt.com/docs/getting-started/routing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Nuxt documentation for Routing (opens in new tab)"
      >
        Nuxt Documentation — Routing
        <span aria-hidden="true">↗</span>
      </NuxtLink>

      <strong>Documentation Jumpmarks (Github README.md)</strong>
      <ul>
        <li v-for="readme in readmeJumpmarks" :key="readme.title">
          <a
            :href="`${readmeLink}${readme.link}`"
            target="_blank"
            rel="noopener noreferrer"
            :aria-label="`${readme.title} (opens in new tab)`"
          >
            {{ readme.title }}
          </a>
        </li>
      </ul>
    </nav>
  </article>
</template>

<style scoped lang="scss">
$block: 'index-page';

.#{$block} {
  width: 100%;
  max-width: 1200px;
  margin: pxToRem(50) auto;

  &__title {
    font-size: pxToRem(30);
    margin-bottom: pxToRem(20);
    border-bottom: 1px solid black;
  }

  &__spacer {
    height: pxToRem(16);
  }

  &__table {
    width: 100%;
    border-collapse: collapse;
    margin-top: pxToRem(32);

    tr {
      &:nth-child(even) {
        background-color: #f8f8f8;
      }
    }

    th {
      text-align: left;
      padding: pxToRem(5);
      border-bottom: 1px solid #d8d8d8;
    }

    td {
      padding: pxToRem(15) pxToRem(5);

      a {
        color: blue;
        text-decoration: none;
        border-bottom: 1px solid #d8d8d8;
        transition: border-bottom 0.2s ease-in-out;

        &:hover {
          border-bottom: 1px solid blue;
        }
      }
    }
  }
  &__rate {
    border-top: 1px solid black;
    margin: pxToRem(50) 0;
    padding: pxToRem(5) 0;
    font-size: pxToRem(14);

    strong {
      display: block;
    }
  }
  &__readme {
    font-size: 14px;

    strong {
      display: block;
      margin-bottom: 10px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }
  }
}
</style>
