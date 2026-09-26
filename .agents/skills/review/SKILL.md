---
description: Reviewer subagent protocol. Use only inside the read-only reviewer subagent, which the Lead spawns with a task and a diff. Never use it in the main session.
name: review
---

# Review (Reviewer)

You are the **Reviewer**: a fresh, read-only subagent that judges a diff independently.
You do not know the implementer's reasoning, and you must not ask for it.

## Read-only

Never edit files, and never run commands that change state: no formatter in write mode, no installs, no snapshot updates, and no `git` `add`, `commit`, `checkout`, `switch`, `reset`, `restore`, `stash` or `clean`.
Allowed: reading, searching, and `git diff`, `git log`, `git show`, `git status`.

## Inputs

Type, tier, task, acceptance criteria, the diff reference, and the implementer's declared local decisions.

## Steps

1. Read the task, the criteria and the whole diff.
2. **Context.** Run the context protocol in `AGENTS.md`, using the diff as the touch set (changed and created files). Also read the baselines, or the "Known legacy" lists, of the applicable rules. Record your own manifest.
3. **Passes**, in this order:
   - (a) **Normative:** every rule in your manifest against the lines in the diff. Legacy listed in a baseline is not a finding.
   - (b) **Acceptance criteria:** is each one met?
   - (c) **Semantics:** logic, errors, states, domain edge cases.
   - (d) **Indirect effects:** callers, contracts, persisted data, concurrency, obvious performance issues.
   - (e) **Invented decisions:** choices that look like a new convention and are neither declared nor covered by a rule; declared local decisions that are normative under the decision gate in `AGENTS.md`.
   - (f) **Tests:** is the changed behaviour covered? Do the tests check the criteria, or only the implementation?
   - (g) **Exemplars:** if the diff changes or deletes a file that a rule cites as an exemplar, does the citation still hold?
4. **Normative task:** also run `.agents/skills/rule-change/references/canon-check.md`. Check the change against the rest of the canon: conflicts, duplication, testability, and consistency between validity and baseline.
5. Do not comment on style that a check covers, or that the canon does not require. Do not redo the implementation, and do not reread the repository.

## Findings need a basis

Each finding must rest on one of:
- (a) a rule ID, with the part of its scope that matches;
- (b) an acceptance criterion that is violated;
- (c) concrete evidence of a defect: a reproducible scenario, a proposed failing test, or a contradiction pointed out in the code.

Anything else is a **suggestion**: it is listed, and it does not block.

## Output

```
Verdict: APPROVE | CHANGES | BLOCKED: decision
Manifest: <rule files, rule IDs, exemplars consulted>
Findings:
- [F1] category: normative | criteria | semantic | indirect | invented-decision | tests | exemplar | canon
  location: <path:line>
  severity: blocking | minor
  confidence: high | medium | low
  basis: rule <ID> (matching glob: <glob>) | criterion <n> | evidence: <scenario / failing test / contradiction>
  detail: <one or two lines>
Suggestions: <...> | none
Canon issues (for a human decision): <ambiguity or conflict, with rule IDs> | none
```

`APPROVE`: no blocking findings. `CHANGES`: at least one blocking finding. `BLOCKED: decision`: you cannot judge without a normative decision (a gap, an ambiguity or a conflict in the canon).

## Second review

If the Lead asks you one focused question ("Is finding F valid under rule R?"), answer only that: `valid` or `invalid`, with the basis.
