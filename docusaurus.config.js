// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Docs as Code",
  tagline: "Infrastructure, Scripts, Post-Mortems & Reference Links",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://joeinsight.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  baseUrl: "/",

  // GitHub pages deployment config.
  organizationName: "JoeInsight",
  projectName: "docs-as-code",

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
          editUrl:
            "https://github.com/JoeInsight/docs-as-code/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Docs as Code",
        logo: {
          alt: "Docs as Code Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "scriptsSidebar",
            position: "left",
            label: "Scripts & Source",
          },
          {
            type: "docSidebar",
            sidebarId: "postMortemsSidebar",
            position: "left",
            label: "Post-Mortems",
          },
          {
            type: "docSidebar",
            sidebarId: "usefulLinksSidebar",
            position: "left",
            label: "Useful Links",
          },
          {
            type: "docSidebar",
            sidebarId: "githubLibrarySidebar",
            position: "left",
            label: "GitHub lib",
          },
          {
            href: "https://github.com/JoeInsight/docs-as-code",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              { label: "Scripts & Source", to: "/docs/scripts-and-source/overview" },
              { label: "Post-Mortems", to: "/docs/post-mortems/template" },
              { label: "Useful Links", to: "/docs/useful-links/cloud-reference/azure" },
            ],
          },
          {
            title: "Cloud Providers",
            items: [
              { label: "Azure Reference Architecture", href: "https://learn.microsoft.com/en-us/azure/architecture/" },
              { label: "AWS Reference Architecture", href: "https://aws.amazon.com/architecture/" },
              { label: "Google Cloud Architecture", href: "https://cloud.google.com/architecture" },
            ],
          },
          {
            title: "More",
            items: [
              { label: "GitHub", href: "https://github.com/JoeInsight" },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Docs as Code. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ["bash", "powershell", "hcl"],
      },
    }),
};

export default config;
