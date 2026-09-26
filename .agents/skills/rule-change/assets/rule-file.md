---
paths:
  - "{{glob, e.g. src/modules/**}}"
---
# {{Area name}}

## R-{{AREA}}-001: {{Testable statement}}
{{The rule in one or two sentences. A reviewer must be able to answer yes or no for a given diff.}}
- Reason: {{one line}} ({{ADR-NNNN, optional}}).
- Validity: {{new-code | touched-files | total}}. Legacy: {{baseline `<check>` | "Known legacy" below | none}}.
- Enforcement: {{check `<tool>/<rule>` (its message cites R-{{AREA}}-001) | review}}.
- Exemplar: {{`path/to/real/file`, optional}}.

## Known legacy
Only for rules enforced by review. Keep this list short.
- {{path}}: {{rule ID}}

## Retired
IDs listed here are never reused.
- {{R-{{AREA}}-NNN}}: {{date}}, {{reason}}
