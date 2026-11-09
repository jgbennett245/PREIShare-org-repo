# PREIshare repository map

> Onboarding map for first contribution planning. Built with AI-assisted
> inventory + human path verification. Do not treat this as architecture law
> if the real tree disagrees—update this file when you learn more.

## Meta

- Clone path (from setup-log): `~/git/PREIShare-org-repo/docs/onboarding`
- Date mapped: `2026-11-08`
- Agent tool used: `PAUL`
- Mapper: `jgbennett245@gmail.com`

## 1. Overview (5–8 sentences)

PREIshare appears to be organized as: `<monorepo | single package | unclear>`.
In plain language, the product code seems to live mainly in `<paths>`.
Shared libraries or packages appear in `<paths or "none found">`.
Docs and onboarding notes live in `docs/` (including this file).
I am intentionally not editing application code while building this map.

## 2. Top-level inventory

| Path | Kind (app / package / config / docs / other) | One-sentence purpose | Verified by me? (yes/no) |
|------|-----------------------------------------------|----------------------|---------------------------|
| `<e.g. apps/>` | | | yes |
| `<e.g. packages/>` | | | yes |
| `<e.g. .github/>` | | | yes |
| `docs/` | docs | Onboarding and project documentation | yes |
| `package.json` | config | Root package manifest / scripts | yes |

<!-- Add every top-level name you actually see. Delete example rows you do not have. -->

## 3. Frontend concerns (TypeScript, React, TanStack Start)

- Likely app root(s): `<path>`
- Clues I used (file names, frameworks mentioned in package.json): `<...>`
- Entry / routes / UI areas worth knowing: `<paths>`
- How this area relates to user-facing screens: `<plain language>`

## 4. Backend / data concerns (Supabase, PostgreSQL, pgvector, APIs)

- Supabase or data config paths: `<paths or "not found yet">`
- Migrations / SQL / schema-related paths: `<paths or "not found yet">`
- Env examples (NOT secret values): `<e.g. .env.example>`
- Notes on what a beginner should not touch in production data: `<...>`

## 5. Tooling and CI

- TypeScript / lint / format config: `<paths>`
- CI workflows (e.g. GitHub Actions): `<paths>`
- Editor or agent config already present: `<paths or none>`
- Scripts from package manifests that look like dev/build/test: `<script names only>`

## 6. Safe first-touch vs do-not-edit-yet

### Safe first-touch (good candidates for a tiny onboarding PR)

| Path or area | Why it is relatively safe | Risk if handled carelessly |
|--------------|---------------------------|----------------------------|
| `docs/onboarding/` | Docs-only; helps the team | Misleading docs |
| `<e.g. CONTRIBUTORS or similar if present>` | Low runtime impact | Wrong links / formatting |
| `<other verified low-risk path>` | | |

### Do not edit yet (wait until you have tests, review, and a real task)

| Path or area | Why wait | What could break |
|--------------|----------|------------------|
| CI under `.github/` or equivalent | Shared pipeline | Everyone’s builds |
| Root workspace / package manager lockfiles | Dependency graph | Install failures for all |
| Supabase / migrations / production env | Data and secrets | Data loss or leaked secrets |
| Shared packages used by multiple apps | Wide blast radius | Multiple features regress |
| Auth, payments, or vector/search core (if present) | High complexity | Security or relevance bugs |

## 7. Open questions for the team

- `<Something the agent could not verify>`
- `<Where official app entry is if multiple apps exist>`
- `<Which package is the source of truth for shared UI or types>`

## 8. How I will use this map next

- Configure AI project rules/memory using the paths above (next tooling steps).
- Pick a first contribution only from **Safe first-touch** unless a mentor expands scope.
- Revisit and edit this file when a path claim is proven wrong.