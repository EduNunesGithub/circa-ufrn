# ADR-0002: A single `desktop` breakpoint at 45rem

- Status: accepted
- Date: 2026-09-26
- Rules: R-UI-006

## Context
The product has only two layouts, mobile and desktop, with no intermediate size. Tailwind's default breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`) invite intermediate layouts the design does not have, and the theme switched to the larger layout at `lg` (64rem), leaving 45–64rem screens on the mobile layout.

## Decision
The `@theme` in `app/globals.css` resets the breakpoints (`--breakpoint-*: initial`) and declares only `--breakpoint-desktop: 45rem` (720px). Responsive variants use `desktop:`. The `section` spacing token is 48px, 80px ≥desktop.

## Alternatives considered
- Keep Tailwind's default breakpoints and use only `lg`: no theme change, but the unused breakpoints stay available and the switch stays at 64rem.
- Keep the defaults and add `desktop`: two ways to express the same switch.

## Consequences
- `sm:`, `md:`, `lg:`, `xl:` and `2xl:` no longer generate CSS; only `desktop:` does.
- The breakpoint is a theme token, so it changes only under R-UI-008. tailwind-merge needs no configuration for it: it compares variants by name.
- An intermediate layout, if ever needed, requires a new normative decision.
