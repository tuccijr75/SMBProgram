const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'SMB AI Tool Builder',
  tagline: '36-week academic and job-ready program',
  favicon: 'img/logo.svg',

  url: 'https://tuccijr75.github.io',
  baseUrl: '/SMBProgram/',
  organizationName: 'tuccijr75',
  projectName: 'SMBProgram',

  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn'
    }
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en']
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js')
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],

  themeConfig: {
    image: 'img/logo.svg',
    navbar: {
      title: 'SMB AI Tool Builder',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'programSidebar',
          position: 'left',
          label: 'Program'
        },
        {
          href: 'https://github.com/tuccijr75/SMBProgram',
          label: 'GitHub',
          position: 'right'
        }
      ]
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Program',
          items: [
            {
              label: 'Intro',
              to: '/'
            },
            {
              label: 'Roadmap',
              to: '/roadmap'
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} SMB AI Tool Builder Program`
    },
    prism: {
      theme: themes.github,
      darkTheme: themes.dracula
    }
  }
};

module.exports = config;
