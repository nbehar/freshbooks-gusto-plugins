---
name: freshbooks-expense-log
description: Use this when the user wants to log a FreshBooks expense or pick the right expense category before creating one.
---

# Expense log

Create FreshBooks expenses with the correct category.

## Workflow

1. Call `list_expense_categories` (or equivalent) so the user can choose a category.
2. Collect amount, date, vendor/merchant, notes, and category from the user.
3. Confirm the draft with the user.
4. Call `create_expense` only after confirmation.

## Rules

- Prefer listing categories first rather than guessing.
- Confirm amount and category before creating the expense.
