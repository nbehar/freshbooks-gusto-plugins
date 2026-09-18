---
name: freshbooks-invoice-from-estimate
description: Use this when the user wants to turn a FreshBooks estimate into an invoice or send that invoice to a client.
---

# Invoice from estimate

Convert an approved estimate into an invoice safely.

## Workflow

1. Identify the estimate (ID, client, or search).
2. Review line items, totals, and client details with the user.
3. Call `convert_estimate_to_invoice` when the user agrees to convert.
4. Show the resulting invoice draft (number, amount, client).
5. **Confirm with the user before calling `send_invoice`.**

## Rules

- Conversion and send are separate decisions — confirm each.
- Do not email the invoice until the user explicitly says to send it.
