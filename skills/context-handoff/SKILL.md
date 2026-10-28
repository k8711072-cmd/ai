---
name: context-handoff
description: Preserve task state across agents, sessions, compaction, or interruptions without copying full chat history.
---

# Context Handoff

## Use when

- Work moves between agents or sessions.
- A long task may be interrupted or context is being compacted.
- A durable task state needs to be restored.

## Steps

1. Read the task's entry rules and current state record.
2. Identify the single task owner and, if applicable, the registered Runner that owns durable status.
3. Update the existing handoff location rather than creating competing status sources.
4. Include only the objective, scope, protected boundaries, completed delta, modified files, verification, unresolved risk, blocker, and next step.
5. Resume from recorded evidence; do not infer completion from an assistant message alone.

Skip for short answers and tasks that do not cross a session or tool boundary.
