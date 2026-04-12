# Refactoring Plan — 4-it

**Goal:** Transform the codebase from a monolithic structure into a modular, well-organized architecture while maintaining full backward compatibility.

Each phase is self-contained. Run `make check` after every phase and commit before proceeding.

---

## Issue #1 — sections/ Directory Bloat

**Objective:** Move page-specific sections from `src/components/sections/` to `src/pages/sections/` to separate reusable UI components from page-specific content.

### Current State

`src/components/sections/` contains **40 files** (20 components) mixing:

- **Reusable section patterns:** `FeatureListSection`, `TestimonialsSection`, `ServicesSection`, `ScrollCardsSection`
- **Page-specific sections:** `HeroBreadcrumbs`, `SecondaryHero`, `InterestingFacts`, `AchievementsSection` (tied to specific pages)

### Analysis

| Component                      | Type                           | Action                         |
| ------------------------------ | ------------------------------ | ------------------------------ |
| `HeroBreadcrumbs`              | Page-specific (home page hero) | Move to `pages/sections/`      |
| `SecondaryHero`                | Page-specific                  | Move to `pages/sections/`      |
| `InterestingFacts`             | Page-specific                  | Move to `pages/sections/`      |
| `AchievementsSection`          | Page-specific                  | Move to `pages/sections/`      |
| `CasesSection`                 | Page-specific                  | Move to `pages/sections/`      |
| `CertificatesSection`          | Page-specific                  | Move to `pages/sections/`      |
| `FeatureBanner`                | Reusable                       | Keep in `components/sections/` |
| `FeatureListSection`           | Reusable                       | Keep in `components/sections/` |
| `TestimonialsSection`          | Reusable                       | Keep in `components/sections/` |
| `ServicesSection`              | Reusable                       | Keep in `components/sections/` |
| `ScrollCardsSection`           | Reusable                       | Keep in `components/sections/` |
| `HighlightGridSection`         | Reusable                       | Keep in `components/sections/` |
| `StickyHeadingListSection`     | Reusable                       | Keep in `components/sections/` |
| `ProductTierComparisonSection` | Reusable                       | Keep in `components/sections/` |
| `SupportPlansSection`          | Reusable                       | Keep in `components/sections/` |
| `CtaLinksListSection`          | Reusable                       | Keep in `components/sections/` |
| `SplitHighlightPanel`          | Reusable                       | Keep in `components/sections/` |
| `StackedFeatureCardsSection`   | Reusable                       | Keep in `components/sections/` |
| `ContactRequestForm`           | Page-specific (contact form)   | Move to `pages/sections/`      |
| `ServiceGridSection`             | Delivery / услуги в сетке      | `components/sections/`         |

### Execution Plan

**Step 1.1** — Create target directory:

```
src/pages/sections/
```

**Step 1.2** — Move page-specific files:

```
# Move files
mv src/components/sections/HeroBreadcrumbs.* src/pages/sections/
mv src/components/sections/SecondaryHero.* src/pages/sections/
mv src/components/sections/InterestingFacts.* src/pages/sections/
mv src/components/sections/AchievementsSection.* src/pages/sections/
mv src/components/sections/CasesSection.* src/pages/sections/
mv src/components/section/CertificatesSection.* src/pages/sections/
mv src/components/sections/ContactRequestForm.* src/pages/sections/
```

**Step 1.3** — Update imports:
Find all pages using these components and update imports:

- `src/pages/index.tsx` (likely uses HeroBreadcrumbs)
- `src/pages/support.tsx` (likely uses SecondaryHero, InterestingFacts)
- Any page using moved components

**Step 1.4** — Verify:\*\*

```bash
make check
```

**Expected Result:**

- `src/components/sections/` reduced from **40 files** to **~24 files** (12 reusable components)
- `src/pages/sections/` contains **16 files** (8 page-specific sections)
- Clear separation: `components/sections/` = reusable UI patterns; `pages/sections/` = page content

**Commit:** `refactor(sections): move page-specific sections to pages/sections/`

---

## Issue #2 — CSS File Duplication (.css + .tsx)

**Objective:** Reduce file duplication caused by separate `.css` files for each component.

### Current State

Every component has a paired `.css` file:

```
HeroBreadcrumbs.css
HeroBreadcrumbs.tsx
FeatureListSection.css
FeatureListSection.tsx
```

**Problem:** Doubles the file count, tight coupling not enforced by tooling, no scope guarantee.

