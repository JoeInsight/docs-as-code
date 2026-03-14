---
id: overview
title: Scripts & Source Code Overview
sidebar_position: 1
---

# Scripts & Source Code

This section contains custom scripts and source code used across infrastructure, automation, and tooling tasks.
All scripts are versioned alongside this documentation so that changes and context are always co-located.

## Folder Structure

```
docs/scripts-and-source/
├── bash/          # Shell scripts for Linux/macOS automation
├── powershell/    # PowerShell scripts for Windows and cross-platform automation
├── terraform/     # Terraform modules and configurations
└── python/        # Python utility scripts
```

## Contributing

1. Add your script to the appropriate sub-folder.
2. Create or update the corresponding `.md` file with:
   - **Purpose** — what the script does.
   - **Prerequisites** — required tools, permissions, or environment variables.
   - **Usage** — example commands.
   - **Notes** — known limitations or edge cases.
3. Submit a pull request against `main`.

## Conventions

- Script filenames use `kebab-case` (e.g., `deploy-app.sh`).
- Every script must have a comment block at the top describing its purpose.
- Secrets and credentials must **never** be hard-coded; use environment variables or a secrets manager.
