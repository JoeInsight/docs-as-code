---
id: getting-started
title: Terraform 
sidebar_position: 1
---

# Terraform Modules

Reusable Terraform modules and configurations for infrastructure provisioning.

## Prerequisites

- [Terraform](https://developer.hashicorp.com/terraform/downloads) ≥ 1.5
- Cloud provider CLI configured (Azure CLI / AWS CLI / `gcloud`)

## Usage Guidelines

```hcl
# Call a local module
module "example" {
  source = "../../modules/example"

  name   = "my-resource"
  region = "eastus"
}
```

```bash
# Initialise, plan, and apply
terraform init
terraform plan -out=tfplan
terraform apply tfplan
```

## Module Conventions

Each module should contain:

```
modules/<module-name>/
├── main.tf         # Core resources
├── variables.tf    # Input variables
├── outputs.tf      # Output values
└── README.md       # Module documentation
```

## Available Modules

> Add entries here as modules are added to the repository.

| Module | Provider | Description |
|--------|----------|-------------|
| _(none yet)_ | — | — |
