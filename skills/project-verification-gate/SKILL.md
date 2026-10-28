---
name: project-verification-gate
description: Verify web, API, UI, or service changes using the project's existing checks and observable evidence.
---

# Project Verification Gate

## Workflow

1. Read the project's service/port registry before starting or stopping a local service.
2. Inspect existing scripts and run the smallest relevant check first.
3. For browser-visible changes, verify the actual entry point, one key interaction, relevant console/network errors, and a representative viewport.
4. For API/data changes, check the contract, error behavior, representative inputs, and regression tests.
5. Record the command, result, evidence location, and remaining risk.

## Boundaries

- Do not change a production contract or source data solely to make a visual test pass.
- If a port is occupied, identify its owner and use an isolated alternative where possible.
- If verification is unavailable, report the exact blocker instead of guessing.
