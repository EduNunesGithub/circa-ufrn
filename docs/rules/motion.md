---
paths:
  - "app/**/*.{css,ts,tsx}"
  - "components/**/*.{ts,tsx}"
  - "contexts/**/*.{ts,tsx}"
  - "hooks/**/*.{ts,tsx}"
  - "lib/**/*.{ts,tsx}"
---
# Motion

Adopted dependency: `motion` (Motion for React). Installing it needs no further decision.

Terms (the only place these kinds are defined; every rule uses them as written here). A **section** is a top-level content band rendered inside a page's `<main>` (on the home page, the `home-*` components); the header and footer are not sections. Every allowed change over time is exactly one of three mutually exclusive kinds. An **entrance** is a section appearing when it enters the viewport. A **granular animation** is one of the cases listed in R-MOTION-007. A **state transition** is a CSS transition of an element's own style in response to its interface state (hover, focus, pressed, current/active, open, disabled) that is not a granular animation. The mobile menu's open/close, the carousel's slide change and its progress bar are granular animations; every transition of a control inside them (hover, focus, pressed, current/active, disabled) is a state transition. **Viewport-triggered**: entrances and the granular animations of collection items, images and media, metrics and the chart. **Interaction-triggered**: the granular animations of the mobile menu and the carousel. A change with zero duration (for example `swiper.slideTo(0, 0)`) is not an animation.

## R-MOTION-001: Motion is imported only from `motion/react`
Animations use the `motion` package, imported only from `motion/react`. `framer-motion` (any entry) and every other `motion` entry (`motion`, `motion/mini`, `motion/react-client`, …) are forbidden.
- Reason: one animation library and one entry point (ADR-0004).
- Validity: total. Legacy: none.
- Enforcement: check ESLint `no-restricted-imports` (its message cites R-MOTION-001); review for dynamic imports (`import()`, `require`).

