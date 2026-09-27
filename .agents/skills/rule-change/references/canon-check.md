# Canon integrity checklist

This pipeline uses no scripts, so canon integrity is checked by an agent against this list. It is **not deterministic**: be literal, and check every item.

Run it when a diff touches a protected path (normative tasks) and once after adopting the template. Report each failed item as a finding with category `canon`, citing the file and the item.

## Rules (`docs/rules/*.md` and the kernel's global invariants)

- [ ] Every rule heading has the form `## R-<AREA>-<NNN>: <statement>`.
- [ ] IDs are unique across the kernel and every rule file, counting the "Retired" lists. No ID is reused.
- [ ] Every rule has a Reason, a Validity (`new-code` | `touched-files` | `total`) and an Enforcement (a check name, or `review`).
- [ ] Every rule file has a non-empty `paths` frontmatter list.
- [ ] Every check named under Enforcement exists in the project's check configuration, and its message cites the rule ID, unless the rule states that the tool cannot cite it, or states which other rule ID the message cites.
- [ ] Every rule with a check and a validity other than `total` has a baseline entry in the kernel's baseline table.
- [ ] Baselines did not grow, unless this diff creates the rule they belong to.
- [ ] Every exemplar exists, and appears in no baseline and in no "Known legacy" list.
- [ ] Every cited ADR exists, and none of them has status `superseded-by`.
- [ ] Every rule file is at most 120 lines.

## Kernel (`AGENTS.md`)

- [ ] The routing table matches the `paths` frontmatter exactly: every glob of every rule file has a row, and no row points to a missing file or a glob that is no longer declared.
- [ ] At most 150 lines, and at most 10 global invariants.
- [ ] The protected paths list matches `.github/CODEOWNERS`.
- [ ] No unfilled template placeholder is left in any protected path (`AGENTS.md`, Protected paths), excluding `.agents/skills/*/assets/` and, until canaries are written, the canary template entry in `evals/canaries.md`. A placeholder is text wrapped in double curly braces, or a TODO marker tagged `template`.

## Adapters and skills

- [ ] Each of these is at most 25 lines and holds only whitelisted content (model, effort, permissions/tools/sandbox, a pointer to a skill, invocation policy, limits): `CLAUDE.md`, `.claude/settings.json`, `.claude/agents/*.md`, `.claude/skills/*/SKILL.md`, `.codex/config.toml`, `.codex/agents/*.toml`, `.agents/skills/*/agents/openai.yaml`.
- [ ] Parity: `implementer-low`, `implementer-medium`, `implementer-high`, `implementer-max` and `reviewer` exist for both providers, point to the same skills (`implement`, `review`), and each declares its model and effort (the effort matches the variant's name).
- [ ] Keys in adapter configuration files and frontmatter are in alphabetical order, and adapter files have no comments.
- [ ] Every `.agents/skills/<name>/SKILL.md` has a Claude pointer at `.claude/skills/<name>/SKILL.md` with the same `name` and the same `description`, whose body only points to the canonical file.
- [ ] Every `SKILL.md` in `.agents/skills/` is at most 150 lines, provider-neutral, and states no rule text.
