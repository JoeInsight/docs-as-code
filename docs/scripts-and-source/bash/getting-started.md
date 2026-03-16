---
id: getting-started
title: Bash 
sidebar_position: 1
---

# Bash Scripts

Custom shell scripts for Linux and macOS automation tasks.

## Prerequisites

- A POSIX-compatible shell (`bash` ≥ 4.0 recommended)
- Execution permissions: `chmod +x <script>.sh`

## Usage Guidelines

```bash
# Make a script executable
chmod +x scripts/my-script.sh

# Run a script
./scripts/my-script.sh --help
```

## Script Conventions

```bash
#!/usr/bin/env bash
# =============================================================================
# Script Name : example.sh
# Description : Brief description of what this script does.
# Author      : Your Name
# Date        : YYYY-MM-DD
# Version     : 1.0.0
# Usage       : ./example.sh [OPTIONS]
# =============================================================================
set -euo pipefail
```

## Available Scripts

> Add entries here as scripts are added to the repository.

| Script | Description |
|--------|-------------|
| _(none yet)_ | — |
