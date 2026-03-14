// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // Scripts and Source Code sidebar
  scriptsSidebar: [
    {
      type: "category",
      label: "Scripts & Source Code",
      link: {
        type: "generated-index",
        description:
          "Custom scripts and source code — automation, tooling, and utilities.",
      },
      items: [
        "scripts-and-source/overview",
        {
          type: "category",
          label: "Bash Scripts",
          items: ["scripts-and-source/bash/getting-started"],
        },
        {
          type: "category",
          label: "PowerShell Scripts",
          items: ["scripts-and-source/powershell/getting-started"],
        },
        {
          type: "category",
          label: "Terraform Modules",
          items: ["scripts-and-source/terraform/getting-started"],
        },
        {
          type: "category",
          label: "Python Scripts",
          items: ["scripts-and-source/python/getting-started"],
        },
      ],
    },
  ],

  // Post-Mortems sidebar
  postMortemsSidebar: [
    {
      type: "category",
      label: "Post-Mortems",
      link: {
        type: "generated-index",
        description:
          "Lessons learned and post-mortem analyses for incidents and outages.",
      },
      items: [
        "post-mortems/template",
        "post-mortems/example-incident",
      ],
    },
  ],

  // Useful Links sidebar
  usefulLinksSidebar: [
    {
      type: "category",
      label: "Useful Links",
      link: {
        type: "generated-index",
        description: "Curated reference links for cloud platforms, tools, and communities.",
      },
      items: [
        {
          type: "category",
          label: "Cloud Reference Architecture",
          items: [
            "useful-links/cloud-reference/azure",
            "useful-links/cloud-reference/aws",
            "useful-links/cloud-reference/google-cloud",
          ],
        },
        {
          type: "category",
          label: "Community",
          items: ["useful-links/community/community-sites"],
        },
        {
          type: "category",
          label: "Tools Documentation",
          items: [
            "useful-links/tools-docs/terraform",
            "useful-links/tools-docs/bash",
            "useful-links/tools-docs/powershell",
            "useful-links/tools-docs/coreutils",
            "useful-links/tools-docs/linux",
          ],
        },
      ],
    },
  ],
};

export default sidebars;
