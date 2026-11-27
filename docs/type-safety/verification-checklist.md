# Investor listing types — verification checklist

## Model and domain

- [ ] Check `InvestorListing` fields against `src/types/investor-listing.ts`: `id`, `title`, `summary`, `status`, `propertyType`, `address`, `financials`, `contacts`, `primaryContactId`, `ownership`, `askingPrice`, `createdAt`, and `updatedAt`; `closedAt` is required only for `closed`.
- [ ] Check nested fields against `src/types/address.ts` (`street`, `city`, `region`, `postalCode`, `country`), `src/types/financial-summary.ts` (`noi`, `capRate`, `occupancyRate`, `askingPrice`), `src/types/investor-contact.ts` (`id`, `fullName`, `role`, `email`, optional `phone`), and `src/types/ownership.ts` (`ownerName`, optional `notes` and `ownershipPercent`).
- [ ] Confirm the closed status set in `src/types/listing-status.ts`: `draft`, `active`, `under_contract`, `closed`, `archived`.
- [ ] Confirm the closed property type set in `src/types/property-type.ts`: `single_family`, `multi_family`, `commercial`, `land`.
- [ ] Compare the checked-in types with `docs/domain/investor-listing-domain-brief.md` and `docs/domain/listing-field-inventory.md`; resolve or record differences before sign-off. The current names and values differ (including `summary`/`description`, `street`/`line1`, and the status and property-type sets).
- [ ] Confirm public types are exported from `src/types/index.ts`.

## Fixtures

- [ ] Check `src/fixtures/sample-investor-listings.ts`: `sampleActiveListing`, `sampleDraftListing`, `sampleUnderContractListing`, `sampleClosedListing`, and `sampleInvestorListings` use the checked-in types and statuses.
- [ ] If `src/fixtures/invalid-listings.errors.ts` is present, confirm its intentional examples match `docs/type-safety/expected-type-errors.md` and keep it outside the normal typecheck.
- [ ] Confirm `tsconfig.json` excludes `src/fixtures/invalid-listings.errors.ts` from the `src/**/*.ts` include pattern.

## Typecheck and sign-off

- [ ] Confirm the root `package.json` script runs `tsc --noEmit` as `npm run typecheck`.
- [ ] Run `npm run typecheck` from the repository root; it exits successfully for valid sources and emits no JavaScript.
- [ ] Confirm `src/types/README.md` documents how to run typecheck and what success means.
- [ ] Re-run typecheck after the final change and record the result before review.
