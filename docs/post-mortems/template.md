---
id: template
title: Post-Mortem Template
sidebar_position: 1
---

# Post-Mortem Template

Use this template for all post-mortems. Copy this file, rename it to reflect the incident
(e.g., `2024-03-15-database-outage.md`), and fill in each section.

---

## Incident Summary

| Field | Value |
|---|---|
| **Incident ID** | INC-XXXX |
| **Date / Time** | YYYY-MM-DD HH:MM UTC |
| **Duration** | X hours Y minutes |
| **Severity** | P1 / P2 / P3 / P4 |
| **Affected Services** | Service A, Service B |
| **Incident Commander** | Name |
| **Author(s)** | Name(s) |

---

## Timeline

| Time (UTC) | Event |
|---|---|
| HH:MM | Monitoring alert fired |
| HH:MM | On-call engineer paged |
| HH:MM | Issue identified |
| HH:MM | Mitigation applied |
| HH:MM | Service restored |
| HH:MM | All-clear declared |

---

## Root Cause Analysis

Describe the root cause(s) of the incident clearly and concisely.
Focus on **technical** causes, not people.

---

## Impact

- Number of users affected:
- Revenue / SLA impact:
- Data loss (if any):

---

## Detection

How was the incident detected?
- [ ] Monitoring alert
- [ ] Customer report
- [ ] Internal discovery
- [ ] Other: ___

---

## Resolution

Steps taken to resolve the incident:

1. Step one
2. Step two
3. Step three

---

## Lessons Learned

### What went well?

- 

### What went poorly?

- 

### Where were we lucky?

- 

---

## Action Items

| Action | Owner | Due Date | Status |
|---|---|---|---|
| Fix monitoring gap | @person | YYYY-MM-DD | Open |
| Update runbook | @person | YYYY-MM-DD | Open |

---

## References

- Link to monitoring dashboard
- Link to ticket / JIRA issue
- Link to relevant runbook