### Options

| Approach                          | Pros                                             | Cons                           | Effort |
| --------------------------------- | ------------------------------------------------ | ------------------------------ | ------ |
| **CSS Modules** (`.module.css`)   | Explicit scoping, keeps files separate, low risk | Still separate files           | Low    |
| **CSS-in-JS** (styled-components) | Co-located, scoped, dynamic styles               | Runtime cost, npm dependency   | Medium |
| **Tailwind**                      | No CSS files, utility-first, small bundle        | Learning curve, HTML verbosity | High   |
| **Vanilla Extract**               | Type-safe, zero-runtime, modern                  | Build config changes           | Medium |
| **Keep as-is**                    | Zero work                                        | Continues the bloat            | None   |

### Recommendation

**Phase 1 (now):** Fix folder structure (`sections/` → `pages/sections/`)

**Phase 2 (later):** Migrate to **CSS Modules** (`.module.css`) or **Tailwind** depending on team preference.

**Not part of Issue #1** — separate concern from structural reorganization.

---

## Issue #3 — Redundant Component Directories

**Objective:** Collapse `src/components/`, `src/shared/ui/`, and `src/widgets/` into a single `src/components/` hierarchy.

### Current State

Three root-level directories for similar concerns:

| Directory | Contents | Purpose |
|-----------|----------|----------|
| `src/components/` | `sections/` (20), `grids/` (5), `domain/` (2), `layout/` (1) | Page sections, layout blocks |
| `src/shared/ui/` | `Button`, `Input`, `PhoneInput` | Atomic UI primitives |
| `src/widgets/` | `header/`, `footer/`, `scroll-to-top/` | Layout scaffolding |

**Problem:** Over-fragmentation for a ~100-file codebase. `shared/` implies cross-project sharing; `widgets/` at root creates ambiguity with `components/layout/`.

### Analysis

| Category | Current Location | Size | Nature |
|----------|-----------------|------|--------|
| **Atoms** | `shared/ui/` | 3 components | Stateless, reusable primitives |
| **Layout Scaffolding** | `widgets/` | 3 self-contained units | Full-width, always-present (Header, Footer) |
| **Molecules/Organisms** | `components/sections/` | 20 components | Full-width semantic sections |
| **Layout Wrappers** | `components/grids/` | 5 components | Grid-based containers |
| **Domain** | `components/domain/` | 2 components | Cybersecurity-specific |
| **Layout Wrapper** | `components/layout/` | 1 component | PageLayout wrapper |

### Recommendation

**Collapse to single `src/components/`** with subdirectories:

```
src/components/
├── ui/           ← from shared/ui/ (Button, Input, PhoneInput)
├── widgets/      ← from widgets/ (Header, Footer, ScrollToTop)
├── sections/     ← keep (FeatureListSection, etc.)
├── grids/        ← keep (CardsGridSection, etc.)
├── domain/       ← keep (cybersecurity sections)
└── layout/       ← keep (PageLayout)
```

**Rationale:**
- `shared/` is typically for cross-project/shared-package code; these are just small components
- `widgets/` as root-level peer confuses "layout" vs "widget" concepts
- All are React components; hierarchy should reflect scale (atom → molecule → organism), not artificial separation
- Reduces cognitive load: developers check `src/components/` once, not three places

**Alternative** (Atomic Design purist):
- Merge `widgets/` → `components/layout/` (Header/Footer are layout elements)
- Keep `sections/`, `grids/`, `domain/` separate
- Result: `components/{ui, layout, sections, grids, domain}`

### Execution Plan

**Step 3.1** — Move UI primitives:

```bash
mkdir -p src/components/ui
mv src/shared/ui/* src/components/ui/
rm -rf src/shared/
```

**Step 3.2** — Move widgets:

```bash
mv src/widgets src/components/
```

**Step 3.3** — Update all imports:

Find and replace:
- `@/shared/ui/*` → `@/components/ui/*`
- `@/widgets/*` → `@/components/widgets/*`

**Step 3.4** — Verify:

```bash
make check
```

**Expected Result:**

- `src/shared/` removed
- `src/widgets/` removed  
- `src/components/` now contains `ui/`, `widgets/`, `sections/`, `grids/`, `domain/`, `layout/`
- Import paths shortened and unified under `@/components/`

**Commit:** `refactor(folders): collapse shared/ui and widgets into components/`

---
