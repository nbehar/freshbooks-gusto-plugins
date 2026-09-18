---
name: freshbooks-overdue-invoices
description: Use this when the user wants to find overdue FreshBooks invoices, review aging, or send payment reminders.
---

# Overdue invoices

Help the user identify and act on overdue FreshBooks invoices.

## Workflow

1. Call `get_overdue_invoices` (or related invoice/list/aging tools) to gather overdue items.
2. Summarize: client, invoice number, amount, due date, days overdue.
3. Propose next steps (reminders, notes, follow-ups).
4. **Confirm with the user before sending any reminders or changing invoice status.**

## Rules

- Never send emails or reminders without explicit user confirmation.
- Prefer a clear table or bullet list before asking for action.
