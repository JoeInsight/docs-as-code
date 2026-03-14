# docs-as-code

A living knowledge base built with [Docusaurus v3](https://docusaurus.io/) and maintained as code alongside the infrastructure and scripts it documents. Served locally via Docker with Caddy (production) or the Docusaurus dev server (development with live reload).

## Sections

| Section | Description |
|---|---|
| **Scripts & Source Code** | Custom Bash, PowerShell, Terraform, and Python scripts |
| **Post-Mortems** | Incident reviews and lessons learned |
| **Library – Cloud Reference** | Azure, AWS, and Google Cloud reference architecture links |
| **Library – Community** | DevOps and cloud community sites, forums, and newsletters |
| **Library – Tools Docs** | Terraform, Bash, PowerShell, CoreUtils, and Linux documentation |
| **Library – GitHub** | Useful GitHub repos to follow |

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
│   │   ├── template.md
│   │   └── example-incident.md
│   └── library/                    # Curated reference links
│       ├── cloud-reference/        # Azure, AWS, Google Cloud
│       ├── community/              # Community websites
│       ├── script docs/            # Terraform, Bash, PowerShell, CoreUtils, Linux
│       └── github/                 # Useful GitHub repos
├── src/
│   ├── css/custom.css
│   └── pages/index.js              # Homepage
├── static/img/
├── caddyfile                        # Caddy web server config
├── dockerfile                       # Multi-stage production build
├── docker-compose.yaml              # Dev + prod Docker services
├── docusaurus.config.js
├── sidebars.js                      # Auto-generated from folder structure
└── package.json
```

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose
- (Optional) [Node.js](https://nodejs.org/) 18+ for running without Docker

### Development — live reload (recommended for writing)

```bash
docker compose up docs-dev
```

Open [http://localhost:3000](http://localhost:3000). Any file changes are reflected immediately.

### Production — static build served by Caddy

```bash
docker compose up docs-prod
```

Open [http://localhost:8080](http://localhost:8080).

### Without Docker

```bash
npm install
npm start
```

### Production build only

```bash
npm run build
```

Output goes to `build/`.

## Adding Content

Sidebars are **auto-generated** from the folder structure. No config edits are needed — just add files and folders.

- **New script docs** → add a `.md` file under `docs/scripts-and-source/<language>/`
- **New post-mortem** → copy `docs/post-mortems/template.md` into a new file in the same folder
- **New reference links** → add a `.md` file under the relevant `docs/library/` sub-folder
- **New category** → create a folder with a `_category_.json` file:

```json
{
  "label": "My New Category",
  "position": 5,
  "link": {
    "type": "generated-index",
    "description": "Description of this category."
  }
}
```

## Docker Details

| Service | Purpose | Port | Command |
|---|---|---|---|
| `docs-dev` | Dev server with live reload | 3000 | `docker compose up docs-dev` |
| `docs-prod` | Production build with Caddy | 8080 | `docker compose up docs-prod` |

To rebuild the production image after changes:

```bash
docker compose build docs-prod
docker compose up docs-prod
```