# ADR-0004: Motion for React with a closed motion vocabulary

- Status: accepted
- Date: 2026-09-27
- Rules: R-MOTION-001, R-MOTION-002, R-MOTION-003, R-MOTION-004, R-MOTION-005, R-MOTION-006, R-MOTION-007, R-MOTION-008, R-MOTION-009, R-MOTION-010, R-MOTION-011, R-MOTION-012, R-UI-008

## Context
The site needs entrance and granular animations (collections, media, metrics, a chart, the mobile menu, the carousel). Without a decision each section would pick its own library, durations, curves and effects, and motion would drift the way raw spacing and colors did before ADR-0001. The existing transitions already disagree: some rely on the implicit default duration and curve, the mobile menu uses `duration-300` and `ease-out`, and the carousel uses Swiper's default speed.

## Decision
- Three mutually exclusive kinds of change over time, defined once in the Terms of `docs/rules/motion.md`: entrances (a section appearing on viewport entry), granular animations (a closed list) and state transitions (CSS transitions of an element's own style in response to its interface state). A change with zero duration is not an animation.
- Adopt `motion` (Motion for React), imported only from `motion/react`. `framer-motion` and the other `motion` entries are forbidden, so there is one library and one entry point.
- Animation values set in Motion or JavaScript (durations, delays, curve, distances, stagger, the carousel's Swiper speed) live in one module, `lib/motion.ts`.
- Durations: 0.25s, 0.5s, 0.75s, 1s by role, always explicit; every state transition uses 0.25s; the mobile menu open/close and the carousel slide change 0.5s; the carousel progress bar and the chart bars 0.75s; the hero and the metric count-up 1s; delays are multiples of 0.25s; stagger 0.25s.
- One ease-out curve, `cubic-bezier(0.22, 1, 0.36, 1)`, shared by Motion and by CSS transitions through the `--ease-standard` theme token; both declarations must match. The default easings are reset (`--ease-*: initial`), like colors, radius, shadow and breakpoints.
- A closed catalog of entrances: `rise`, `reveal`, `settle`, `slide`, each including an opacity fade. A section may have no entrance; an animated section uses exactly one, and two animated sections immediately next to each other in `<main>` never use the same one (a section without an entrance separates them). A new entrance is a normative change.
- Granular animations only for collection items, images and media, metrics, the chart, the mobile menu and the carousel; `animate-*` utilities and CSS keyframes are forbidden.
- Viewport-triggered animations run once per page load (each time the page is opened, including a client-side navigation to it; no replay while it stays open), on first viewport entry; interaction-triggered animations (mobile menu, carousel) run on each interaction.
- Reduced motion applies to every kind: displacement, scale, clip-path and counting happen instantly; opacity changes remain as a 0.25s fade; color changes of state transitions are unaffected. `reducedMotion="user"` in `components/motion-provider` is not enough on its own, so each primitive and granular animation enforces it too, as do CSS transitions and Swiper.
- Entrances and granular animations change only opacity and transform (plus clip-path for `reveal`); a metric's count-up animates a number rendered as text. State transitions may animate any property and are always CSS, never Motion.
- Sections stay server components, and no component becomes a client component only to animate; it composes an animation primitive instead (the chart animates its bars through a primitive). Values from `motion/react` are imported only by animation primitives (the provider included) and by components already client for another reason (the mobile menu, the carousel); `lib/motion.ts` may import types only.

## Alternatives considered
- CSS-only animations (Tailwind utilities and keyframes): no dependency, but viewport triggers, stagger, count-up and reduced-motion handling would be rebuilt by hand in each component.
- `framer-motion`: the same library under its former name; keeping both names would split imports.
- An open set of entrances chosen per section: more freedom, but the page loses a recognisable rhythm and review has nothing to check against.
- Requiring every section to animate: more motion than content needs; existing static sections would all become defects.
- One repetition rule for every animation: "once per page load" would make the mobile menu and the carousel animate only the first time.
- Values written inline per component: simplest locally, but the scale cannot be changed in one place.

## Consequences
- The later code task installs `motion` and creates `lib/motion.ts`, the provider and the primitives; no further decision is needed for that.
- ESLint enforces the import restriction and the duration and curve utilities; the rest is review.
- Existing transitions are legacy: the mobile menu's `duration-300`/`ease-out` is in `eslint-suppressions.json` (after the easing reset, `ease-out` generates no CSS until migrated); implicit default durations and curves, the Swiper default speed and missing reduced-motion handling are listed under "Known legacy" in `docs/rules/motion.md`. A later migration task empties the legacy.
- Adding a curve or an entrance, or changing a duration, is a normative task.
