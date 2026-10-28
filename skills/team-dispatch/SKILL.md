---
name: team-dispatch
description: Create a scoped, evidence-based task dispatch and follow its verified status without manual copy/paste loops.
---

# Team Dispatch

## Use when

- A task needs a separate agent, a durable Runner, or an explicit cross-tool handoff.
- A blocker needs a second opinion with new evidence.

## Workflow

1. Classify the task and choose one owner; keep collaborators limited to clear dependencies.
2. Write a task-ID-bound dispatch with objective, scope, protected boundaries, acceptance checks, and evidence location.
3. Use only a registered Runner for durable/background execution. Otherwise use a directly verifiable local tool and state that limitation.
4. Follow the task's status record and inspect the produced evidence before accepting delivery.
5. On same-cause failure twice, stop the failing approach, capture evidence, and route one focused review or narrower alternative.

## Boundaries

- Do not invent a Runner, claim background execution, or infer success from a generated answer.
- Do not let multiple tools edit the same file concurrently.
- Do not start all paid tools for routine work or bypass data/security checks to keep a dispatch moving.
