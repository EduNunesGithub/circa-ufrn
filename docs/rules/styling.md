---
paths:
  - "app/**/*.{css,ts,tsx}"
  - "components/**/*.{ts,tsx}"
  - "contexts/**/*.{ts,tsx}"
  - "hooks/**/*.{ts,tsx}"
  - "lib/**/*.{ts,tsx}"
---
# Styling

## R-UI-001: Every dimension and spacing is a multiple of 4px
Dimensions and spacings (width, height, padding, gap, inset, translate, border-radius, etc.) are multiples of 4px. In Tailwind v4: only integer steps of the spacing scale; fractional steps (`0.5`, `1.5`, `2.5`, `3.5`) and arbitrary values (`[13px]`) are forbidden. Border-radius included: `rounded-sm` (4px), `rounded-lg` (8px), `rounded-full` are allowed; `rounded-xs` (2px) and `rounded-md` (6px) are not. Exempt: border widths (including 1px dividers such as `h-px`/`w-px`), ring and outline widths and offsets, and font sizes. Named Tailwind size tokens that are not spacing steps are allowed when their value is a multiple of 4px (`max-w-md` 448px, `rounded-lg` 8px; `rounded-md` 6px stays forbidden). Outside this rule: keyword sizes (`full`, `screen`, `auto`, `fit`, `min`, `max`), em-based sizes such as `max-w-prose`, and percentage fractions (`w-1/2`, `w-1/3`, …); only fixed values must be multiples of 4px.
- Reason: a single rhythm keeps layouts consistent and avoids one-off values.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-UI-002: Space between elements is always `gap`
Space between sibling elements uses `gap`. Padding is used only for a container's internal space. Margin utilities (`m-*`, `mt-*`, `mx-*`, etc.) and `space-x-*`/`space-y-*` are forbidden, except `mx-auto` for centering and negative margins.
- Reason: spacing is owned by the parent layout, so components stay context-free.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-UI-003: Typography is defined only in `app/globals.css`
Font family, font size, font weight and tracking are defined only in `app/globals.css`: base styles for elements (`h1`, `h2`, `p`, …) inside `@layer base` with `@apply` (for example `@apply font-bold text-2xl;`, no colon), plus named typography classes defined there for special cases. Named typography classes use the `typo-*` prefix (for example `typo-caption`, `typo-label`, `typo-display`), never a Tailwind utility prefix such as `text-*`; they are project classes, not the `@tailwindcss/typography` plugin. Components and pages do not apply font-family (`font-sans`, `font-mono`, …), font-size (`text-<size>`), font-weight (`font-bold`, …) or tracking (`tracking-*`) utilities directly.
- Reason: one source of typographic truth; text looks the same everywhere.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-UI-004: Font sizes use Tailwind tokens; line-height is never set
Every font size is one of Tailwind's font-size tokens (`text-xs`, `text-sm`, `text-2xl`, …), never an arbitrary value. Line-height is never set explicitly: `leading-*` and the slash syntax (`text-sm/6`) are forbidden everywhere, including `app/globals.css`.
- Reason: the token scale already pairs each size with its line-height.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-UI-005: The design is a visual reference, not a specification
The Pen.dev design guides the look but is not translated 1:1: its spacings and dimensions are not copied when they break these rules. When a design value is not valid under R-UI-001, snap to the nearest value valid under R-UI-001.
- Reason: the design has technical inconsistencies (slightly different gaps, section paddings differing between pages).
- Validity: total. Legacy: none.
- Enforcement: review.

## Known legacy
Only for rules enforced by review. Keep this list short.
- none

## Retired
IDs listed here are never reused.
- none
