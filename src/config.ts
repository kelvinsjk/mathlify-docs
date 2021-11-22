export const SITE = {
  title: 'Mathlify Documentation',
  description: 'Mathlify Documentation',
  defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
  image: {
    src: 'https://github.com/snowpackjs/astro/blob/main/assets/social/banner.jpg?raw=true',
    alt: 'astro logo on a starry expanse of space,' + ' with a purple saturn-like planet floating in the right foreground',
  },
  twitter: 'astrodotbuild',
};

export const KNOWN_LANGUAGES = {
  English: 'en',
};

// Uncomment this to add an "Edit this page" button to every page of documentation.
// export const GITHUB_EDIT_URL = `https://github.com/snowpackjs/astro/blob/main/docs/`;

// Uncomment this to add an "Join our Community" button to every page of documentation.
// export const COMMUNITY_INVITE_URL = `https://astro.build/chat`;

// Uncomment this to enable site search.
// See "Algolia" section of the README for more information.
// export const ALGOLIA = {
//   indexName: 'XXXXXXXXXX',
//   apiKey: 'XXXXXXXXXX',
// }

export const SIDEBAR = {
  en: [
    { text: 'Docs', header: true },
    { text: 'Home', link: '' },
    { text: 'Guided Examples', header: true, },
    { text: 'Overview', link: 'tutorial/0-overview' },
    { text: 'Fraction', link: 'tutorial/1-fraction' },
    { text: 'Term and Expression', link: 'tutorial/2-term-expression' },
    { text: 'Polynomial', link: 'tutorial/3-polynomial' },

    { text: 'API Reference', header: true },
    { text: 'Fraction', link: 'api/fraction' },
    { text: 'Term and Expression', link: 'api/term-expression' },
    { text: 'Polynomial', link: 'api/polynomial' },
    { text: 'Utility functions', link: 'api/utility' },
    { text: 'Random functions', link: 'api/random' },
  ],
};
