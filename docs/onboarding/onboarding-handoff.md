# PREIshare onboarding handoff

**Author:** John Bennett
**Date:** 2026-11-26
**Branch / PR:** `docs/first-contribution-jgbennett245` / [#25](https://github.com/EdTechForLearning/PREIShare-org-repo/pull/25)
**Audience:** mentor, future self, sprint lead

## 1. Stakeholder summary (plain language)

This onboarding work documents the initial fork/clone setup, a four-part AI-tooling smoke test, and a small documentation contribution. PR #25 adds a contributor entry and supporting onboarding documents; it changes no application code. The PR is open and unmerged, so the review-and-merge part of the team workflow is not complete.

**Status as of 2026-11-26:**
- [x] Initial fork, clone, and Git identity are recorded in the setup log.
- [x] AI-tooling smoke tests ST1–ST4 are recorded as pass.
- [x] Contribution is committed on `docs/first-contribution-jgbennett245`.
- [x] PR #25 is open against the team repository's `main`.
- [ ] Human review is recorded on GitHub and the PR is merged.

## 2. Deliverables index (what exists and where)

| Artifact | Path | Why it matters |
| --- | --- | --- |
| Contributor roster | `CONTRIBUTORS.md` | The visible first-contribution entry |
| First-contribution plan | `docs/onboarding/first-contribution-plan.md` | Scope and acceptance criteria |
| Contribution notes | `docs/onboarding/first-contribution-notes.md` | Cycles, files, and checks performed |
| PR description | `docs/onboarding/pr-description.md` | Reviewer-facing scope and verification summary |
| Review response notes | `docs/onboarding/review-response-notes.md` | Simulated review comments and recorded responses |
| This handoff | `docs/onboarding/onboarding-handoff.md` | Current onboarding status for mentors |
| Agent instructions | `AGENTS.md` | Cross-tool contributor and repository guidance |

The following background sources were consulted from the prior local branch `docs/first-contribution-jgbennett245-original`; they are not present in the current PR branch: `docs/onboarding/team-orientation-notes.md`, `docs/onboarding/setup-log.md`, `docs/onboarding/repo-map.md`, `docs/onboarding/ai-tooling-verification.md`, and `.cursor/rules/preishare.mdc`. The setup and verification facts below are attributed to those source files rather than presented as files delivered by PR #25.

## 3. Environment and toolchain snapshot

- **OS:** Linux Pop!_OS 24.04 LTS (setup log, 2026-11-08).
- **Git:** setup log records Git 2.43.0, `user.name` as John Bennett, and Git identity configured. An email is configured; its value is intentionally omitted here.
- **Node/package manager:** the setup log does not record Node or npm versions. In the current environment on 2026-11-26, `node --version` returned v26.8.1 and `npm --version` returned 11.19.0. The repository has `package-lock.json`; npm is the package manager indicated by the checked-in lockfile.
- **origin (fork):** current Git remote is `git@github.com:jgbennett245/PREIShare-org-repo`. The setup log records the fork clone URL as `https://github.com/jgbennett245/PREIShare-org-repo.git`.
- **upstream (team repo):** `https://github.com/EdTechForLearning/PREIShare-org-repo.git`. The setup log says adding this remote passed, but the current checkout's `git remote -v` lists only `origin`; `upstream` is not currently configured.
- **Commands recorded in setup log:** `git clone https://github.com/jgbennett245/PREIShare-org-repo.git`, `git remote add upstream https://github.com/EdTechForLearning/PREIShare-org-repo.git`, `git --version`, Git identity checks, `git status`, and `git branch --show-current`. The log does not record `npm install`, build, or application test runs.
- **Checks for PR #25:** reviewed the roster and six-file PR diff, ran `git diff --check` successfully, and scanned the changed files for credential-like strings, emails, and machine-local paths. No application tests were run; GitHub reported no check runs when last verified.
- **Blockers:** the setup log does not document a resolved blocker; its issue row remains a placeholder. It also gives an HTTPS clone command but later says SSH key authentication was used. Confirm the actual clone/auth method if that audit detail matters.

## 4. AI tooling posture

- **Tool used:** Copilot SDK in VS Code.
- **Rules file purpose:** `.cursor/rules/preishare.mdc` provides persistent project-specific stack, safety, scope, and workflow guidance; that file is a background source from the prior local branch, not part of PR #25.
- **AGENTS.md purpose:** provides cross-tool repository guidance, including which onboarding context to read and how to handle mismatches between scaffold history and the current implementation.
- **Smoke-test result:** ST1–ST4 all pass in `docs/onboarding/ai-tooling-verification.md` from the prior local branch. The answers correctly identified the single-package app and route/config locations, secret-handling rules, small safe scope, and configured TypeScript/React/TanStack Start/Vite/Tailwind stack.
- **Caveat:** the rules mention a monorepo and Supabase/PostgreSQL/pgvector, while the repo map and inspected package/config files indicated a single package and no database configuration. The report flags this mismatch rather than treating those database technologies as implemented.
- **Context gaps and fixes:** no rule edits were made. The structural and database-stack discrepancies were recorded as limitations in the verification report.

## 5. First contribution and review outcome

- **Plan goal:** add John Bennett (`jgbennett245`) to `CONTRIBUTORS.md` with a one-line role; no optional second touch was planned. Supporting onboarding documents record the plan, implementation, review, and handoff.
- **Files in PR #25:** `CONTRIBUTORS.md`, `docs/onboarding/first-contribution-plan.md`, `docs/onboarding/first-contribution-notes.md`, `docs/onboarding/pr-description.md`, `docs/onboarding/review-response-notes.md`, and `docs/onboarding/onboarding-handoff.md`.
- **PR:** “docs: add contributor entry for a small docs-only onboarding review” — https://github.com/EdTechForLearning/PREIShare-org-repo/pull/25. Base: `EdTechForLearning/PREIShare-org-repo:main`; head: `jgbennett245/PREIShare-org-repo:docs/first-contribution-jgbennett245`.
- **Review-style feedback:** `review-response-notes.md` records three simulated mentor comments (one blocking scope/verification concern and two non-blocking clarity/commit-history concerns). They are explicitly simulated, not actual GitHub review comments.
- **Changes made:** the local PR description now lists all six changed paths and states the docs-only verification and test status. This local correction is not yet pushed; the live PR body still lists the original four paths. Earlier follow-up commit `2e7422d` clarified scope and verification but did not synchronize the final six-file list.
- **Merge readiness:** not ready for review handoff until the updated description is pushed and the live PR body is synchronized. PR #25 is open and GitHub reports it mergeable; no GitHub review or check runs are recorded. A teammate approval was reported out-of-band, but it is not reflected as a GitHub review. The PR remains unmerged.

## 6. Open risks and environment gaps

1. No application tests were run for this documentation-only PR, and GitHub reported no check runs.
2. The PR is still open and unmerged; GitHub has no recorded review approval.
3. The current checkout has no `upstream` remote, despite the setup log reporting that it was added.
4. Node/npm versions are current environment observations, not values recorded by the setup log; recheck them before relying on this snapshot.
5. Database integration is not verified: rules mention Supabase/PostgreSQL/pgvector, but the repo map and inspected files reported no database configuration.
6. Several background onboarding sources cited here are absent from the current PR branch; mentors should not assume those files are available from the shared branch.
7. The local PR description has been corrected to list six files, but the pushed branch and live PR body still show the older four-file description until the correction is pushed and synchronized.

## 7. Decisions log (for stakeholders)

| Decision | Choice | Rationale |
| --- | --- | --- |
| First contribution surface | `CONTRIBUTORS.md` plus onboarding documentation | Small, reviewable, and documented in the plan |
| Branch naming | `docs/first-contribution-jgbennett245` | Feature branch identifies the task and contributor |
| AI tool category used most | IDE assistant — Copilot SDK in VS Code | Used to inspect and update onboarding documentation in the workspace |
| Optional second touch | None | The plan explicitly listed `n/a` |

## 8. Next-sprint preview (what this unlocks)

1. **Environment:** the setup log documents the initial clone and Git identity, but recheck Node/npm versions and configure the `upstream` remote before work that needs it.
2. **AI alignment:** the four smoke tests passed; retain the caveat that database technologies in the rules are not confirmed as configured.
3. **Git habit:** feature branch and PR workflow have been practiced; this contribution is not merged yet.
4. **First PR path:** use PR #25 as the review example after its human review and merge status are recorded.

**Explicitly out of scope until later:** large product features, production deployments, and database migrations you have not been trained on yet.

## 9. Ask for mentor

- **Questions still open:** Should the setup log, repo map, AI verification report, and Cursor rules be restored to the shared onboarding tree? Is the database stack a future direction or a stale rule claim? Should the current checkout add an `upstream` remote? Please review the updated six-file description after it is pushed and synchronized with the live PR body.
- **Review of this handoff requested:** Yes.
- **Preferred follow-up time or channel:** Asynchronous comments on PR #25; no specific time preference.

---

*End of handoff. Update the PR/review status and environment gaps before the next sprint starts.*
