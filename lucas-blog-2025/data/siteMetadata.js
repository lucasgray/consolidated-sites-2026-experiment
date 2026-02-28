/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Lucas Makes Software',
  author: 'Lucas Gray',
  headerTitle: 'Lucas Makes Software',
  description:
    'A journal about my forays into game development. Occasionally punctuated by work projects.',
  language: 'en-us',
  theme: 'system', // system, dark or light
  siteUrl: 'https://lucasegray.com',
  siteRepo: 'https://github.com/lucasgray/lucasblog',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/lucasgray.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/lucasgray.png`,
  github: 'https://github.com/lucasgray',
  linkedin: 'https://www.linkedin.com/in/lucas-gray-6169403/',
  mastodon: 'https://mastodon.gamedev.place/@lucasgray',
  email: 'lucas.e.gray@gmail.com',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: false,
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: process.env.NEXT_UMAMI_ID, // e.g. 123e4567-e89b-12d3-a456-426614174000
      // You may also need to overwrite the script if you're storing data in the US - ex:
      // src: 'https://us.umami.is/script.js'
      // Remember to add 'us.umami.is' in `next.config.js` as a permitted domain for the CSP
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // If you are hosting your own Plausible.
    //   src: '', // e.g. https://plausible.my-domain.com/js/script.js
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    googleAnalytics: {
      googleAnalyticsId: 'G-96SYSZ6TC6', // e.g. G-XXXXXXX
    },
  },
}

module.exports = siteMetadata
