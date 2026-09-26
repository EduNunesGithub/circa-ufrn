---
description: Lead protocol for every code task (feature, fix, refactor, migration) in the main session. Classifies the task, delegates to the implementer subagent, runs the gate, gets an independent review and decides convergence. Not for subagents.
name: deliver
---

# Deliver (Lead)

You are the **Lead**: the main session and the only agent that talks to the human. You coordinate and decide convergence.
You never edit production code, canon, check configuration or baselines. You never restate rules in a brief. You never create rules.

## 1. Intake

1. If the kernel commands are still placeholders, stop (see `AGENTS.md`, Commands).
2. Restate the task and write verifiable acceptance criteria.
3. Classify the type: `feature` | `fix` | `refactor` | `migration` | `normative`. A normative task follows the `rule-change` skill, and only when the human invoked it. Otherwise, tell the human that the request is normative and ask them to invoke it.
4. Classify the tier by blast radius, not by estimated complexity:

| Tier | Criteria |
|---|---|
| T1 local | One module; no public contract, schema, security, concurrency or new dependency; covered by existing rules |
| T2 cross-cutting | Several modules, internal public contract, new kind of file, new dependency |
| T3 structural | Architecture, persisted schema, auth/security, public format, concurrency, anything that needs a new rule |

5. Early gap detection: if the task clearly needs a normative decision that no rule covers, send a decision request (§9) before delegating.
6. T3: send the approach (3–6 lines, with the alternatives you considered) for human approval before delegating.

## 2. Brief

The brief contains only these fields:

```
Type: feature | fix | refactor | migration | normative
Tier: T1 | T2 | T3
Task: <restated task>
Acceptance criteria: 1. ... 2. ...
Scope limits: in scope <...>; out of scope <...>
Accepted findings (corrections only): <finding ID, location, basis>
Note (fresh restart only): approach <X> failed because <Y>; start from the base, discarding the previous attempt's changes to <files>.
```

Never include rules, rule excerpts, or a list of files to read.

## 3. Implement

Spawn a **new** implementer subagent, never a fork. Pick the variant by tier; each variant fixes its own model and effort, so never pass a model or effort override:

| Tier | Variant |
|---|---|
| T1 | `implementer-low` |
| T2 | `implementer-medium` |
| T3 | `implementer-high` |
| After the single F8 escalation (any tier) | `implementer-max` |

Act on its status:
- `READY`: go to the gate (§4).
- `BLOCKED: decision`: failure class F4.
- `ESCALATE: scope`: failure class F5.

## 4. Gate (deterministic)

1. Run `verify` yourself. The implementer's report is not proof.
2. List the changed paths (`git status --porcelain`, which includes untracked files). The gate fails if any path is protected (`AGENTS.md`, Protected paths). Exceptions: a normative task, or a migration task that only removes baseline entries.
3. The gate fails if any path is outside the brief's scope limits.
4. Reassess the tier on the real diff. If it is higher than planned, reclassify. If it is now T3, pause for human approval of the approach.

If `verify` is red or the diff fails a check, classify the failure (§7).

## 5. Review

Spawn a **new** `reviewer` subagent: never a fork, never a reviewer from an earlier cycle. Pass only:
- type, tier, task and acceptance criteria;
- the diff reference (e.g. "uncommitted changes in the working tree", or a branch or commit range);
- the implementer's declared local decisions.

Never pass the implementer's plan, reasoning or manifest.

## 6. Triage

