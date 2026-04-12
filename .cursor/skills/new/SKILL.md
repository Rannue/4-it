# /new — Agentic Change Request Execution

Execute change requests with auto-discovery, planning, review, and documentation.

## Workflow

### Phase 1: Understand & Plan

1. **Parse the request** — Extract:
   - Intent (create new, modify existing, or both)
   - Domain/context (which page, section, or feature)
   - Constraints (design system, data requirements, routes)

2. **Discover relevant code** — Search for:
   - Similar components in `src/components/`, `src/widgets/`, `src/shared/ui/`
   - Related data in `src/data/` or `src/constants/`
   - Route definitions in `src/routes/`
   - Existing patterns for comparison

3. **Clarify ambiguities** — Ask if:
   - Component category is unclear (`shared/ui` vs `section` vs `widget` vs `page`)
   - Props/data structure is undefined
   - Route placement or navigation is uncertain
   - Multiple valid approaches exist (ask which to use)

4. **Create a plan** — For complex requests:
   - Break into subtasks (e.g., "create data constant", "create component", "add to route")
   - Order dependencies (data before UI, routes last)
   - Identify which files will be created vs. modified

### Phase 2: Execute

5. **Implement changes** following conventions:
   - **Naming**: PascalCase files, kebab-case folders, English only
   - **Structure**: Use `PageLayout` from `@/components/layout/PageLayout` for pages
   - **Components**: Default export only, no `FC`, props via `type`
   - **Imports**: Use `@/` alias, group by category (react, components, data, assets, local, css)
   - **CSS**: Separate `.css` file, BEM naming, colocated
   - **TypeScript**: No `any`, strict mode enforced
   - **Data**: Pure data in `src/constants/`, JSX-heavy in `src/data/`

6. **Run quality gate** — Execute `/review` skill:
   - Check conventions compliance
   - Run `make check` (lint + typecheck)
   - Report issues with `file:line` references

7. **Fix issues** — Iterate until `/review` passes

8. **Sync documentation** — Execute `/sync-docs` skill:
   - Update `.agent/manifest.yml` if commands/routes changed
   - Update `.agent/conventions.md` if new patterns established
   - Update `AGENTS.md` if folder structure changed

9. **Commit** — Create conventional commit:
   - Type: `feat:`, `fix:`, `refactor:`, `style:`, `docs:`, `chore:`
   - Scope: component or feature name
   - Message: descriptive, present tense
   - Example: `feat(pricing-card): add tier comparison component`

## Component Taxonomy Reference

When creating components, choose the correct category:

- **`shared/ui`** — Reusable primitives (Button, Card, Badge, Icon wrappers)
- **`section`** — Full-page sections (`src/components/sections/`)
- **`widget`** — Standalone UI units with own folders (`src/widgets/<kebab-case>/`)
- **`page`** — Route-level pages (`src/pages/`) wrapped in `PageLayout`

## Data Organization Reference

- **`src/constants/`** — Pure typed data (no JSX), reusable across pages
- **`src/data/`** — JSX-heavy content (component trees as data)
- **Page-local** — Keep in page component if used only there

## Output Format

After completion:

```
## Summary

**Changes**:
- Created: `src/components/sections/PricingCard.tsx`
- Created: `src/components/sections/PricingCard.css`
- Modified: `src/pages/services.tsx` (added component import)

**Review:** Passed (0 issues)

**Docs Sync:** Updated `.agent/manifest.yml` (added route)

**Commit:** `feat(pricing-card): add tier comparison component`
```

## Error Handling

- If `/review` finds critical issues (type errors, missing exports), fix before proceeding
- If `/sync-docs` finds no changes to document, skip gracefully
- If commit conflicts, report to user with resolution options

## Notes

- This skill replaces `/new-component`. Use `/new` for all change requests.
- For simple scaffolding requests ("Create a Button component"), the skill will still execute full workflow but may skip unnecessary steps.
- Always prefer modifying existing patterns over creating new ones unless explicitly requested.
