# Refactoring Plan — 4-it

**Goal:** Transform the codebase from a monolithic structure into a modular, well-organized architecture while maintaining full backward compatibility.

Each phase is self-contained. Run `make check` after every phase and commit before proceeding.

---

## Phase 1 — Routing Architecture

**Objective:** Eliminate the single-file routing bottleneck in `src/app/main.tsx` (currently 30+ imports, 25+ routes).

### Step 1.1 — Extract Route Modules

Create route group files to split the monolith:

**Create `src/routes/general.tsx`**:

- Imports: Home redirect, TechnicalSupport, Bitrix24, EDMS, Websites, Virtualization
- Export as `GeneralRoutes` component

**Create `src/routes/cybersecurity.tsx`**:

- Imports: All cybersecurity routes (core, audit, szi, delivery products)
- Export as `CybersecurityRoutes` component

**Create `src/routes/index.ts`**:

- Barrel export: `export { GeneralRoutes } from './general'`
- `export { CybersecurityRoutes } from './cybersecurity'`

**Update `src/app/main.tsx`**:

- Replace all individual page imports with: `import { GeneralRoutes, CybersecurityRoutes } from '@/routes'`
- Replace inline `<Route>` elements with `<GeneralRoutes />` and `<CybersecurityRoutes />`

**Result:** `main.tsx` drops from 94 lines to ~40 lines with clear separation.

**Commit:** `refactor(routing): split monolithic routes into modular groups`

---

### Step 1.2 — Standardize Route Export Pattern

Every route file exports a component, not the default page component:

```tsx
// src/routes/cybersecurity.tsx
import { Routes, Route } from 'react-router-dom';
import CybersecurityPage from '@/pages/cybersecurity';
import AuditPage from '@/pages/cybersecurity/audit/Audit';
// ...

export function CybersecurityRoutes() {
  return (
    <Routes>
      <Route path="/cybersecurity" element={<CybersecurityPage />} />
      <Route path="/cybersecurity/audit" element={<AuditPage />} />
      {/* ... */}
    </Routes>
  );
}
```

**Commit:** `refactor(routing): standardize route export pattern`

---

## Phase 2 — File Organization & Naming

**Objective:** Consistent kebab-case folders, PascalCase files, no orphans.

### Step 2.1 — Remove Dead Code

Delete confirmed orphans:

- `src/App.tsx` (empty, orphan from old structure)
- `src/pages/cybersecurity/Audit.tsx` (superseded by nested version in `audit/`)
- `src/pages/cybersecurity/certification/CreationOfAnInformationSecuritySystem.tsx` (if unused — verify with grep first)

**Verification:**

```bash
grep -r "from '@/App'" src/  # Should return nothing
grep -r "CreationOfAnInformationSecuritySystem" src/  # Verify no references
```

**Commit:** `chore: remove orphan and dead files`

---

### Step 2.2 — Normalize Page Locations

Move flat cybersecurity pages into nested structure:

| Current                                                    | Target                                                    |
| ---------------------------------------------------------- | --------------------------------------------------------- |
| `src/pages/cybersecurity.tsx`                              | `src/pages/cybersecurity/index.tsx`                       |
| `src/pages/cybersecurity-design-szi.tsx`                   | `src/pages/cybersecurity/DesignSzi.tsx`                   |
| `src/pages/cybersecurity-create-szi.tsx`                   | `src/pages/cybersecurity/CreateSzi.tsx`                   |
| `src/pages/cybersecurity-attestation-szi.tsx`              | `src/pages/cybersecurity/AttestationSzi.tsx`              |
| `src/pages/cybersecurity-infrastructure-effectiveness.tsx` | `src/pages/cybersecurity/InfrastructureEffectiveness.tsx` |
| `src/pages/cybersecurity/Certification.tsx`                | `src/pages/cybersecurity/certification/Certification.tsx` |
| `src/pages/cybersecurity/Delivery.tsx`                     | `src/pages/cybersecurity/delivery/Delivery.tsx`           |

**Update imports** in `src/routes/cybersecurity.tsx` accordingly.

**Result:** All cybersecurity pages live under `src/pages/cybersecurity/`, matching the URL hierarchy.

**Commit:** `refactor(pages): normalize cybersecurity page locations`

---

### Step 2.3 — Rename Numeric Prefix Files

`src/pages/cybersecurity/delivery/01_SIEM.tsx` → `SIEM.tsx`

**Commit:** `chore: remove numeric prefix from SIEM.tsx`

---

### Step 2.4 — Relocate Data Files

Move `src/pages/cybersecurity/delivery/cyberCultureProductTiers.tsx` → `src/data/cyberCultureProductTiers.tsx`

Update import in `CyberCulture.tsx`.

**Commit:** `refactor(data): relocate cyberCultureProductTiers to data layer`

---

## Phase 3 — Component Taxonomy

**Objective:** Clarify the distinction between `sections/`, `grids/`, and `cybersecurity/`.

### Step 3.1 — Establish Component Categories

**Current confusion:**

- `sections/` contains both layout sections (ServicesSection) and grid layouts (CardsGridSection)
- `grids/` contains grid layouts but also `ClientsSection` (a section, not a grid)
- `cybersecurity/` contains domain-specific sections

