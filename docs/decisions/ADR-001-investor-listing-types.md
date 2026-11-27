# ADR-001: Investor listing TypeScript types (PREIshare)

- **Status:** Accepted
- **Date:** 2026-11-27
- **Related code:** `src/types/index.ts`

## Context

The shared listing model is defined in `src/types/`. This ADR records the
current checked-in TypeScript shapes; it does not assert that they are fully
aligned with the domain brief or field inventory.

## Decision

Use `InvestorListing` as the listing type and export it, its supporting types,
and its status-specific aliases from `src/types/index.ts`.

## Type choices mapped to the implementation

| Model concern | Checked-in type shape |
| --- | --- |
| Listing status | `ListingStatus` is the string union `"draft" \| "active" \| "under_contract" \| "closed" \| "archived"`; it is not an unrestricted `string`. |
| Property type | `PropertyType` is the string union `"single_family" \| "multi_family" \| "commercial" \| "land"`; it is not an unrestricted `string`. |
| Common listing fields | Every `InvestorListing` branch has `id: string`, `title: string`, `summary: string`, `propertyType: PropertyType`, `address: Address`, `contacts`, `primaryContactId: string`, `ownership: Ownership`, `askingPrice: number`, and `createdAt`/`updatedAt: string`. `id`, `createdAt`, and `updatedAt` are `readonly`. |
| Address | `Address` is a nested object with required `street`, `city`, `region`, `postalCode`, and `country` string fields. |
| Financial summary | `FinancialSummary` has required numeric `noi`, `capRate`, `occupancyRate`, and `askingPrice` fields. The listing's `financials` property is optional only for `draft` and `archived`; it is required for the other statuses. |
| Investor contact | `InvestorContact` has required `id`, `fullName`, `role`, and `email` string fields, plus optional `phone: string`. `contacts` is an `InvestorContact[]` for `draft` and `archived`; it is a non-empty tuple `[InvestorContact, ...InvestorContact[]]` for `active`, `under_contract`, and `closed`. |
| Ownership | `ownership` is one `Ownership` object, not an array. It has required `ownerName: string` and optional `notes: string` and `ownershipPercent: number`. |
| Status-specific listing shape | `draft` and `archived` use `InvestorListingBase` fields, allow optional `financials` and an empty contacts array, and have `closedAt?: never`. `active` and `under_contract` require `financials` and a non-empty contacts tuple, and have `closedAt?: never`. `closed` requires those same complete fields and `closedAt: string`. |
| Status aliases | `ClosedInvestorListing` extracts the `closed` branch; `OpenInvestorListing` excludes it. |

The closed string unions catch misspellings and competing spellings at
compile-time in typed code. For example, `"under-contract"` cannot be passed
where `ListingStatus` requires `"under_contract"`, reducing the risk that a
listing is missed by status filters or workflow handling. The unions do not
validate untrusted runtime data.

`title`, `summary`, `primaryContactId`, `askingPrice`, and the other common
fields are required by the TypeScript shape, but their string or numeric types
do not enforce non-empty text, valid date formats, or business-level ranges.
Only `id`, `createdAt`, and `updatedAt` are readonly; the array containers and
other properties are not marked readonly.

The current model differs from the domain brief and field inventory in names
and allowed values—for example `summary` vs `description`, `street` vs
`line1`, and the status and property-type unions. This ADR records the types as
implemented; those domain differences need separate resolution.

## Consequences

- Status and property-type values outside the listed unions are rejected by
  TypeScript.
- The valid samples in `src/fixtures/sample-investor-listings.ts` can be
  checked with the root `npm run typecheck` script.
- `InvestorListing` status branches enforce when `financials`, non-empty
  contacts, and `closedAt` are required.

## Alternatives considered

- **Loose `any` or untyped JSON:** Rejected for the shared listing model because
  missing required fields and misspelled values would not be caught when code
  constructs or consumes listings.
- **One flat interface with optional fields:** Rejected because making every
  status-dependent field optional would allow incomplete combinations, such as
  an `active` listing without `financials` or a `closed` listing without
  `closedAt`.
- **TypeScript enums:** Not used for these vocabularies. String unions provide
  the closed sets already implemented while keeping values as ordinary string
  literals in listing data.
- **Runtime schema libraries:** Deferred. This topic defines compile-time
  TypeScript shapes; runtime validation at API or other untrusted-data
  boundaries remains separate work.

## Out of scope

The following work is deliberately deferred from this types topic:

- Runtime validation libraries and request-boundary validation
- Database schema design, migrations, and database row types
- API route handlers and request/response contracts
- UI listing forms and client-side validation
- Authentication, authorization, and multi-tenant access rules

## Follow-ups

For the next sprint topic, implementers should:

1. Import the shared types from `src/types/index.ts`.
2. Use `src/fixtures/sample-investor-listings.ts` as the valid fixture reference
   when constructing or updating listing data.
3. Use `docs/type-safety/verification-checklist.md` to verify type changes
   before review.

## Evidence

- Type exports: `src/types/index.ts`
- Listing branches and aliases: `src/types/investor-listing.ts`
- Supporting types: `src/types/listing-status.ts`, `src/types/property-type.ts`,
  `src/types/address.ts`, `src/types/financial-summary.ts`,
  `src/types/investor-contact.ts`, and `src/types/ownership.ts`
- Valid samples: `src/fixtures/sample-investor-listings.ts`
