# App (name to be decided)

Web application built with Next.js (App Router), TypeScript and Tailwind CSS. The project name and description are not decided yet.

This file is the kernel of the project canon. Everything an agent needs is here or reachable from here.

## Authority

When sources disagree, the higher one wins:

1. Canon rules: this file and `docs/rules/*.md`.
2. Acceptance criteria of the current task (they bind that task only and cannot override a rule without a human decision).
3. Exemplars cited by rules.
4. Accepted ADRs in `docs/decisions/` (they explain reasons; they are not commands).
5. Existing code: evidence of current state, never of a rule. How often a pattern appears is not an argument.

Instructions given in chat bind only the current task. To persist, they must become a rule through the `rule-change` skill.
Do not use or write agent memories. Nothing normative lives outside this repository.

## How work happens

- Code tasks (feature, fix, refactor, migration): the main session is the **Lead** and follows the `deliver` skill.
- Normative tasks (create, change, clarify or retire a rule; fill kernel slots; change the pipeline): the `rule-change` skill, only when the human invokes it explicitly.
- The implementer subagents (`implementer-low`, `implementer-medium`, `implementer-high`, `implementer-max`: the same role at different effort levels) follow the `implement` skill. The `reviewer` subagent follows the `review` skill.
- Only the Lead talks to the human. Only the human creates or changes rules.

## Context protocol

Every agent acquires its own context. Nobody hands you a list of files to read.

1. List the **touch set**: files you will change **and** files you will create (by destination path). A reviewer uses the diff instead.
2. Match the touch set against the routing table and the type triggers below. Read every matching rule file in full.
3. Read the exemplars cited by applicable rules for anything you will create.
4. Read the target code and its direct dependencies (callers, callees, tests). For broad exploration, delegate to the built-in explorer agent and work from its summary.
5. Record your **manifest**: rule files, rule IDs and exemplars consulted.
6. If the touch set grows, repeat from step 2 for the new paths.

Never read nearby code to pick up "the style". Conventions come from rules and exemplars. Read neighbouring code only to understand behaviour.

Do not read by default:
- `docs/decisions/`: only when proposing a rule change, or when a rule cites an ADR.
- `docs/product/` (if present): only when the task touches that capability.
- `evals/`: never, unless the task is about the canaries.
- `README.md`: human documentation, not canon.

## Decision gate

A choice is **normative** if at least one holds:
- other parts of the code would have to repeat the same choice (it is a convention);
- it crosses a module boundary or a contract;
- it is hard to reverse (schema, public API, persisted format, new dependency);
- the code shows two or more competing patterns and no rule decides.

Normative: stop with `BLOCKED: decision` and describe the options. Never decide by majority of existing code.
Not normative: pick the simplest option compatible with rules and exemplars, and **declare** it as a local decision.

## Scope gate

If the touch set exceeds the brief's scope limits or its tier, stop with `ESCALATE: scope` before editing in bulk.

## Legacy and baselines

If you see code that contradicts a rule, check that rule's baseline (or the "Known legacy" list in its rule file):
- listed: it is legacy. Do not imitate it.
- not listed: it is a defect. Report it; do not imitate it; do not fix it outside your scope.

Baselines only shrink, except when a new rule is created.

| Check | Baseline (native format of the tool) |
|---|---|
| ESLint `no-restricted-syntax` (R-MOTION-003, R-MOTION-004) | `eslint-suppressions.json` (ESLint bulk suppressions; counts the whole rule per file, so it also hides R-UI-006, R-UI-007 and R-COMP-001 hits there) |

`verify` does not show suppressed hits, so reviewers inspect every `no-restricted-syntax` hit in a suppressed file that the diff touches (`npx eslint --stdin --stdin-filename <file> < <file>` shows them). Migrations run `npx eslint . --prune-suppressions`, then `npx prettier --write eslint-suppressions.json`.

## Commands

If any command below is still a placeholder, the pipeline is not adopted: do not run code tasks, and tell the human to fill the kernel slots through `rule-change`.

`verify` means: run every stage below from the repository root, in order. Report only failures, one line each:
`<stage> <path>:<line> <message> [rule ID if the message cites one]`.

| Stage | Command |
|---|---|
| format | `npx prettier --check .` |
| lint | `npx eslint . --max-warnings 0` |
| types | `npx tsc --noEmit` |
| test | none |
| architecture | none |

Other: build `npm run build` · single test none.
There is no test runner yet: code tasks do not add tests until one is adopted through a normative task.

## Protected paths

Canon, sensors and adapters. The protected-path check: a diff that touches them fails the gate unless the task is normative (the human ratifies it at Done) or a migration that only **removes** baseline entries.

- `AGENTS.md`, `CLAUDE.md`
- `docs/rules/**`, `docs/decisions/**`
- `.agents/**`, `.claude/**`, `.codex/**`
- `evals/**`, `.github/CODEOWNERS`
- Check configuration: `eslint.config.mjs`, `.prettierrc.json`, `.prettierignore`, `.commitlintrc.json`, `lefthook.yml`, `tsconfig.json`
- Baselines: every file in the baseline table above

## Routing

Derived from the `paths` frontmatter of each rule file. Keep them in sync (see `rule-change`).

| Glob | Rule file |
|---|---|
| app/** | docs/rules/file-structure.md |
| app/**/*.tsx | docs/rules/components.md |
| app/**/*.{css,ts,tsx} | docs/rules/motion.md |
| app/**/*.{css,ts,tsx} | docs/rules/styling.md |
| app/**/*.{ts,tsx} | docs/rules/code-style.md |
| components/** | docs/rules/file-structure.md |
| components/**/*.tsx | docs/rules/components.md |
| components/**/*.{ts,tsx} | docs/rules/code-style.md |
| components/**/*.{ts,tsx} | docs/rules/motion.md |
| components/**/*.{ts,tsx} | docs/rules/styling.md |
| contexts/** | docs/rules/file-structure.md |
| contexts/**/*.{ts,tsx} | docs/rules/code-style.md |
| contexts/**/*.{ts,tsx} | docs/rules/components.md |
| contexts/**/*.{ts,tsx} | docs/rules/motion.md |
| contexts/**/*.{ts,tsx} | docs/rules/styling.md |
| hooks/** | docs/rules/file-structure.md |
| hooks/**/*.{ts,tsx} | docs/rules/code-style.md |
| hooks/**/*.{ts,tsx} | docs/rules/motion.md |
| hooks/**/*.{ts,tsx} | docs/rules/styling.md |
| lib/** | docs/rules/file-structure.md |
| lib/**/*.{ts,tsx} | docs/rules/code-style.md |
| lib/**/*.{ts,tsx} | docs/rules/components.md |
| lib/**/*.{ts,tsx} | docs/rules/motion.md |
| lib/**/*.{ts,tsx} | docs/rules/styling.md |

Type triggers (routing by kind of change, not by path):
- none

## Global invariants

At most 10. Each has an ID and follows the rule format in `docs/rules`.

- none
