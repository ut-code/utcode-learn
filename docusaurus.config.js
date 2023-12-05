import { themes as prismThemes } from "prism-react-renderer";
import { execSync } from "node:child_process";
import math from "remark-math";
import katex from "rehype-katex";

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "ut.code(); Learn",
  tagline: "ut.code(); 公式学習教材",
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
          sidebarPath: "./sidebars.js",
          editUrl: "https://github.com/ut-code/utcode-learn/blob/master/",
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: [
            "./node_modules/katex/dist/katex.min.css",
            "./src/css/custom.css",
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
      theme: prismThemes.github,
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
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} ut.code();. Built with Docusaurus.`,
    },
  },
};

export default config;
