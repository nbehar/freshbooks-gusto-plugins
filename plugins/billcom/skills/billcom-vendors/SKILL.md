---
name: billcom-vendors
description: Use this when the user wants to list, look up, create, update, archive, or restore Bill.com vendors (AP suppliers).
---

# Bill.com vendors

Work with Accounts Payable vendors via Bill.com AP/AR tools.

## Guidance

1. Prefer **list** / **get** before create or update — confirm the vendor does not already exist.
2. When creating, capture legal name, email, address, and payment details the user provided; do not invent bank details.
3. Archive instead of delete when the API offers archive/restore.
4. Vendor bank account create/delete typically requires `BILL_AUTH_TYPE=full_access`.
5. Before any create/update/archive, follow **billcom-write-safely** (explicit confirmation).

## Typical flow

1. List or search vendors matching the user’s description.
2. Get the specific vendor id for edits.
3. Preview the proposed change; confirm; then write.
