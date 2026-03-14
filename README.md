# docs-as-code

A living knowledge base built with [Docusaurus v3](https://docusaurus.io/) and maintained as code alongside the infrastructure and scripts it documents.

## Sections

| Section | Description |
|---|---|
| **Scripts & Source Code** | Custom Bash, PowerShell, Terraform, and Python scripts |
| **Post-Mortems** | Incident reviews and lessons learned |
| **Useful Links – Cloud Reference** | Azure, AWS, and Google Cloud reference architecture links |
| **Useful Links – Community** | DevOps and cloud community sites, forums, and newsletters |
| **Useful Links – Tools Docs** | Terraform, Bash, PowerShell, CoreUtils, and Linux documentation |

## Folder Structure

```
docs-as-code/
├── docs/
│   ├── intro.md
│   ├── scripts-and-source/         # Custom scripts and source code
│   │   ├── overview.md
│   │   ├── bash/
│   │   ├── powershell/
│   │   ├── terraform/
│   │   └── python/
│   ├── post-mortems/               # Lessons learned
│   │   ├── template.md             # Blank post-mortem template
│   │   └── example-incident.md    # Filled-out example
│   └── useful-links/               # Curated reference links
│       ├── cloud-reference/        # Azure, AWS, Google Cloud
│       ├── community/              # Community websites
│       └── tools-docs/             # Terraform, Bash, PowerShell, CoreUtils, Linux
├── src/
│   ├── css/custom.css
│   └── pages/index.js             # Homepage
├── static/img/
├── docusaurus.config.js
├── sidebars.js
└── package.json
```

## Getting Started

```bash
# Install dependencies
npm install

# Start the local development server
npm start

# Build the static site
npm run build
```

## Contributing

- Add scripts in `docs/scripts-and-source/<language>/` with an accompanying `.md` file.
- File post-mortems in `docs/post-mortems/` using the `template.md` as a starting point.
- Add or update links in the relevant `docs/useful-links/` sub-folder.