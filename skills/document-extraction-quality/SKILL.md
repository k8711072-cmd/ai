---
name: document-extraction-quality
description: Continue or validate a document extraction workflow involving PDFs, OCR, structured records, and human review.
---

# Document Extraction Quality

## Workflow

1. Read the workflow specification and inspect current status using read-only operations.
2. Separate text-layer extraction, OCR, model-assisted extraction, normalization, and record assembly into observable stages.
3. Preserve the source document. Store generated artifacts separately and retain source identifiers.
4. Treat low-confidence, unsupported, or conflicting fields as requiring review; do not guess identifiers, measurements, or dates.
5. Before reprocessing or bulk updates, preview the affected records and retain a recoverable checkpoint.
6. Validate status counts, record counts, required fields, identifier formats, and representative source-to-output mappings.
7. Report unresolved records and evidence; never claim a record is correct solely because extraction completed.

## Secrets and data

Use environment-managed credentials only when explicitly required. Never print credentials, private source documents, or customer-identifying details into logs, prompts, or public artifacts.
