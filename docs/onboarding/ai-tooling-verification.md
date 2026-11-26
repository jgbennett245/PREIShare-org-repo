# AI tooling verification — PREIshare onboarding

**Date:** 2026-11-26
**Learner:** John Bennett  
**Tool under test:** Copilot SDK in VS Code
**Context loaded:** `.cursor/rules/preishare.mdc`, `AGENTS.md`, `docs/onboarding/repo-map.md`

Answers below are from this current verification; they are not reconstructed historical transcripts.

## Environment check

- [x] Repo root opened in the tool (not a parent or unrelated folder)
- [x] Rules / project memory files visible to the agent
- [x] Answers compared against `docs/onboarding/repo-map.md` (human source of truth for paths)

## Smoke tests

| ID | Question theme | Result (pass / fail / vague) | Evidence (agent claim vs repo-map or rules) | Re-test after fix |
|----|----------------|------------------------------|---------------------------------------------|-------------------|
| ST1 | Where routes / UI entry / apps vs packages live | pass | Answer: Single-package app rooted at repo root; routes are in `src/routes/`, with `/` and `/about`, and the shared shell in `__root.tsx`. Repo-map confirms this and says there is no workspace; it flags the rule's “monorepo” wording as a mismatch. | N/A — no rule edits |
| ST2 | What must not be committed; secret handling | pass | Answer: Never commit `.env`, API keys, tokens, or connection strings; never print secrets; document variable names only. This matches the rules. | Re-checked; no rule edits |
| ST3 | How to scope a tiny first change | pass | Answer: Choose one small docs/ or README change, keep the diff focused, and avoid unrelated refactors or shared config. This matches the rules and repo-map's safe first-touch guidance. | N/A — no rule edits |
| ST4 | Stack names and where their config lives | pass | Answer: TypeScript, React, TanStack Start, Vite, and Tailwind; root `package.json`, `vite.config.ts`, `tsconfig.json`, and `tsr.config.json` hold the relevant config. Repo-map confirms these and says no database config was found, despite the rule naming Supabase/PostgreSQL/pgvector. | N/A — no rule edits |

### ST1 — Structure (notes)

- Prompt summary: Identify the app/package layout, routes, and UI entry.
- Agent answer (short): The app is rooted at the repository root; it is a single package. Routes are in `src/routes/` and the shared shell is in `src/routes/__root.tsx`.
- Expected (from repo-map): Root `package.json`, no workspaces; `/` and `/about` are under `src/routes/`; `__root.tsx` provides the shared shell. The map flags the rules' “monorepo” wording as inconsistent with the inspected tree.
- Result: pass. The answer gives the verified paths and surfaces the wording mismatch.

### ST2 — Safety (notes)

- Prompt summary: What must not be committed and how secrets must be handled.
- Agent answer (short): Never commit `.env`, API keys, tokens, or connection strings; never print secrets; document variable names only.
- Expected (from rules / AGENTS.md): Never commit `.env`, API keys, tokens, or connection strings; never print secrets into docs, rules, or chat logs. If configuration is needed, document variable names only.
- Result: pass. The answer matches the explicit safety rules.

### ST3 — Scope (notes)

- Prompt summary: Recommend a safe, tiny first change.
- Agent answer (short): Make one small documentation or README change; keep the diff focused and avoid drive-by refactors or shared configuration.
- Expected (small surface, no drive-by refactors): The rules require the smallest diff and prohibit unrelated refactors. The repo-map identifies `docs/onboarding/` and `README.md` as safe first-touch areas and shared configuration as do-not-edit-yet.
- Result: pass.

### ST4 — Stack awareness (notes)

- Prompt summary: Name the stack and locate its configuration.
- Agent answer (short): TypeScript, React, TanStack Start, Vite, and Tailwind; see root `package.json`, `vite.config.ts`, `tsconfig.json`, and `tsr.config.json`. Do not assume Supabase is configured: the repo-map found no database config, although the rules name Supabase/PostgreSQL/pgvector.
- Expected (TypeScript, TanStack Start, React, Supabase, etc. as in repo): The repo-map and root config confirm TypeScript, React, TanStack Start, Vite, and Tailwind, with the listed config files. The map says no database configuration was found and flags the rules' database-stack claim for clarification.
- Result: pass. The answer identifies the checked-in stack and accurately reports the unresolved database-stack mismatch.

## Context gaps fixed

No rule edits were needed. The repo-map already flags the mismatch between the rule's monorepo/database wording and the inspected repository; the current answers call out both discrepancies.

## Re-verification

- Failed IDs re-run: None.
- Final results: ST1 pass; ST2 pass; ST3 pass; ST4 pass.
- Accepted limitations (if any): The repo-map and rules disagree on monorepo and database-stack claims; the answers rely on the inspected repository and flag the mismatch.

## Go

**Decision:** GO for using this AI tooling on the first contribution.

**Rationale (2–4 sentences):** ST1 passed by identifying the repo-root single-package layout and route paths while noting the “monorepo” wording mismatch; ST2 passed by correctly stating the secret-handling rules; ST3 passed by recommending a small documentation change without drive-by refactors; and ST4 passed by locating the stack configuration and flagging the unresolved database-stack mismatch. These results support GO; no rule edits were needed, and the repo-map/rules discrepancies remain explicit limitations rather than assumed facts.

**Signed off by:** John Bennett
