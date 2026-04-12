# Conventions — 4-it

## Files & Folders

- Component files: PascalCase (`Button.tsx`, `Header.tsx`, `AchievementsSection.tsx`)
- Folders: kebab-case (`shared/ui`, `scroll-to-top`, `widgets/header`)
- All names in English — no Cyrillic folder or file names
- Colocate CSS with component: `Button.tsx` + `Button.css` in the same folder

### Component Taxonomy

Components are organized by category:

- **`layout/`** — Page-level layouts (`PageLayout` wraps Header + Footer + main)
- **`sections/`** — Full-width semantic sections (HeroBreadcrumbs, ServicesSection, TestimonialsSection)
- **`grids/`** — Grid-based visual layouts (CardsGridSection, InfoGridSection, KeyFeaturesGridSection, ClientsSection)
- **`domain/`** — Domain-specific business logic components (e.g., `cybersecurity/DocumentDetailsSection`)
- **`routes/`** — Modular route definitions (`GeneralRoutes`, `CybersecurityRoutes`)

### Page Structure (Standard Pattern)

**All pages use `PageLayout`** from `@/components/layout/PageLayout`:

```tsx
// components
import PageLayout from '@/components/layout/PageLayout';
import SecondaryHero from '@/components/sections/SecondaryHero';

export default function MyPage() {
  return (
    <PageLayout>
      <SecondaryHero title="Page Title" />
      {/* Page content sections */}
    </PageLayout>
  );
}
```

**Do not manually import `<Header>` and `<Footer>`** — use `PageLayout` instead.

## Components

- **Default export only** — no named component exports
- **No `FC` type annotation** — plain function with typed params:

  ```tsx
  // correct
  export default function Button({ children, onClick }: ButtonProps) { ... }

  // wrong
  const Button: FC<ButtonProps> = ({ children }) => { ... }
  ```

- **Props via `type`, not `interface`**:

  ```ts
  // correct
  type ButtonProps = { children: ReactNode; onClick?: () => void };

  // wrong
  interface ButtonProps {
    children: ReactNode;
  }
  ```

- No explicit JSX return type — rely on inference

## CSS / Styling

- Separate `.css` file per component, same folder
- BEM class names: `block__element--modifier`
- No inline styles except for dynamic CSS custom properties (e.g. `style={{ '--color': value } as CSSProperties}`)

## TypeScript

- `strict: true` is enforced — never disable strict flags
- Use `type` keyword for all local type definitions (not `interface`)
- Use discriminated unions for flexible prop shapes — see `StackedFeatureCardsSection.tsx` as reference
- Never use `any` — use `unknown` + type guards when the type is genuinely unknown

## Imports

- Always use the `@/` alias for src-relative imports — never `../../`
- Barrel `index.ts` only when a folder exports multiple symbols used externally

### Import grouping

Organize imports into groups with lowercase comment labels, separated by blank lines:

1. **react** — `react`, `react-dom`, `react-router-dom`
2. **components** — internal UI: `@/pages/*`, `@/components/*`, `@/widgets/*`, `@/shared/ui/*`, `@/shared/icons/*`
3. **data** — internal data and constants: `@/data/*`, `@/constants/*`
4. **assets** — images and static files: `@/assets/*`
5. **local** — same-directory or parent imports: `./`, `../`
6. CSS imports — always last, no comment label

```tsx
// react
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// components
import Header from '@/widgets/header/Header';
import Button from '@/shared/ui/Button';

// data
import { SUPPORT_PLAN_FEATURE_ROWS } from '@/constants/supportPlans';

// assets
import logo from '@/assets/logo-4it.svg';

// local
import './HeroSection.css';
```

Omit groups that have no imports for the file — don't leave empty comment labels.

## Git

- **Conventional commits**: `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`
- **Optional scope**: `feat(Button): handle disabled state`
- **Atomic commits** — one logical change per commit; no "misc fixes"
- **Branch prefixes**: `feat/`, `fix/`, `refactor/`, `chore/`

## Data Organization

Data is separated by usage pattern:

**`src/constants/`** — Pure typed data (no JSX)

- Type definitions and constant arrays used in logic
- Example: `supportPlans.ts` — feature rows as typed arrays

**`src/data/`** — JSX-heavy content (component trees as data)

- Data containing JSX expressions rendered via `<>{data.map(...)}</>`
- Examples: `stackedFeatureCards/`, `cyberCultureProductTiers.tsx`

**Decision rule for page-level constants:**

- If constant is used in **one page only** and is **page-specific content** → keep in page
- If constant is **reusable across pages** or **large configuration** → extract to `src/data/`

## Commands — always via Make

Never `cd` into a subfolder and run tools directly.

```sh
make dev      # start dev server
make build    # type-check + vite build
make lint     # eslint
make format   # prettier
make check    # lint + tsc --noEmit
```
