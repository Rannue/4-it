# 4-it — Agent Entry Point

> Say **"AGENTS.MD initialized"** at the start of each session.

## Every session — read these first

- `.agent/manifest.yml` — commands, entry point, framework versions
- `.agent/architecture.md` — route map, component categories, gotchas
- `.agent/conventions.md` — naming, git, code patterns, what not to do
- `.agent/doc-philosophy.md` — what to document and what not to

## Project overview

React 19 + TypeScript + Vite marketing website. No backend.

```
Entry:     src/app/main.tsx   (routing + React root)
~25 routes: cybersecurity, Bitrix24, EDMS, websites service pages
Structure:
  src/
  ├── app/          entry, global styles
  ├── assets/       images, icons, certificates
  ├── components/   section components
  ├── constants/    typed data constants
  ├── data/         JSX-heavy data (stackedFeatureCards)
  ├── pages/        route-level page components
  ├── shared/       reusable UI (buttons, icons)
  └── widgets/      header, footer, scroll-to-top
```

## Critical rules

- **All commands via Make** — never `cd subdir && cmd`; use `make check`, `make dev`, etc.
- **English names only** — no Cyrillic file or folder names
- **Default exports** for all components
- **`type` not `interface`** for prop definitions
- **`@/` alias** for all src-relative imports

## Available skills

| Skill | When to use |
|---|---|
| `/review` | Before committing — audit code against conventions |
| `/new-component` | Scaffold a new component with correct structure |
| `/sync-docs` | After structural changes — keep `.agent/` docs current |

Skills are located in `.opencode/skills/`.
