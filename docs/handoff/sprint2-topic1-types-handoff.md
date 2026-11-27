# Sprint 2 Topic 1 — Types Handoff: PREIshare Investor Listings

**Audience:** next sprint topic owners, PREIshare eng, product partners  
**Status:** Topic 1 (TypeScript foundations) complete — implementation topics not started  
**Date:** 2026-11-27

## 1. Client story recap

The client pain was concrete: listings could have missing prices, status strings spelled several ways, or nested address fields that disappeared between screens. Strict `InvestorListing` types make these mistakes fail at compile time in typed code: required price and address fields cannot be omitted, and the status union rejects unrecognized spellings. That protects code as it is written, but does not validate untrusted JSON arriving from an API or database; those boundaries still need runtime validation.

## 2. What we shipped this topic

| Deliverable | Path | Why it matters |
| --- | --- | --- |
| Domain brief + field inventory | `docs/domain/` (from Topic 1 early steps) | Business rules before code |
| Types package (barrel) | `src/types/index.ts` | Single import surface for `InvestorListing` and related types |
| Core + nested + relationship types | `src/types/*.ts` | Interfaces, unions, nested objects, contacts, ownership |
| Valid fixtures | `src/fixtures/sample-investor-listings.ts` | Prove good listings type-check |
| Expected-error notes | `docs/type-safety/expected-type-errors.md` | Records intended negative examples; the referenced `src/fixtures/invalid-listings.errors.ts` file is not currently present |
| Typecheck script + verification checklist | `package.json`, `docs/type-safety/verification-checklist.md` | Repeatable safety gate |
| Decision record | `docs/decisions/ADR-001-investor-listing-types.md` | Stakeholder-facing type decisions |

**How to verify locally:** follow `docs/type-safety/verification-checklist.md` and run `npm run typecheck`. This checks the included sources and valid sample fixture. `tsconfig.json` excludes the path for `src/fixtures/invalid-listings.errors.ts`, but that file is absent, so intentional negative examples are not currently verified by the typecheck gate.

## 3. What we must NOT claim is done yet

- No TanStack Start UI or listing forms are built or wired to these types.
- No Supabase / PostgreSQL tables, migrations, or pgvector work from this model.
- No HTTP API routes, request/response validation at the network boundary, or auth rules.
- No runtime schema library (for example Zod) is required by this topic unless a later topic adds one on purpose.
- No production deployment of listing create/edit flows.

If a demo only shows green typecheck on fixtures, say: **“the data model is typed and verified; product surfaces are next.”**

## 4. Next sprint pickups (use the types — do not reinvent them)

### A. TanStack Start forms (UI)

- Build create/edit listing forms using `InvestorListing`, `ListingStatus`, `PropertyType`, and nested types imported from `src/types/index.ts` for typed form values and submissions.
- Use the fields and union values from those shared types; do not create a second listing interface or copy the status/property-type unions into components.
- Use `src/fixtures/sample-investor-listings.ts` as realistic form defaults / Story-style examples.
- Resolve any product field that does not map to the current types instead of adding it ad hoc to the form's listing shape.
- Acceptance sketch: typed form submissions use the shared listing types, and any runtime validation is handled explicitly rather than assumed from TypeScript.

### B. Supabase / PostgreSQL schema alignment (data)

- Treat the types exported from `src/types/index.ts`—including `InvestorListing`, `Address`, `FinancialSummary`, `InvestorContact`, and `Ownership`—as the application-level listing contract when mapping fields to tables, columns, and relationships.
- Map the current required/optional fields and status/property-type unions to database constraints; document intentional differences such as SQL nullability rather than redefining the listing shape ad hoc.
- Reconcile differences between the checked-in types and the domain brief/field inventory before finalizing persisted field names or allowed values.
- Acceptance sketch: a row that would fail `InvestorListing` assignment is also rejected by DB constraints or insert validation.

### C. API boundaries (server)

- Define list/get/create/update request and response shapes by importing or composing the types from `src/types/index.ts`; do not create a parallel ad hoc listing interface.
- Keep write endpoints aligned with the shared status/property-type unions. Treat incoming JSON as untrusted and validate it at the boundary before using it as a typed listing.
- Add boundary tests using the valid sample fixture and explicit invalid payloads.
- Acceptance sketch: API handlers never widen listing status back to plain `string` without an explicit, documented escape hatch.

```text
Client pain (loose JSON)
        |
        v
 Domain brief + field inventory
        |
        v
 Strict TS types + fixtures + typecheck + ADR-001   <-- you are here
        |
        +--> TanStack Start forms (UI)
        +--> Supabase/PostgreSQL schema (data)
        +--> API routes & validation (boundary)
```

## 5. Prompting and review self-assessment

- **Prompting habit that helped:** I gave the field inventory and domain brief as context alongside the checked-in types, so the review could compare the intended vocabulary with the implementation.
- **Second prompting habit that helped:** I scoped each request to a specific document and named concrete acceptance criteria instead of asking for a broad, open-ended rewrite.
- **Review habit that caught an agent mistake:** I checked status and property-type unions, required fields, nested shapes, and fixture paths against the source files; that caught domain/type mismatches and a referenced invalid fixture that was not present.
- **What I would do differently next topic:** I would verify that every referenced fixture or other deliverable exists before describing it as completed or tested.
- **Confidence (1–5) explaining InvestorListing to a teammate:** 4 — I can explain its checked-in fields and status branches, while noting that its vocabulary still needs reconciliation with the domain brief.

## 6. Handoff checklist for the next owner

- [ ] Read ADR-001 and this handoff before opening a UI or SQL PR
- [ ] Use `src/types/index.ts` as the shared listing-type entrypoint; do not redefine the listing shape ad hoc
- [ ] Keep `npm run typecheck` (or the script name in `package.json`) green on valid fixtures
- [ ] Do not claim intentional invalid fixtures are verified until `src/fixtures/invalid-listings.errors.ts` exists and has a separate documented check
- [ ] Describe Topic 1 as the TypeScript model and fixture work only; the listing feature and database integration are not complete
- [ ] File a new ADR if product changes allowed statuses or required fields