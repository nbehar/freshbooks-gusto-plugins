---
name: era-transaction-cleanup
description: Use this when the user wants to find, categorize, tag, or clean up Era transactions or create automation rules.
---

# Transaction cleanup

Search broadly, change narrowly, and verify every approved write.

## Workflow

1. Clarify the date range, accounts, merchant text, categories, and intended
   outcome.
2. Search or list matching transactions read-only. Present the candidate
   transaction IDs with dates, merchants, amounts, current categories, and
   tags; call out uncertain matches and possible transfers.
3. Propose a bounded batch of exact updates. Do not silently include additional
   search results.
4. If a recurring cleanup rule would help, describe its match conditions,
   action, and likely future impact separately from the one-time edits.
5. Follow **era-write-safely**: preview and obtain explicit confirmation before
   updating transactions, managing tags or categories, importing data, or
   creating, changing, or deleting automation rules.
6. Re-query the changed records and rerun relevant analysis to verify the
   result.

## Rules

- Never guess a category, duplicate status, or transfer match when evidence is
  ambiguous; ask the user.
- Treat rule changes as higher impact because they affect future data.
- A confirmed transaction batch does not also authorize a rule, and a
  confirmed rule does not authorize additional transaction edits.
- Show partial successes precisely and do not retry ambiguous destructive calls
  without checking current state.
