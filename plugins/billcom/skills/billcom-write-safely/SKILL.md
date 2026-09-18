---
name: billcom-write-safely
description: Use this when any Bill.com action would write data or move money — create/update bills or invoices, pay or void payments, send invoices, charge customers, or change bank/user records. CRITICAL safety skill.
---

# Write safely (CRITICAL)

Bill.com AP/AR can move money and change financial records. Treat every write as high risk.

## Mandatory rules

1. **Always require explicit user confirmation** before any write, including:
   - Creating or updating vendors, customers, bills, invoices, credits
   - Paying, canceling, or voiding payments
   - Sending invoices or charging customers
   - Approving/denying bills
   - Creating/deleting bank accounts or users
2. Show a clear preview (who/what, amounts, dates, tool name, auth type in use).
3. Wait for an unambiguous yes for **this** action.
4. If the operation needs `full_access` and the session is `sync_token`, stop and explain — do not pretend it succeeded.
5. Prefer isolated sessions for payment and charge flows.
6. Verify LLM-paraphrased amounts against tool payloads or the Bill.com UI before the user confirms.
7. If confirmation is unclear, partial, or stale, do not write; ask again.

## After a write

- Report exactly what succeeded or failed (ids, amounts).
- For money-moving actions, suggest the user verify in Bill.com.
