const math = require("remark-math");
const katex = require("rehype-katex");

module.exports = {
  title: "ut.code(); Learn",
  tagline: "ut.code(); Learn",
  url: "https://learn.utcode.net/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "ut-code",
  projectName: "utcode-learn",
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ut-code/utcode-learn/blob/master/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: [
            require.resolve("./node_modules/katex/dist/katex.min.css"),
            require.resolve("./src/css/custom.css"),
          ],
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: "ut.code(); Learn",
      logo: {
        alt: "ut.code();",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "テキスト",
          position: "left",
        },
        {
          href: "https://utcode.net/",
          label: "ut.code();",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "ut.code(); について",
          items: [
            {
              label: "公式ウェブサイト",
              href: "https://utcode.net/",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/utokyo_code",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ut.code();. Built with Docusaurus.`,
    },
  },
};
