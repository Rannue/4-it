# Conventions — 4-it

## Files & Folders

- Component files: PascalCase (`Button.tsx`, `Header.tsx`, `AchievementsSection.tsx`)
- Folders: kebab-case (`shared/ui`, `scroll-to-top`, `widgets/header`)
- All names in English — no Cyrillic folder or file names
- Colocate CSS with component: `Button.tsx` + `Button.css` in the same folder

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
  type ButtonProps = { children: ReactNode; onClick?: () => void }

  // wrong
  interface ButtonProps { children: ReactNode }
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
  ```ts
  // correct
  import Button from '@/shared/ui/Button'

  // wrong
  import Button from '../../shared/ui/Button'
  ```
- Barrel `index.ts` only when a folder exports multiple symbols used externally

## Git

- **Conventional commits**: `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`
- **Optional scope**: `feat(Button): handle disabled state`
- **Atomic commits** — one logical change per commit; no "misc fixes"
- **Branch prefixes**: `feat/`, `fix/`, `refactor/`, `chore/`

## Commands — always via Make

Never `cd` into a subfolder and run tools directly.

```sh
make dev      # start dev server
make build    # type-check + vite build
make lint     # eslint
make format   # prettier
make check    # lint + tsc --noEmit
```
