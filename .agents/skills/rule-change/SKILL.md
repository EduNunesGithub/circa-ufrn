---
description: Normative task protocol. Create, change, clarify or retire a rule; fill the kernel slots (project header, commands, baselines, routing); plan a migration; change the pipeline itself. Use only when the human invokes it explicitly.
name: rule-change
---

# Rule change (normative task)

The canon changes only through this protocol, and only after a human ratifies the change.
The Lead reads "Flow". The implementer reads "Drafting". The reviewer runs `references/canon-check.md`.

## Flow (Lead)

1. **Pin the decision down with the human:** statement, scope (globs), validity, enforcement, exemplar. If anything is open, send one decision request (`deliver` §9). The human decides; agents only propose.
2. **Brief an implementer** as in `deliver` §2, with type `normative`. Put the human's decision, verbatim, in the acceptance criteria. Tier T2, or T3 if the change alters architecture or requires migrating persisted data.
3. **Gate, review, failures and budget** as in `deliver` §4–§8. The protected-path check does not apply. The reviewer runs the canon checklist.
4. **Done and ratification.** Meet `deliver` §10 and give its final report, with a diff summary of rules, checks, baselines, routing and ADR. Then, as the extra step, ask the human to ratify explicitly. Without ratification the task is not done. Merging also requires CODEOWNERS approval.
5. If a code task was blocked on this decision, resume it with a fresh implementer after ratification.

## Drafting (Implementer)

### New rule

1. **Area.** Put the rule in `docs/rules/<area>.md`, creating the file from `assets/rule-file.md` if needed. A rule goes to the kernel's global invariants only if it is truly cross-cutting (at most 10 there).
2. **ID.** `R-<AREA>-<NNN>`: the next number never used in that area, counting the "Retired" list. IDs are never reused.
3. **Fields.** A testable statement (a reviewer can answer yes or no for a given diff); scope in the `paths` frontmatter; validity `new-code` | `touched-files` | `total`; enforcement; a one-line reason; an optional exemplar. An exemplar must be a real file that passes all checks and is in no baseline.
4. **Enforcement.** If the rule can be checked with the project's existing tools, configure the check so that its message cites the rule ID. A custom check (e.g. a custom lint rule) is project code: it needs the human's approval in Flow step 1. Otherwise, enforcement is `review`.
5. **Baseline.** Record the existing violations with the tool's native mechanism (baseline or suppression file), so that only new violations fail. For a review-only rule, list them under "Known legacy" in the rule file, and keep that list short.
6. **Routing.** Update the kernel routing table from the `paths` frontmatter: one row per glob and file, no stale rows.
7. **ADR.** Write one only if the reason is worth revisiting later: `docs/decisions/NNNN-<slug>.md`, from `assets/adr.md`. Trivial conventions need none.
8. Before reporting, run `references/canon-check.md` yourself.

### Clarify, change, retire

- **Clarify** an ambiguous rule: rewrite the statement and add one short positive and one short negative example inside the rule. The examples illustrate the rule; they have no authority of their own.
- **Change** a rule: update the statement, validity, check, baseline and exemplar in the same diff. If an ADR is replaced, set the old one to `superseded-by ADR-NNNN`, and make sure no rule cites it anymore.
- **Retire** a rule: move its ID to "Retired" with the date and reason; remove its check configuration and its baseline; update routing.

### Kernel slots

Fill the placeholders in `AGENTS.md` (project header, commands, baselines, check configuration paths, routing, type triggers, global invariants) and the owner in `.github/CODEOWNERS`.
Run every command you write into the Commands table, and confirm it works before reporting.

### Pipeline changes

For skills, adapters and canaries:
- Skills stay provider-neutral: they refer to roles, and use no provider-specific invocation syntax, shell injection or environment variables.
- Adapters contain only: model, effort, permissions/tools/sandbox, a pointer to a skill, invocation policy, and limits (turns, depth, concurrency). No rules and no process.
- Both providers keep parity: the same agents, pointing to the same skills.

### Migration planning

- The baseline entries of a rule become a backlog. Split them into migration tasks, each with the acceptance criterion "remove entries X from the baseline".
- Prefer deterministic transformations (the tool's autofix, a codemod). Use an agent only where the change needs judgment.
- When a baseline reaches zero, change the rule's validity to `total` (a normative task).

## Budgets and hygiene

- Kernel ≤150 lines. Rule file ≤120 lines. Skill ≤150 lines. Adapter file ≤25 lines. If the kernel overflows, move content to a scoped area. If the routing table passes about 30 rows, move it to `docs/rules/INDEX.md` and leave a pointer in the kernel.
- **Promotion:** a review rule that keeps being violated is a candidate to become a check. Once it does, its text shrinks to the statement plus the check name.
- **Removal:** a rule that no review and no check has cited for a long time is a candidate for retirement.
- New rules are born only from a decision request, a divergence found in the canaries, or a recurring review finding.
