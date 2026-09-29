---
paths:
  - "app/**/*.{css,ts,tsx}"
  - "components/**/*.{ts,tsx}"
  - "contexts/**/*.{ts,tsx}"
  - "hooks/**/*.{ts,tsx}"
  - "lib/**/*.{ts,tsx}"
---
# Styling

## R-UI-001: Every dimension is a multiple of 4px
Fixed dimensions are multiples of 4px. Dimensions include width, height, size, inset/positioning, translate, border-radius, etc.
In Tailwind v4, use only integer steps of the spacing scale or named theme tokens. Fractional steps (`0.5`, `1.5`, `2.5`, `3.5`) are forbidden. Arbitrary values (`[13px]`) are forbidden.
Gap and padding are not dimensions. They follow R-UI-006.
Border-radius uses only the theme radius tokens: `rounded-sm` (4px), `rounded-md` (8px), `rounded-lg` (16px) and `rounded-full`.
Exempt: border widths (including 1px dividers such as `h-px`/`w-px`), ring and outline widths and offsets, and font sizes.
Named size tokens that are not spacing steps are allowed when their value is a multiple of 4px (`max-w-md` 448px, `max-w-page`, `h-header`, `size-target`). The eight R-UI-006 role tokens are never dimensions (`size-control`, `w-gutter` are forbidden).
Outside this rule: keyword sizes (`full`, `screen`, `auto`, `fit`, `min`, `max`), em-based sizes such as `max-w-prose`, and percentage fractions (`w-1/2`, `w-1/3`, …). Only fixed values must be multiples of 4px.
- Reason: a single rhythm keeps layouts consistent and avoids one-off values.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-UI-002: Space between elements is always `gap`
Space between sibling elements uses `gap`. Padding is used only for a container's internal space. Margin utilities (`m-*`, `mt-*`, `mx-*`, etc.) and `space-x-*`/`space-y-*` are forbidden, except `mx-auto` for centering and negative margins.
- Reason: spacing is owned by the parent layout, so components stay context-free.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-UI-003: Typography is defined only in `app/globals.css`
Font family, font size, font weight, font style and tracking are defined only in `app/globals.css`: base styles for elements (`h1`, `h2`, `p`, …) inside `@layer base` with `@apply` (for example `@apply font-bold text-2xl;`, no colon), plus named typography classes defined there for special cases. Named typography classes use the `typo-*` prefix (for example `typo-caption`, `typo-label`, `typo-display`), never a Tailwind utility prefix such as `text-*`; they are project classes, not the `@tailwindcss/typography` plugin, and each is defined with Tailwind's `@utility` directive, never as a plain CSS class. Components and pages do not apply font-family (`font-sans`, `font-mono`, …), font-size (`text-<size>`), font-weight (`font-bold`, …), font-style (`italic`, `not-italic`) or tracking (`tracking-*`) utilities directly.
- Yes: `@utility typo-caption { @apply text-xs font-normal; }`
- No: `.typo-caption { @apply text-xs font-normal; }`; `<span className="typo-small italic">`
- Reason: one source of typographic truth; text looks the same everywhere.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-UI-004: Font sizes use Tailwind tokens; line-height is never set
Every font size is one of Tailwind's font-size tokens (`text-xs`, `text-sm`, `text-2xl`, …), never an arbitrary value. Line-height is never set explicitly: `leading-*` and the slash syntax (`text-sm/6`) are forbidden everywhere, including `app/globals.css`.
- Reason: the token scale already pairs each size with its line-height.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-UI-005: The design is a visual reference, not a specification
The Pen.dev design guides the look but is not translated 1:1: its spacings and dimensions are not copied when they break these rules. A design gap or padding maps to the semantic spacing token of its role (R-UI-006), whatever its pixel value. A design dimension that is not valid under R-UI-001 snaps to the nearest value valid under R-UI-001.
- Reason: the design has technical inconsistencies (slightly different gaps, section paddings differing between pages) (ADR-0001).
- Validity: total. Legacy: none.
- Enforcement: review.

