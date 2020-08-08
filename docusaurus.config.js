module.exports = {
  title: 'ut.code(); Learn',
  tagline: 'ut.code(); Learn',
  url: 'https://learn.utcode.net/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'ut-code',
  projectName: 'utcode-learn',
  themeConfig: {
    navbar: {
      title: 'ut.code(); Learn',
      logo: {
        alt: 'ut.code();',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'テキスト',
          position: 'left',
        },
        {
          href: 'https://utcode.net/',
          label: 'ut.code();',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'ut.code(); について',
          items: [
            {
              label: '公式ウェブサイト',
              href: 'https://utcode.net/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/utokyo_code',
            },
          ],
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ut.code();. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          homePageId: 'day01/01',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/ut-code/utcode-learn/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
