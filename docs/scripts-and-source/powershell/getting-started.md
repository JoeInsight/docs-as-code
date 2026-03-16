---
id: getting-started
title: PowerShell 
sidebar_position: 1
---

# PowerShell Scripts

Custom PowerShell scripts for Windows and cross-platform automation.

## Prerequisites

- PowerShell 7+ (cross-platform) or Windows PowerShell 5.1
- Execution policy: `Set-ExecutionPolicy RemoteSigned -Scope CurrentUser`

## Usage Guidelines

```powershell
# Check your PowerShell version
$PSVersionTable.PSVersion

# Run a script
.\scripts\My-Script.ps1 -Verbose
```

## Script Conventions

```powershell
<#
.SYNOPSIS
    Brief one-line description.

.DESCRIPTION
    Detailed description of what the script does.

.PARAMETER ParameterName
    Description of the parameter.

.EXAMPLE
    .\My-Script.ps1 -ParameterName value

.NOTES
    Author  : Your Name
    Date    : YYYY-MM-DD
    Version : 1.0.0
#>
[CmdletBinding()]
param()
```

## Available Scripts

> Add entries here as scripts are added to the repository.

| Script | Description |
|--------|-------------|
| _(none yet)_ | — |
