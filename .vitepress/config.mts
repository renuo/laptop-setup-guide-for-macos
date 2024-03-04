import { defineConfig } from 'vitepress'


// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Laptop Setup Guide",
  description: "for macOS",
  lang: 'en-US',
  head: [
    ['link', { rel: 'preconnect', href: 'https://fonts.googleapis.com' }],
    ['link', { rel: 'preconnect', href: 'https://fonts.gstatic.com' }],
    ['link', { href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap', rel: 'stylesheet' }],
    ['link', { rel: 'icon', href: 'https://www.renuo.ch/favicon.ico' }]
  ],

  sitemap: {
    hostname: 'https://laptop-setup-guide.renuo.ch'
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/start' },
      { text: 'About Renuo', link: 'https://www.renuo.ch' }
    ],

    footer: {
      message: "Made with ❤️ in Switzerland",
      copyright: '<a href="https://www.renuo.ch">Renuo AG</a>',
    },

    externalLinkIcon: true,

    lastUpdated: {
      formatOptions: {
        dateStyle: 'medium',
      }
    },
    editLink: {
      pattern: 'https://github.com/renuo/laptop-setup-guide-for-macos/edit/main/:path'
    },

    sidebar: [
      {
        text: 'Renuo Laptop Setup Guide',
        link: '/start',
        items: [
          { text: 'Non-Technical Setup', link: '/non-technical-setup' },
          { text: 'Technical Setup', link: '/technical-setup' },
          { text: 'Nice to have', link: '/nice-to-have' }
        ]
      }
    ],
  }
})
