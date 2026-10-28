---
name: ai-team-rule-router
description: Route AI-team, agent-rule, model-tier, capability, or handoff questions through the project's shared operating model.
---

# AI Team Rule Router

## Workflow

1. Read the repository entry rules first, then only the relevant shared source of truth.
2. Classify the task as L0-L4 using `docs/ai-team-operating-model.md`.
3. Select one dynamic owner and the smallest sufficient tool set.
4. For model routing, use abstract cost tiers and verify actual availability; never infer access from a model name.
5. For high-risk or explicitly requested team review, use independent evidence, one focused cross-challenge, and a falsifiable test. Do not use agreement or vote count as evidence.
6. Handoff only the task objective, owner, scope, protected boundaries, delta, verification, unresolved risk, and next step.

## Guardrails

- Do not trigger the full team for routine questions or small changes.
- Do not let this Skill change the project's state authority or bypass data/security gates.
- On repeated same-cause failure, stop retrying and change the evidence or approach.
- Do not save secrets or private project details in generated summaries.
