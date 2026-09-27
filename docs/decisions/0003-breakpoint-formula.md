# ADR-0003: Breakpoints derived from canonical mobile and desktop

- Status: accepted
- Date: 2026-09-26
- Rules: R-UI-008, R-UI-009

## Context
ADR-0002 set a single `desktop` breakpoint at 45rem and left any further breakpoint to a future decision. Some layouts (the footer, for example) may need an extra step that wrapping alone does not give. Without a rule, each extra breakpoint would be picked ad hoc, as Tailwind's defaults (`sm`, `md`, `lg`, …) were, and the values would drift.

## Decision
The canonical desktop resolution is 1440px and the canonical mobile resolution is 375px.
- The `desktop` breakpoint is 1440 / 2 = 720px (`45rem`), unchanged.
- An intermediate breakpoint sits between the canonical mobile and desktop resolutions: `375 + k × (1440 − 375) / n` px, with `2 ≤ n ≤ 4` and `k = 1 … n−1`, rounded to the nearest multiple of 4px and written in rem. For n=2: 908px (`56.75rem`); for n=3: 732px (`45.75rem`) and 1084px (`67.75rem`); for n=4: 640px (`40rem`), 908px and 1172px (`73.25rem`).
- Ties round up. This is the human's decision (n=3, k=1: 730px → 732px).
- `n` is capped at 4 so the set stays small, well spaced and checkable by lookup: without a cap almost any multiple of 4px between 376px and 1440px would be reachable (1024px is n=18, k=11), and the formula would constrain nothing.
- R-UI-009 lists the complete set. The formula limits which breakpoint tokens may be declared; declaring one stays a normative task under R-UI-008. Responsive styling uses only the named variants of declared tokens; arbitrary breakpoint variants are forbidden, and a CSS width media query uses only a declared token's value.
- Named `min-*` forms (`min-desktop:`, `min-wide:`) are forbidden, so each switch has one spelling (`desktop:`, `wide:`); `max-*` forms stay allowed.
- The `@theme` in `app/globals.css` keeps resetting the defaults (`--breakpoint-*: initial`) and now declares `--breakpoint-desktop: 45rem` and `--breakpoint-wide: 56.75rem` (n=2).

## Alternatives considered
- Keep a single breakpoint (ADR-0002): simplest, but a layout that needs an extra step has no sanctioned value.
- Tailwind's default breakpoints: arbitrary values unrelated to the canonical resolutions, and several ways to express the same switch.
- The formula with no cap on `n`: nearly every 4px step is reachable, so the rule would forbid almost nothing and each check would need a search for `n` and `k`.
- Allow any in-set value through arbitrary variants (`min-[56.75rem]:`): no token needed, but code tasks could add breakpoints without a normative decision.
- Choose each value case by case: fits each layout, but values drift and do not relate to each other.

## Consequences
- Breakpoint values are evenly spaced between the canonical mobile and desktop resolutions, so they can be derived rather than debated.
- Order: `desktop` (45rem, 720px) < `wide` (56.75rem, 908px). `wide:` is a later step within the desktop range, applying from 908px up. Code tasks may use it; they still cannot add breakpoints.
- Breakpoint tokens also feed Tailwind's `max-w-screen-*` utilities, so `lib/cn.ts` lists them under tailwind-merge's `breakpoint` theme key, and R-UI-008 names breakpoints among the token kinds that need it. Variants need no configuration: tailwind-merge compares them by name.
- A reviewer checks a breakpoint token's value by lookup in R-UI-009's list; no arithmetic is needed.
