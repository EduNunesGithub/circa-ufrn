# AI-first development pipeline (template)

Human documentation. Agents do not need this file: what they need is in `AGENTS.md` and the skills. If this file and those artifacts disagree, the artifacts win.

A development pipeline for Codex and Claude Code built only from native primitives: persistent instructions, skills and subagents. It uses no scripts, generators or hooks. It fights drift with four mechanisms:
1. a small canon with explicit authority;
2. sensors the acting agent does not control;
3. context routed by path to the rules, instead of to neighbouring code;
4. three agent roles.

## Layout

```
AGENTS.md                         kernel: authority, context protocol, gates, commands, routing (canon)
CLAUDE.md                         Claude adapter: imports AGENTS.md
docs/rules/<area>.md              atomic rules with ID, path scope, validity, enforcement (canon)
docs/decisions/NNNN-*.md          ADRs, only when the reason is worth revisiting (canon, not loaded by default)
.agents/skills/deliver/           Lead protocol (main session)
.agents/skills/implement/         Implementer protocol (subagent)
.agents/skills/review/            Reviewer protocol (read-only subagent)
.agents/skills/rule-change/       normative tasks: rules, kernel slots, migrations, pipeline changes
  references/canon-check.md       canon integrity checklist (agent-executed)
  assets/                         rule file and ADR templates
.claude/skills/*/SKILL.md         pointers to .agents/skills (Claude does not scan .agents/skills)
.claude/agents/                   implementer-{low,medium,high,max} and reviewer (high, no write tools), all Opus 5.5
.claude/settings.json             Lead model and effort, forks denied, auto memory off, skill visibility, spawn depth
.codex/config.toml                Lead model and effort, concurrency, memories off
.codex/agents/                    implementer-{low,medium,high,max} and reviewer (high, read-only), all gpt-6-sol
.github/CODEOWNERS                human approval for canon, sensors and adapters
evals/canaries.md                 consistency suite, run by humans
```

## Roles

| Role | Where | Does | Never |
|---|---|---|---|
| Human | chat | decides and ratifies rules, approves T3 approaches, unblocks, merges | gives lasting rules only in chat |
| Lead | main session, `deliver` | classifies, briefs, runs the gate, triages, decides convergence | edits code or canon, paraphrases rules |
| Implementer | fresh subagent, `implement` | plans, implements, tests, reports | makes normative decisions, touches sensors |
| Reviewer | fresh read-only subagent, `review` | reviews the diff with grounded findings | edits, invents style rules |

## Adopting the template

1. Copy this repository into the project (or start the project from it).
2. **Codex:** trust the project, so that `.codex/config.toml` loads. **Claude Code:** nothing to do; `CLAUDE.md` imports `AGENTS.md`.
3. **Sensors first.** Pick the project's own format, lint, type, test and architecture tools. Configure the 3–5 checks worth most, each with a baseline of the existing violations in the tool's native format.
4. **Fill the kernel slots** through a normative task. In the main session, invoke `rule-change` (`$rule-change` in Codex, `/rule-change` in Claude Code) and ask it to fill the project header, the `verify` commands, the baseline table, the check configuration paths and the CODEOWNERS owner.
5. **Write the first 5–10 rules** with `rule-change`. Start with the decisions that diverge most in the code today, and mark exemplars.
6. Run the canon checklist once (ask the Lead to have a reviewer run `.agents/skills/rule-change/references/canon-check.md`). No placeholder may remain outside `assets/`.
7. Write 6–10 canaries in `evals/canaries.md` and run them on your main provider. Add the second provider once the first one is stable.

After that, code tasks are just requests to the main session: it follows `deliver`.

## Deviations from the architecture document

| Document | Here | Why |
|---|---|---|
| `canon` is a deterministic check inside `verify` | `canon-check.md` is a checklist run by the implementer (while drafting) and by the reviewer, in normative tasks. The Lead's gate mechanically blocks protected paths in every other task | No scripts. The canon can only change in normative tasks, so checking it there covers every change path. It is less reliable than a script |
| `verify` is a pipeline command with a summarized mode | `verify` is the list of the project's own commands in the kernel; agents condense the output to one line per failure | The project's tools are project tooling, not pipeline tooling |
| `.claude/skills` is a symlink to `.agents/skills` | One-line pointer skills in `.claude/skills` | Git on Windows checks symlinks out as text files (`core.symlinks=false`), and Claude Code does not scan `.agents/skills` |
| Model routing: Sonnet 5 / Opus 5.5 / Fable 5.1 and gpt-6-sol / gpt-6-astra; the implementer is escalated by passing a model at spawn time | One model per provider (Opus 5.5, gpt-6-sol). Effort follows the tier: T1 low, T2 medium, T3 high, max after the single F8 escalation. Lead medium, reviewer high. Each effort level is its own agent (`implementer-<effort>`) | Claude Code can set a subagent's effort only in its agent file, not per invocation. With one agent per level in both providers, the tier-to-agent table lives in the neutral `deliver` skill, and no spawn-time override is needed |

## Checking the adapters

- **Codex:** at the root, run `codex --ask-for-approval never "Summarize the current instructions."` and confirm that the kernel appears. In a canary, ask the implementer to list its instruction sources. Whether subagents inherit `AGENTS.md` is not documented explicitly.
- **Claude Code:** `/memory` or `/context` shows `CLAUDE.md` with `AGENTS.md` imported; `/agents` lists the four `implementer-*` variants and `reviewer`; `/tasks` shows the model and effort of running subagents.

Re-check on every platform update: `AGENTS.md` loading and size limits; that each model still supports the effort levels used (`max` in particular); whether Claude Code gained a per-invocation effort parameter; fork mode defaults; model aliases and IDs; memory defaults. The canaries exist to catch these changes.

## Metrics (from git and manual runs, no dashboards)

| Metric | Meaning |
|---|---|
| S1 | Variance on the same task (canaries) |
| S2 | Escape rate: violations of existing rules found after merge |
| S3 | Baseline trend (must not grow outside new rules) |
| S4 | First-review approval and cycles per task, by tier |
| S5 | Reviewer precision (share of normative findings dismissed) |
| S6 | Decision requests per task (should fall, never to zero) |
