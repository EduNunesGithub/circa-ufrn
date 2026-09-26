---
paths:
  - "{{source globs}}"
---
# Code style

## R-STYLE-001: Order-insensitive lists are sorted alphabetically
Sort every order-insensitive list alphabetically (ascending, case-insensitive): imports, exports, object keys, type and interface members, enum members, component props, and class members within the same visibility group. Exception: keep the original order when changing it would change behavior or meaning (for example initialization order, middleware or pipeline chains, positional parameters, or lists whose order is data).
- Reason: predictable placement, smaller diffs, fewer merge conflicts.
- Validity: new-code. Legacy: none.
- Enforcement: review.

## R-STYLE-002: Project code is imported only through the path alias
Import project code only through the path alias configured for the project. Relative imports are forbidden, including same-folder `./` imports. Import external packages by package name.
- Reason: imports stay stable when files move, and module boundaries stay visible.
- Validity: new-code. Legacy: none.
- Enforcement: review.

## R-STYLE-003: Source code contains no comments
Source code contains no comments, including doc comments such as JSDoc or docstrings. Express intent through names, types and structure. Only exceptions: tool directives (lint or type suppressions, compiler pragmas, shebangs) and legally required license headers.
- Reason: comments drift from the code; names and tests don't.
- Validity: new-code. Legacy: none.
- Enforcement: review.

## Known legacy
Only for rules enforced by review. Keep this list short.
- none

## Retired
IDs listed here are never reused.
- none
