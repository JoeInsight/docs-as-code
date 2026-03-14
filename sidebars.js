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
            "library/cloud-reference/azure",
            "library/cloud-reference/aws",
            "library/cloud-reference/google-cloud",
          ],
        },
        {
          type: "category",
          label: "Community",
          items: ["library/community/community-sites"],
        },
        {
          type: "category",
          label: "Tools Documentation",
          items: [
            "library/script docs/terraform",
            "library/script docs/bash",
            "library/script docs/powershell",
            "library/script docs/coreutils",
            "library/script docs/linux",
          ],
        },
      ],
    },
  ],

  // GitHub Library sidebar
  githubLibrarySidebar: [
    {
      type: "category",
      label: "GitHub lib",
      link: {
        type: "generated-index",
        description: "Useful GitHub repos",
      },
      items: ["library/github/github"],
    },
  ],
};

export default sidebars;
