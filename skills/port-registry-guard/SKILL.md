---
name: port-registry-guard
description: Check local service ownership, port conflicts, and registry updates before changing a development service.
---

# Port Registry Guard

## Trigger

Use when starting, stopping, adding, or changing a local web service, API, dashboard, or port assignment.

## Workflow

1. Read the project's single source of truth for local services and ports.
2. Inspect current listeners and identify the owning process before stopping anything.
3. Confirm the requested port is not reserved or assigned to another service.
4. Prefer an isolated port for previews; do not silently take over an occupied service.
5. After a confirmed registry change, update only the registry and verify the service entry point.

Do not duplicate the full port table in multiple rule files. Pure documentation or data analysis that does not affect a service does not trigger this Skill.
