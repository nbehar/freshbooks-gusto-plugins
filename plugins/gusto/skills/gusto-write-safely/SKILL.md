---
name: gusto-write-safely
description: Use this when any Gusto action would write data — run payroll, onboard, log time, move money, or change people records. CRITICAL safety skill.
---

# Write safely (CRITICAL)

Gusto can move money and change employment records. Treat every write as high risk.

## Mandatory rules

1. **Always require explicit user confirmation** before any write, including:
   - Running or submitting payroll
   - Onboarding or terminating people
   - Logging or approving time
   - Creating or sending contractor payments
   - Any other action that moves money or changes HR state
2. Show a clear preview of what will change (who, amounts, dates, action name).
3. Wait for an unambiguous yes from the user for **this** action.
4. Prefer **isolated sessions** for payroll and money moves so context from other chats does not bleed in.
5. **Verify LLM output** against the Gusto UI or returned tool payloads before the user confirms — do not trust paraphrased numbers alone.
6. If confirmation is unclear, partial, or stale, do not write; ask again.

## After a write

- Report exactly what succeeded or failed.
- Suggest the user verify in Gusto for money-moving actions.
