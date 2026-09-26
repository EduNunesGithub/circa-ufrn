---
paths:
  - "app/**"
  - "components/**"
  - "contexts/**"
  - "hooks/**"
  - "lib/**"
---
# File structure

## R-STRUCT-001: File and folder names are kebab-case
Every file and folder name is kebab-case: lowercase letters and digits, starting with a letter, words separated by hyphens. Exempt: Next.js special files (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`, `route.ts`, etc.) and Next.js route folder syntax: `(group)`, `[slug]`, `[...slug]`, `[[...slug]]`, `_private`, `@slot`, and the interception prefixes `(.)`, `(..)`, `(...)`, `(..)(..)`. The syntax is exempt; the names inside or after it are kebab-case: `[post-id]`, `@modal-slot`, `(..)photo-view`.
- Reason: one predictable spelling, no case-sensitivity bugs across operating systems.
- Validity: total. Legacy: none.
- Enforcement: check ESLint `check-file/filename-naming-convention` and `check-file/folder-naming-convention` for `.ts`/`.tsx` files. In `app/` and `lib/` the messages cite R-STRUCT-001; in `app/` this includes the names inside route syntax and after interception prefixes. In `components/`, `contexts/` and `hooks/`, a non-kebab folder is reported with the R-STRUCT-003 message and a non-`index` file name with the R-STRUCT-003 or R-STRUCT-004 message. Review for other file types.

## R-STRUCT-002: Components, hooks and contexts live only in their root folders
Every component lives in `components/`, every hook in `hooks/`, every context in `contexts/`, at the repository root, even when a single route uses it. No component, hook or context is defined anywhere else. Only exception: a Next.js special file in `app/` defines its own default-exported component.
- Reason: one place to look for each kind of unit; no hidden duplicates inside routes.
- Validity: total. Legacy: none.
- Enforcement: review.

## R-STRUCT-003: Each component, hook or context has its own folder with an index file
A component lives in `components/<name>/index.tsx`, a hook in `hooks/use-<name>/index.ts`, a context in `contexts/<name>-context/index.tsx`. The folder name mirrors the exported identifier in kebab-case: `useCart` → `hooks/use-cart/`, `ProductCard` → `components/product-card/`. A context folder mirrors the context identifier (`CartContext` → `contexts/cart-context/`), even when the file also exports a provider.
- Reason: the path tells what a unit is and what it exports.
- Validity: total. Legacy: none.
- Enforcement: check ESLint `check-file/filename-blocklist` and `check-file/folder-naming-convention` for placement, extension and folder pattern (messages cite R-STRUCT-003); review for the identifier-to-folder match.

## R-STRUCT-004: A unit folder contains only its index file
A component, hook or context folder contains only its `index` file, plus, for components only, sub-component folders (R-STRUCT-005). No auxiliary files (`types.ts`, `variants.ts`, `utils.ts`, styles, etc.). Types stay in the index file; extracted logic goes to `lib/` or `hooks/`.
- Reason: a unit stays small and self-contained; extraction goes to a shared, discoverable place.
- Validity: total. Legacy: none.
- Enforcement: check ESLint `check-file/filename-naming-convention` for `.ts`/`.tsx` files (its message cites R-STRUCT-004); review for other file types.

## R-STRUCT-005: At most one component per file; sub-components nest inside their parent
Every file defines at most one component. A sub-component lives in a folder nested inside its parent, `components/<parent>/<sub>/index.tsx`, and is imported only by that parent. If anything else needs it, promote it to a top-level folder in `components/`.
- Reason: each file has one responsibility, and ownership of a sub-component is visible in its path.
- Validity: total. Legacy: none.
- Enforcement: check ESLint `react/no-multi-comp` for one component per file (its message cannot cite R-STRUCT-005); review for "imported only by its parent".

## Known legacy
Only for rules enforced by review. Keep this list short.
- none

## Retired
IDs listed here are never reused.
- none
