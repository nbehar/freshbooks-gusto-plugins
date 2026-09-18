---
name: billcom-bills-and-payments
description: Use this when the user works with Bill.com AP bills, recurring bills, vendor credits, bill approvals, or AP payments (pay, cancel, void).
---

# Bills and payments (AP)

Handle vendor bills and outbound payments carefully — these can move money.

## Bills

1. List/filter bills (vendor, status, due date) before creating duplicates.
2. Creating or updating a bill is a write — confirm amounts, vendor, due date, and line items first.
3. Recurring bills: show schedule and next amount clearly before create/update.
4. Approvals (approve/deny) usually need `full_access`.

## Payments

1. **Paying, canceling, or voiding** a payment requires `BILL_AUTH_TYPE=full_access` and **mandatory** user confirmation (**billcom-write-safely**).
2. Preview: vendor, bill id(s), amount, payment date, funding account if shown.
3. Sync tokens cannot pay bills — tell the user to switch auth type if they insist on paying via MCP.
4. After a payment write, report tool result verbatim and suggest verifying in Bill.com UI.

## Vendor credits

List/get first; create/update only with confirmation and clear remaining credit amounts.