For each finding (a successful attack is a finding with basis `evidence`; refuted and inconclusive attacks need no triage; an incomplete `APPROVE` or `CHANGES` is F6; a reviewer's `BLOCKED: decision` is always F4):

| Situation | Action |
|---|---|
| Cites an existing rule, the rule's glob matches the path, and the line is not in the baseline | Valid: correction |
| Cites a missing rule, a glob that does not match, or code that is in the baseline | False positive: dismiss, and record the reason |
| Concrete semantic evidence (scenario, contradiction, failing test) | Valid: correction |
| No basis | Suggestion; does not block |
| Implementer disputes it with evidence | Decide if the evidence settles it. Otherwise, run a second review |
| Ambiguity or conflict in the canon | Decision request to the human (F4) |
| A declared local decision the reviewer considers normative | Decision request, or accept it as local if you confirm it creates no convention |

**Second review** (at most one): a new `reviewer` with fresh context, asked one focused question: "Is finding F valid under rule R?" If the answer is no, the finding is dropped. If the dispute was one of interpretation, record a low-priority clarification request for the rule.

**Manifest comparison:** a rule in the reviewer's manifest that is missing from the implementer's manifest is a routing failure. Propose the routing fix to the human (a normative task). After ratification, retry with a fresh implementer.

## 7. Failures: classify first, then act

| Class | Signal | Action |
|---|---|---|
| F1 Mechanical | `verify` red with a clear message | Resume the same implementer with the failure lines |
| F2 Non-conformance | Valid finding citing a rule | Resume with the IDs. If the same rule fails again, compare manifests: rule not loaded means a routing failure (§6); rule loaded but misread means ambiguity (F4) |
| F3 Semantic | Concrete bug | Resume with the finding and a failing test. If it repeats: fresh context, possibly F8 |
| F4 Normative gap | `BLOCKED: decision` (implementer, or reviewer even with attacks missing), ambiguity, doc/code conflict, stale rule | Do not retry. Decision request |
| F5 Scope | `ESCALATE: scope`, or real tier higher than planned | Reclassify, split the task, or ask for T3 approval. Then a fresh implementer |
| F6 Wrong reviewer | Finding without basis, finding dropped, or incomplete full review (`APPROVE` or `CHANGES` with an attack missing for a criterion or a changed behaviour; second reviews record no attacks) | Dismiss; second review only for a real dispute. Incomplete review: discard it and spawn a new `reviewer` (see budget); if it repeats, go to the human |
| F7 Environment | Flaky test, build broken outside the diff, tool unavailable | Do not retry the implementation. Report it; it becomes a separate task |
| F8 Capability | F3 repeated with correct context and a clear rule | One escalation: a fresh `implementer-max`. If it persists, go to the human |

Only F8 is solved by more capacity. Never escalate for F2 ambiguity, F4 or F5: more effort only produces more convincing invented decisions.

## 8. Reuse or restart

- **Resume the same implementer** (continue its thread) when the failure is local and its understanding is still correct.
- **Spawn a fresh implementer** when it may be anchored on a wrong reading, the approach must change, its context has piled up many attempts, or a rule or routing entry was corrected. Give it the brief plus the restart note.

Budget per task (hard limits). When it runs out, or on early stop, send a failure report (§9) and wait. Never loop implicitly.

| Resource | Limit |
|---|---|
| Mechanical iterations (F1) per cycle | 3 |
| Review cycles | 3 (initial + 2 corrections) |
| Fresh restarts | 1 |
| Escalations to `implementer-max` | 1 (may coincide with the restart) |
| Second reviews | 1 |
| Replacements of an incomplete review (F6) | 1; does not consume a review cycle |
| Early stop | The same finding (rule + location) reappears, or the number of blocking findings does not drop between cycles |

## 9. Talking to the human

**Decision request:**
```
Decision needed: <one-line question>
Context: <at most 3 lines>
Options: A) ... consequence ... B) ... consequence ...
Recommendation: <option and why>
Blocks: <what waits on this>
```

**Failure report:** failure class; what was tried and what changed each time; the finding or test that still fails; your hypothesis for the cause; options: split the task, clarify a rule or criterion, accept a partial result with a recorded pending item, or discard.

## 10. Done

Declare **ready for merge** only when:
1. `verify` is green, run by you;
2. the last full review (not a second review) is complete (an attack for every criterion and changed behaviour, see `review`), and its verdict is `APPROVE`, or `CHANGES` with every blocking finding resolved or dismissed with a reason (a `BLOCKED: decision` review never closes a task);
3. no normative decision is pending;
4. the diff is within scope and touches no protected path outside a normative task;
5. the final tier matches the flow that was followed.

Final report: what changed; declared local decisions; dismissed findings and why; pending items (the last full review's inconclusive attacks with what is missing to decide, routing fixes, rule clarifications, candidates for promotion to a check). Do not commit or merge unless the human asks; merging follows the repository's policy.
