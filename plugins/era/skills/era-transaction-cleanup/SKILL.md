---
name: era-transaction-cleanup
description: Use this when the user wants to find messy Era transactions, fix merchants/categories/tags, link transfers, or turn cleanup into automation rules.
---

# Transaction cleanup

Fix noisy spending data, then prove the analysis changed.

## Workflow

1. Discover: `transactions__search_transactions` / `transactions__list_transactions`, plus `transactions__list_spending_categories` and `transactions__list_recurring_charges` as needed.
2. Show a short list of candidates (merchant, amount, date, current category/tags) before editing.
3. On explicit confirmation, update with `transactions__update_transactions` and/or tag/category tools. Prefer selected transaction IDs — never blanket-edit “everything.”
4. Link internal transfers with `transactions__manage_transfer_links` when duplicates inflate cash flow; confirm uncertain matches.
5. Optionally turn repeat fixes into `transactions__manage_automation_rules` / tags — preview impact, then confirm.
6. Re-run `insights__analyze_spending` or `insights__compare_spending_periods` to show the before/after.

## Rules

- All writes go through **era-write-safely**.
- Destructive category/rule/tag management needs a clear preview and a fresh yes.
- CSV import (`transactions__import_csv_transactions`) only after the user names the file intent and confirms.
