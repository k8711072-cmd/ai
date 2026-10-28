---
name: spreadsheet-data-safety
description: Safely inspect or modify spreadsheets, scripts, imports, exports, and traceability data.
---

# Spreadsheet Data Safety

## Workflow

1. Read the local data dictionary and script contract relevant to the task.
2. Resolve columns by header names, not fixed positions; fail clearly when required fields are missing.
3. Preserve identifiers as text, including leading zeros; normalize dates explicitly.
4. Prefer append for new records. Updates require a stable, documented key.
5. Protect history, formulas, audit logs, and source files from overwrite or deletion.
6. Preview the exact target rows and changes before any bulk write.
7. Validate required fields, duplicate keys, row counts, representative values, and downstream consumers.

## Output

Use a documented encoding and stable column order for exports. Report the source, scope, validation performed, and any records requiring human review. Never write credentials or raw private records into logs or handoffs.