## R-UI-006: Gap and padding use only the semantic spacing tokens
Every gap utility (`gap-*`, `gap-x-*`, `gap-y-*`) and padding utility (`p-*`, `px-*`, `py-*`, `pt-*`, `pr-*`, `pb-*`, `pl-*`, `ps-*`, `pe-*`) uses one of the eight tokens below, chosen by role; no other spacing token is valid there (`p-header`, `gap-target` are forbidden). Zero is allowed as a reset (`p-0`, `px-0`, `gap-0`, also with variants such as `desktop:p-0`). Other numeric steps (`gap-4`, `p-0.5`, `p-px`) and arbitrary values (`p-[13px]`, `gap-(--x)`) are forbidden. Dimensions keep the numeric scale under R-UI-001.
- `gutter`: horizontal padding of every full-width band (20px, 60px ≥desktop; page width is capped by `max-w-page`).
- `section`: vertical padding of sections (40px, 64px ≥desktop).
- `block`: between blocks inside a section (heading group ↔ content) and between columns (24px, 32px ≥desktop).
- `group`: between elements of an editorial group (title, text, CTA) and between nav links (16px, 20px ≥desktop).
- `inset`: inner padding of cards, panels, accordions, list rows (16px, 24px ≥desktop).
- `item`: between items of a collection (cards, rows, grid columns) and between elements inside a card (12px, 16px ≥desktop).
- `label`: between a label/eyebrow/caption and what it describes (media ↔ caption) (8px, 12px ≥desktop).
- `control`: inside controls (icon ↔ text) and between chips/tags (8px fixed).
- Reason: spacing expresses a role, so the rhythm stays consistent where the design's raw values do not (ADR-0001).
- Validity: total. Legacy: none.
- Enforcement: check ESLint `no-restricted-syntax` on string and template literals (its message cites R-UI-006); review for what it cannot see (`@apply` in CSS, class names built at runtime, non-role spacing tokens such as `header` or `target`).

## R-UI-007: Colors come only from the theme color tokens
A color in a utility is always a theme color token utility (`bg-primary`, `text-text`, `border-border`), optionally with an opacity modifier (`bg-primary/50`, `text-text-inverse/80`), or one of the CSS keywords `transparent`, `current` and `inherit` (`bg-transparent`, `fill-current`). A color in CSS outside the `@theme` blocks is `var(--color-*)` of a theme token; `var()` is never used in a utility. Arbitrary color values are forbidden: `bg-[#fff]`, `text-[rgb(0,0,0)]`, `bg-[var(--color-accent)]`, `bg-(--color-accent)`, `text-(--x)`, arbitrary properties such as `[color:red]`, and colors in inline styles.
- Reason: a closed palette keeps contrast and brand consistent.
- Validity: total. Legacy: none.
- Enforcement: check ESLint `no-restricted-syntax` on string and template literals (its message cites R-UI-007); review for the rest.

## R-UI-008: The token set is closed
The `@theme` blocks in `app/globals.css` and their responsive overrides (colors, radius, shadow, spacing, containers, aspect ratios, fonts, breakpoints, easing) are created, changed or removed only in a normative task ratified by a human. A code task that needs a new or different token stops with `BLOCKED: decision`. A normative task that adds, renames or removes any custom theme token whose utility tailwind-merge could confuse or fail to group (spacing, including `header` and `target`; containers; shadow; aspect ratios; radius; colors; fonts; breakpoints; easing) also updates the tailwind-merge configuration in `lib/cn.ts` in the same diff, so that `cn` merges the token's utilities with the other classes of the same group.
- Reason: tokens are the design system's contract; changing one changes every screen (ADR-0001).
- Validity: total. Legacy: none.
- Enforcement: review.

## R-UI-009: Breakpoints are declared tokens with values from the canonical formula
Responsive styling uses only the named variants of the `--breakpoint-*` tokens declared in `app/globals.css` (`desktop:`, `wide:` and their `max-*` forms, such as `max-wide:`). Arbitrary breakpoint variants (`min-[…]:`, `max-[…]:`) are forbidden. Named `min-*` forms (`min-desktop:`, `min-wide:`) are forbidden too, so each switch has one spelling (`desktop:`, `wide:`). A width media query in CSS uses only the value of a declared breakpoint token (as `@media (width >= 45rem)` does for `desktop`). Declaring a breakpoint token is a normative task under R-UI-008. Its value must be one of this complete set, derived from the canonical formula in ADR-0003: `40rem` (640px), `45rem` (720px): the value of `desktop`, and only of `desktop`, `45.75rem` (732px), `56.75rem` (908px), `67.75rem` (1084px), `73.25rem` (1172px). Current breakpoints, in order: `desktop` (`45rem`, 720px) < `wide` (`56.75rem`, 908px). `wide:` is a later step within the desktop range, applying from 908px up.
- Yes: `wide:flex-row`; `@media (width >= 56.75rem)`; in a normative task, a new token at `67.75rem`.
- No: `min-[56.75rem]:flex-row` (arbitrary variant, even with an allowed value); `min-wide:flex-row` (write `wide:flex-row`); `@media (width >= 67.75rem)` (no declared token has that value); `--breakpoint-xl: 64rem;` (1024px is not in the set).
- Reason: intermediate layouts sit at evenly spaced points between the canonical mobile and desktop resolutions, never at ad hoc widths (ADR-0003).
- Validity: total. Legacy: none.
- Enforcement: review.

## Known legacy
Only for rules enforced by review. Keep this list short.
- none

## Retired
IDs listed here are never reused.
- none
