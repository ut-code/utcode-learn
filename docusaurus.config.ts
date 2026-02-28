import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { execSync } from "node:child_process";
import math from "remark-math";
import katex from "rehype-katex";
import remarkTerm from "./src/remark/remark-term";

const config: Config = {
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
  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
        language: ["ja"],
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: "/docs",
      },
    ],
  ],
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          showLastUpdateTime: true,
          sidebarPath: "./sidebars.ts",
          editUrl: "https://github.com/ut-code/utcode-learn/blob/main/",
          remarkPlugins: [math, remarkTerm],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: [
            "./node_modules/katex/dist/katex.min.css",
            "./src/css/custom.css",
          ],
        },
        gtag: process.env.GOOGLE_ANALYTICS_TRACKING_ID && {
          trackingID: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        },
      } satisfies Preset.Options,
    ],
  ],
  themeConfig: {
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
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
  } satisfies Preset.ThemeConfig,
};

export default config;
