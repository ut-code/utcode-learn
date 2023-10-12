const { execSync } = require("node:child_process");
const math = require("remark-math");
const katex = require("rehype-katex");

/** @type {import("@docusaurus/types").Config} */
module.exports = {
  title: "ut.code(); Learn",
  tagline: "ut.code(); 公式教材",
  url: "https://learn.utcode.net/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon.ico",
  organizationName: "ut-code",
  projectName: "utcode-learn",
  i18n: {
    defaultLocale: "ja",
    locales: ["ja"],
  },
  markdown: {
    mermaid: true,
  },
  customFields: {
    commitRef: execSync("git rev-parse HEAD").toString().trim(),
  },
  themes: ["@docusaurus/theme-mermaid"],
  presets: [
    [
      "@docusaurus/preset-classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      {
        docs: {
          showLastUpdateTime: true,
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/ut-code/utcode-learn/blob/develop/",
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
  /** @type {import("@docusaurus/preset-classic").ThemeConfig} */
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
    },
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
            {
              html: `<p style="margin: 10px 0px">ut.code(); は、非営利の大学のサークルであり、日本のWeb技術の発展をサポートしています。
              学習カリキュラムをオープンソースで公開しており、初心者からでも実際にサービスを開発できるようにしています。</p>`,
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ut.code();. Built with Docusaurus.`,
    },
  },
};
