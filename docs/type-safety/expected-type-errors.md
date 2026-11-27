
# Expected type errors for invalid investor listings

| id | business problem | rule that should catch it | expected TS kind |
| --- | --- | --- | --- |
| `invalidStatusSpelling` | Status typo would break filters. | `ListingStatus` string union | Invalid string literal |
| `missingAddressCity` | City is required for display and maps. | `Address.city` is required. | Missing property |
| `priceAsString` | Money must be numeric for math. | `FinancialSummary.askingPrice: number` | Type not assignable |
| `missingFinancialAskingPrice` | Financial summaries must include an asking price. | `FinancialSummary.askingPrice` is required. | Missing property |
| `missingActiveFinancials` | Active listings need an investor-facing financial summary. | Active listings require `financials`. | Missing property |
| `activeListingWithoutContacts` | Active listings need a reachable investor contact. | Active listings require a non-empty contacts tuple. | Non-empty tuple required |

Notes:

- `src/fixtures/invalid-listings.errors.ts` intentionally fails typechecking with
  the errors listed above. Its other fields should remain valid so each reported
  error demonstrates the named rule.
- Do not "fix" the intentional errors; update this table if you add or remove
  cases.
- Happy-path samples live in `src/fixtures/sample-investor-listings.ts` and must
  stay valid.
