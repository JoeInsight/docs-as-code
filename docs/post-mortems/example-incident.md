---
id: example-incident
title: "Example: Web App Deployment Outage"
sidebar_position: 2
---

# Example Post-Mortem: Web App Deployment Outage

> **Note:** This is a fictional example showing how to fill out the post-mortem template.

---

## Incident Summary

| Field | Value |
|---|---|
| **Incident ID** | INC-0001 |
| **Date / Time** | 2024-03-15 14:30 UTC |
| **Duration** | 45 minutes |
| **Severity** | P2 |
| **Affected Services** | Public web app, API gateway |
| **Incident Commander** | Jane Doe |
| **Author(s)** | Jane Doe, John Smith |

---

## Timeline

| Time (UTC) | Event |
|---|---|
| 14:30 | Deployment pipeline triggered for v2.4.1 |
| 14:35 | Error rate alert fired (>5% 5xx responses) |
| 14:37 | On-call engineer paged |
| 14:42 | Deployment identified as cause |
| 14:50 | Rollback to v2.4.0 initiated |
| 15:15 | Service fully restored |

---

## Root Cause Analysis

A missing environment variable (`DB_CONNECTION_TIMEOUT`) was not added to the production
environment before deploying v2.4.1. The application defaulted to a 0 ms timeout, causing
all database connections to fail immediately.

---

## Impact

- ~2,000 users unable to access the application for 45 minutes.
- No data loss occurred.
- SLA: 99.9% monthly uptime — this incident consumed ~0.03% of the monthly error budget.

---

## Detection

- [x] Monitoring alert (error rate threshold exceeded)

---

## Resolution

1. Identified new environment variable introduced in PR #142.
2. Initiated rollback to v2.4.0 via the deployment pipeline.
3. Added `DB_CONNECTION_TIMEOUT=30000` to the production secrets store.
4. Redeployed v2.4.1 successfully.

---

## Lessons Learned

### What went well?

- Monitoring detected the issue within 5 minutes of deployment.
- Rollback procedure worked without manual intervention.

### What went poorly?

- No pre-deployment checklist to validate environment variables.
- Change log for v2.4.1 did not highlight the new required variable.

### Where were we lucky?

- The incident occurred during low-traffic hours, limiting user impact.

---

## Action Items

| Action | Owner | Due Date | Status |
|---|---|---|---|
| Add env-var validation step to CI pipeline | @jane | 2024-03-22 | Completed |
| Update deployment runbook with env-var checklist | @john | 2024-03-22 | Completed |
| Add changelog linting to PR template | @jane | 2024-03-29 | Open |

---

## References

- [Deployment pipeline run #512](https://example.com)
- [JIRA: INC-0001](https://example.com)
- [Deployment runbook](https://example.com)
