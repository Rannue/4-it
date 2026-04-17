# /review — Code Quality Audit

Review the current working changes against project conventions and report issues.

## Steps

1. Read `.agent/conventions.md`
2. Identify all new or modified `.tsx`, `.ts`, `.css` files in the working tree
3. For each file, check:
   - **Naming**: file is PascalCase (components) or kebab-case (folders); no Cyrillic characters
   - **Exports**: components use default export only
   - **Props**: defined with `type`, not `interface`; no `FC` annotation on the function
   - **Imports**: all src-relative imports use `@/` alias; no `../../` paths
   - **TypeScript**: no `any`; no disabled strict flags
   - **CSS**: class names follow BEM; CSS file colocated with component
4. Run `make check` and include the full output
5. Output a numbered checklist of all issues with `file:line` references
   - If no issues found, say **"All clear — conventions look good."**
