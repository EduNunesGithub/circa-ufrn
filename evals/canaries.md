# Canaries

A consistency suite run by humans (metric S1: variance on the same task). Agents: do not read this file unless the task is about the canaries.

## When to run

- When a model, a model version or the provider changes.
- After a relevant change to the canon or the skills.
- Periodically (e.g. every quarter).

## How to run

1. For each canary, start **3 independent sessions** on the same provider. Use a new chat each time, and a throwaway branch or worktree from the same base commit.
2. Give each session the canary's task text, verbatim, and let the pipeline run up to "ready for merge".
3. Compare the 3 results: files touched, patterns, structure, and the manifests reported.
4. Classify each divergence:
   - where a rule exists: a routing or rule defect. Fix it through `rule-change`.
   - where no rule exists: a missing decision. Bring it to the human as a decision request.
5. Record the run in the table below, then discard the branches.

Keep 6–10 canaries: small, fixed tasks, several of them in areas where the code contradicts the rules.

## Canaries

### C-01: {{title}}
- Task: {{task text, given verbatim to each session}}
- Area: {{paths}}
- Probes: {{which divergence this canary is meant to reveal}}

## Runs

| Date | Provider / models | Canary | Divergences | Action |
|---|---|---|---|---|
