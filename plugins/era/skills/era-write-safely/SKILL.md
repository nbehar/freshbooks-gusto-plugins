---
name: era-write-safely
description: Use this before any Era write, transfer, destructive action, connection change, or billing change. CRITICAL safety skill.
---

# Write safely (CRITICAL)

Era writes can change financial records, disconnect data sources, alter
billing, or move money. A general request to "clean things up" is not approval
for individual writes.

## Mandatory rules

1. Preview the exact action, affected accounts or records, amounts, dates, and
   whether it is destructive or recurring.
2. Obtain an unambiguous confirmation for that specific preview immediately
   before executing it. If the scope or payload changes, confirm again.
3. **Every transfer between the user's own accounts requires its own explicit
   user confirmation.** Never infer transfer approval from a plan, earlier
   approval, standing instruction, or approval of another transfer.
4. Require explicit confirmation before forgetting memory, disconnecting an
   institution, deleting or replacing records or rules, resetting questions,
   or invoking any tool marked destructive.
5. Transaction updates, tags, categories, rules, account visibility, imports,
   connection changes, and remembered facts are writes: show a preview and
   confirm them before execution.
6. Never ask for, receive, store, or pass bank usernames, passwords, MFA codes,
   routing credentials, or other bank login secrets. Open Era's hosted
   connection flow and let the user enter credentials there.

## Billing

- Billing changes require the separate `mcp:billing-write` OAuth scope **and**
  Era's extra-consent flow.
- First read the current plan and preview the exact price and effective date.
- Ask for explicit confirmation only after showing that preview. OAuth scope
  approval alone is not confirmation to change billing.

## After a write

- Read back the affected state when possible.
- Report exactly what succeeded, failed, or remains uncertain.
- Do not retry a money-moving or destructive call after an ambiguous failure
  until its resulting state has been checked.
