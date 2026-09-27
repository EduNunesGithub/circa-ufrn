---
paths:
  - "app/**/*.tsx"
  - "components/**/*.tsx"
  - "contexts/**/*.{ts,tsx}"
  - "lib/**/*.{ts,tsx}"
---
# Components

Adopted dependencies: `@base-ui/react` (R-COMP-001) and `react-icons` (R-COMP-002). Installing them needs no further decision.

## R-COMP-001: UI primitives come from Base UI, never from native elements
Scope: `app/**/*.tsx`, `components/**/*.tsx`, `contexts/**/*.tsx`. When Base UI (`@base-ui/react`, the project's standard component library) provides a primitive for a UI element (for example Button, Input, Checkbox, Select, Dialog, Menu, Tabs, Accordion, Collapsible), use that Base UI component, or a project component in `components/` that wraps it, instead of building it directly with native elements (for example `<button>`, `<input>`, `<select>`, `<dialog>`, `<details>`, `<form>`, `<fieldset>`, `<hr>`, `<progress>`, `<meter>`) or by hand (a hand-built menu, tabs, accordion or popover). A native element is allowed only while Base UI has no equivalent primitive; this currently includes `<textarea>` and `<label>`. A native `<input>` type with no Base UI equivalent (for example `type="file"`, `"hidden"`, `"color"`, `"date"`) is allowed only with a line-level `eslint-disable-next-line no-restricted-syntax -- <reason>` naming the reason. Before building your own implementation of a primitive, check Base UI and `components/`; wrapping a Base UI primitive in a project component is allowed.
- Yes: `import { Button } from "@base-ui/react/button";` then `<Button onClick={save}>Save</Button>`
- No: `<button onClick={save}>Save</button>`
- Reason: one tested, accessible source of primitives instead of per-screen reimplementations.
- Validity: total. Legacy: none.
- Enforcement: check ESLint `no-restricted-syntax` on native `<button>`, `<input>`, `<select>`, `<dialog>` and `<details>` JSX elements (its message cites R-COMP-001); review for the rest (other native elements with a Base UI equivalent, hand-built primitives, reuse of existing project components, the reason on each disable).

## R-COMP-002: Icons come only from the Lucide set of react-icons
Scope: `app/**/*.tsx`, `components/**/*.tsx`, `contexts/**/*.{ts,tsx}`, `lib/**/*.{ts,tsx}`. Every icon is a component imported from `react-icons/lu` (the Lucide set of `react-icons`, the set the design uses). Other `react-icons` sets (`react-icons/fa`, `react-icons/md`, …), other icon packages (`lucide-react`, `@heroicons/react`, …), custom icons built with `GenIcon` or `IconBase`, inline SVG icons and icon image files are forbidden. Types such as `IconType` may be imported. The rule covers UI icons only: Next.js metadata icons (`app/icon.*`, `app/apple-icon.*`, the favicon) are outside it.
- Yes: `import { LuSearch } from "react-icons/lu";`
- No: `import { FaSearch } from "react-icons/fa";`, or an inline `<svg>` drawing an icon.
- Reason: a single icon set keeps the visual language consistent with the design.
- Validity: total. Legacy: none.
- Enforcement: check ESLint `no-restricted-imports` on other `react-icons/*` sets and common icon packages (its message cites R-COMP-002); review for the rest (`GenIcon`/`IconBase` custom icons, inline SVG icons, icon image files, unlisted icon packages).

## Known legacy
Only for rules enforced by review. Keep this list short.
- none

## Retired
IDs listed here are never reused.
- none