## R-MOTION-002: Motion and JavaScript animation values come only from `lib/motion.ts`
Every animation value set in Motion or JavaScript (duration, delay, curve, distance, stagger, and the carousel's Swiper `speed`) comes from the single module `lib/motion.ts`. Components never write their own such values, not even values equal to the scale.
- Yes: `const transition = { duration: DURATION.text, ease: EASE }`, both imported from `@/lib/motion`.
- No: `const transition = { duration: 0.5, ease: [0.22, 1, 0.36, 1] }`.
- Reason: one vocabulary keeps motion consistent and changeable in one place (ADR-0004).
- Validity: new-code. Legacy: "Known legacy" below.
- Enforcement: review.

## R-MOTION-003: Every duration and delay comes from the time scale
Every duration is 0.25s, 0.5s, 0.75s or 1s by role: 0.25s for micro-interactions and every state transition; 0.5s for text and items, the mobile menu open/close and the carousel slide change; 0.75s for blocks and media, the carousel progress bar and the chart bars; 1s for the hero and the metric count-up only. Every duration is set explicitly; implicit defaults are forbidden (a CSS transition without a duration utility, Swiper's default `speed`). Every delay is a multiple of 0.25s, and the stagger between collection items is 0.25s. In CSS the only duration utilities are `duration-250`, `duration-500`, `duration-750` and `duration-1000`.
- Reason: a short, stepped scale gives a recognisable rhythm (ADR-0004).
- Validity: new-code. Legacy: baseline `eslint-suppressions.json`; "Known legacy" below.
- Enforcement: check ESLint `no-restricted-syntax` on string and template literals for `duration-*` classes outside the scale (its message cites R-MOTION-003); review for implicit defaults, delays (`delay-*`), `@apply` or raw `transition` in CSS, arbitrary properties, roles and the values in `lib/motion.ts`.

## R-MOTION-004: A single ease-out curve
Every animated change uses the same ease-out curve, `cubic-bezier(0.22, 1, 0.36, 1)`, set explicitly; implicit default curves are forbidden. It is declared twice and both values must match: the `--ease-standard` token in the `@theme` of `app/globals.css` (utility `ease-standard`; the default easings are reset with `--ease-*: initial`) and the curve exported by `lib/motion.ts`. Other `ease-*` utilities and arbitrary curves are forbidden.
- Reason: one curve makes every movement feel like the same system (ADR-0004).
- Validity: new-code. Legacy: baseline `eslint-suppressions.json`; "Known legacy" below.
- Enforcement: check ESLint `no-restricted-syntax` on string and template literals for `ease-*` classes other than `ease-standard` (its message cites R-MOTION-004); review for implicit defaults, `@apply` or raw `transition` in CSS, arbitrary properties and the matching values.

## R-MOTION-005: Entrances come from a closed catalog
An entrance is one of: `rise` (fades in while moving up), `reveal` (a clip-path mask opens), `settle` (fades in while scaling 1.04 → 1), `slide` (fades in while moving in from the side). Every entrance includes an opacity fade. Every displacement is a multiple of 4px (consistent with R-UI-001); its value comes from `lib/motion.ts` (R-MOTION-002). A new entrance is added only through a normative task (`rule-change`).
- Reason: a small catalog gives variety without improvisation (ADR-0004).
- Validity: total. Legacy: none.
- Enforcement: review.

## R-MOTION-006: Immediately adjacent animated sections use different entrances
A section may have no entrance. An animated section uses exactly one entrance from the catalog (R-MOTION-005). Two animated sections that are immediately next to each other in `<main>` order never use the same entrance; a section without an entrance between them separates them.
- Reason: controlled variety; the page does not repeat one gesture (ADR-0004).
- Validity: total. Legacy: none.
- Enforcement: review.

## R-MOTION-007: Granular animations only in the listed cases
The granular animations are: collection items (staggered), images and media, metrics (count up to the final value), the chart (bars grow), the mobile menu (open/close) and the carousel (slide change and progress bar). No other element animates on its own. Anything else that changes over time is a state transition (R-MOTION-011) or is forbidden, including Tailwind `animate-*` utilities and CSS keyframes.
- Reason: motion stays meaningful when it is rare (ADR-0004).
- Validity: total. Legacy: none.
- Enforcement: review.

## R-MOTION-008: Viewport-triggered animations run once; interaction-triggered ones on each interaction
A viewport-triggered animation runs once per page load, when the element first enters the viewport. "Once per page load" means once each time the page is opened, including a client-side (Next.js) navigation to it; it does not replay while the page stays open, even when the element leaves the viewport and comes back. An interaction-triggered animation runs on each interaction.
- Reason: repeated entrances distract from content; interactions need feedback every time (ADR-0004).
- Validity: total. Legacy: none.
- Enforcement: review.

## R-MOTION-009: Reduced motion keeps only a 0.25s opacity fade
When the system requests reduced motion, no change animates displacement, scale, clip-path or counting: those changes happen instantly (a metric shows its final value). Opacity changes remain as a 0.25s fade, so every entrance becomes a 0.25s fade. Color changes of state transitions are unaffected. `components/motion-provider` sets `reducedMotion="user"`, which is not enough on its own: each animation primitive and granular animation enforces this itself (for example with `useReducedMotion`), and so do CSS transitions (`motion-reduce:` variants) and Swiper.
- Reason: accessibility; motion must not harm users who opt out (ADR-0004).
- Validity: new-code. Legacy: "Known legacy" below.
- Enforcement: review.

## R-MOTION-010: Entrances and granular animations change only opacity, transform and the reveal clip-path
Entrances and granular animations animate only the style properties `opacity` and `transform`, plus `clip-path` for the `reveal` entrance. A metric's count-up animates a number rendered as text, not a style, and is allowed. State transitions may animate any property.
- Reason: these properties animate on the compositor without layout work.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-MOTION-011: State transitions are CSS transitions
State transitions are CSS transitions, never Motion animations (no `whileHover`, `whileTap` or `whileFocus`). Their duration follows R-MOTION-003 and their curve R-MOTION-004.
- Yes: `transition-colors duration-250 ease-standard`.
- No: a `motion.a` with `whileHover`.
- Reason: a CSS transition is enough for a state transition; no library is needed.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-MOTION-012: Sections stay server components; animation lives in client primitives
Sections stay server components, and no component becomes a client component only to animate: it composes an animation primitive instead (the chart stays a server component and animates its bars through a primitive). Animation primitives are client components in `components/<name>/`, one per folder, whose only job is animation (for example `components/reveal`, `components/stagger`, `components/count-up`). `components/motion-provider` (`MotionConfig reducedMotion="user"`) is an animation primitive and wraps the app in `app/layout.tsx` as soon as anything uses Motion. Values from `motion/react` are imported only by animation primitives and by components that are already client components for another reason (the mobile menu and the carousel). `lib/motion.ts` may import only types (`import type`) from `motion/react`; no module other than these imports from `motion/react`.
- Reason: animation stays out of the server-rendered structure and the client bundle stays small (ADR-0004).
- Validity: total. Legacy: none.
- Enforcement: review.

## Known legacy
Only for rules enforced by review (or the review part of a checked rule). Keep this list short.
- lib/control-styles.ts: R-MOTION-003, R-MOTION-004 (state transitions with implicit duration and curve)
- components/nav-item/index.tsx: R-MOTION-003, R-MOTION-004 (state transitions with implicit duration and curve)
- components/carousel-controls/index.tsx: R-MOTION-003, R-MOTION-004, R-MOTION-009 (progress bar)
- components/carousel/index.tsx: R-MOTION-002, R-MOTION-003, R-MOTION-004, R-MOTION-009 (Swiper default speed and curve, no reduced-motion handling)
- components/header/mobile-menu/index.tsx: R-MOTION-009 (`motion-reduce:transition-none` removes the backdrop's 0.25s fade); its R-MOTION-003 and R-MOTION-004 hits are in the ESLint baseline.

## Retired
IDs listed here are never reused.
- none