**New taxonomy:**

**`src/components/layout/`** — Page-level layouts

- `PageLayout.tsx` (wrapper with Header/Footer) — extract from repeated pattern in pages

**`src/components/sections/`** — Full-width semantic sections (hero, features, testimonials)

- Keep: HeroBreadcrumbs, SecondaryHero, ServicesSection, TestimonialsSection, AchievementsSection, etc.
- Move out: `CardsGridSection`, `InfoGridSection`, `HighlightGridSection` → these are grids, not sections

**`src/components/grids/`** — Grid-based layout wrappers (visual presentation)

- Keep: CardsGridSection, InfoGridSection, HighlightGridSection, ClientsSection
- These are reusable grid layouts, not semantic sections

**`src/components/domain/cybersecurity/`** (rename from `cybersecurity/`)

- DocumentDetailsSection, ManufacturersSection
- Domain-specific to cybersecurity business logic

**Step 3.1.1** — Move grid sections:

```
src/components/sections/CardsGridSection.tsx → src/components/grids/CardsGridSection.tsx
src/components/sections/InfoGridSection.tsx → src/components/grids/InfoGridSection.tsx
src/components/sections/HighlightGridSection.tsx → src/components/grids/HighlightGridSection.tsx
```

Update all imports.

**Step 3.1.2** — Rename folder:
`src/components/cybersecurity/` → `src/components/domain/cybersecurity/`

**Step 3.1.3** — Create layout component:
`src/components/layout/PageLayout.tsx`:

```tsx
export default function PageLayout({ children }: { children: ReactNode }) {
  return (
    <div className="app">
      <Header />
      <main className="app-main">{children}</main>
      <Footer />
    </div>
  );
}
```

Refactor pages to use it (start with 2-3 pages to test pattern).

**Commit:** `refactor(components): reorganize component taxonomy by category`

---

## Phase 4 — Data Layer Separation

**Objective:** Separate typed constants from JSX-heavy data.

### Step 4.1 — Audit Data Files

**`src/constants/`** — Pure typed data (no JSX)

- `supportPlans.ts` — ✓ correct

**`src/data/`** — JSX-heavy content (component trees as data)

- `stackedFeatureCards/` — ✓ correct
- `cyberCultureProductTiers.tsx` — ✓ correct (after move from Phase 2)

### Step 4.2 — Extract Page-Level Constants

Many pages have large constant arrays at the top (e.g., `CYBERSECURITY_SERVICES` in `cybersecurity.tsx`, feature banners, card HTML arrays).

**Pattern:** Extract to `src/data/pages/` or keep in page if tightly coupled.

**Decision rule:**

- If constant is used in **one page only** and is **page-specific content** → keep in page (it's page data, not shared data)
- If constant is **reusable across pages** or **large configuration** → extract to `src/data/`

**Action:** Document this rule in `.agent/conventions.md` under "Data Organization".

**Commit:** `docs: clarify data organization conventions`

---

## Phase 5 — Import Standardization

**Objective:** Apply import grouping convention to all files.

### Step 5.1 — Bulk Refactor

Use the pattern from `.agent/conventions.md`:

1. **react** — react, react-dom, react-router-dom
2. **components** — @/pages, @/components, @/widgets, @/shared
3. **data** — @/data, @/constants
4. **assets** — @/assets
5. **local** — ./, ../
6. **CSS** — last, no label

**Files to update:**

- `src/routes/*.tsx` (new files — apply immediately)
- `src/pages/**/*.tsx`
- `src/components/**/*.tsx`
- `src/widgets/**/*.tsx`
- `src/shared/**/*.tsx`

**Commit:** `style: apply import grouping to all files`

---

## Phase 6 — Cleanup & Documentation

### Step 6.1 — Update Architecture Docs

Update `.agent/architecture.md`:

- Remove references to deleted files
- Document new route module structure (`src/routes/`)
- Update source folder descriptions with new taxonomy
- Document `PageLayout` pattern

### Step 6.2 — Final Verification

Run `/review` to check against conventions.

Run `make check` to ensure no regressions.

**Commit:** `chore: update architecture docs and final cleanup`

---

## Summary of Changes

| Area           | Before                        | After                                                   |
| -------------- | ----------------------------- | ------------------------------------------------------- |
| **Routing**    | 1 file, 94 lines, 30+ imports | 3 files, modular route groups                           |
| **Pages**      | Mixed flat/nested, camelCase  | All nested under domain, consistent naming              |
| **Components** | sections/grids mixed          | layout/, sections/ (semantic), grids/ (visual), domain/ |
| **Data**       | constants + JSX mixed         | Clear separation by usage pattern                       |
| **Imports**    | Inconsistent                  | Standardized grouping with labels                       |

---

## Execution Order

1. **Phase 1** — Routing (foundational, enables other changes)
2. **Phase 2** — File organization (cleanup before structural changes)
3. **Phase 3** — Component taxonomy (reorganize existing components)
4. **Phase 4** — Data layer (separation of concerns)
5. **Phase 5** — Import standardization (style consistency)
6. **Phase 6** — Cleanup (documentation)

**Total estimated phases:** 6
**Estimated commits:** 12-15 (atomic changes)
