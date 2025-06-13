// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Prompt Engineering',
  tagline: 'Crafting effective prompts for LLMs',
  url: 'https://saikrishnavadali05.github.io',
  baseUrl: '/prompt-engineering/',
  organizationName: 'saikrishnavadali05',
  projectName: 'prompt-engineering',
  trailingSlash: false,
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs', // keeps your links working like /docs/1-introduction
          editUrl: undefined, // disables "Edit this page" links
        },
        blog: false, // disabled since you’re not using the blog
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Prompt Engineering',
        logo: {
          alt: 'Prompt Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            to: '/docs/1-introduction',
            label: 'Guide',
            position: 'left',
          },
          {
            href: 'https://github.com/saikrishnavadali05/prompt-engineering',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Resources',
            items: [
              {
                label: 'Docs',
                to: '/docs/1-introduction',
              },
              {
                label: 'GitHub Repo',
                href: 'https://github.com/saikrishnavadali05/prompt-engineering',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Docusaurus Discord',
                href: 'https://discord.com/invite/docusaurus',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
            ],
          },
        ],
        copyright: `© ${new Date().getFullYear()} Prompt Engineering Guide`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
