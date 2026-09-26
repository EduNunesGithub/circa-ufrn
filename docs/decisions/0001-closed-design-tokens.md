# ADR-0001: Closed design tokens with semantic spacing

- Status: accepted
- Date: 2026-09-26
- Rules: R-UI-001, R-UI-003, R-UI-005, R-UI-006, R-UI-007, R-UI-008

## Context
The Pen.dev design is a visual reference with technical inconsistencies: gaps that differ by a few pixels for the same role, and section paddings that vary between pages. Snapping each value to the nearest 4px step (the earlier R-UI-005) kept those inconsistencies, only rounded. Arbitrary colors and a free token set would let the same drift return in code.

## Decision
`app/globals.css` defines a closed set of theme tokens (colors, radius, shadow, spacing, containers, aspect ratios, fonts). Gap and padding use only semantic spacing tokens named by role (gutter, section, block, group, inset, item, label, control); a design spacing value maps to the token of its role, not to its pixel value. Colors come only from theme color tokens. Dimensions keep the numeric 4px scale. Tokens change only in a human-ratified normative task. ESLint `no-restricted-syntax` catches, in string and template literals, numeric and arbitrary gap/padding classes and color-looking arbitrary values in color utilities; named colors in brackets, arbitrary properties, shadow colors and inline styles are left to review.

## Alternatives considered
- Numeric 4px scale for spacing, snapping design values: consistent grid, but inconsistent rhythm; the same role gets different values.
- Semantic tokens enforced by review only: no new tooling, but the most frequent violation (a numeric `gap-*`/`p-*`) is mechanical and cheap to catch with an existing rule.
- A dedicated Tailwind lint plugin: more precise, but a new dependency.

## Consequences
- Spacing changes globally by editing one token; responsive section spacing lives in the token, not in class lists.
- Every gap or padding needs a role; a role that no token covers blocks the task until a human adds a token.
- The ESLint check is regex-based: it does not see `@apply` in CSS or class names built at runtime, and may flag a non-class string that looks like a class; review covers both.
