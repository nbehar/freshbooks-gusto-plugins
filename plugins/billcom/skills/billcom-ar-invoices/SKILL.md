---
name: billcom-ar-invoices
description: Use this when the user works with Bill.com AR customers, invoices, recurring invoices, credit memos, or receivable payments / customer charges.
---

# AR invoices and customers

Accounts Receivable via Bill.com: customers, invoices, credits, and collections.

## Customers

1. List/get before create to avoid duplicates.
2. Bank accounts and charge-authorization changes typically need `full_access`.
3. Confirm before create/update/archive (**billcom-write-safely**).

## Invoices

1. List/filter by customer, status, or due date before creating.
2. Creating/updating invoices: confirm customer, line items, amounts, and due dates.
3. **Sending** an invoice usually requires `full_access` and explicit confirmation (customer-facing).
4. Recurring invoices: show cadence and amounts before write.

## Credit memos & receivable payments

1. Credit memos: confirm customer and amounts; archive/restore when available.
2. Charging a customer / recording receivable payments: `full_access` + mandatory confirmation; preview amount and customer first.
3. Prefer read-only reporting with `sync_token` unless the user explicitly needs send/charge.
