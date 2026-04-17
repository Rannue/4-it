# /sync-docs — Sync Agent Docs After Changes

Keep `.agent/` documentation accurate after structural changes to the project.

Read `.agent/doc-philosophy.md` before making any edits — it defines what is and isn't worth documenting.

## Steps

1. Review what changed since the last sync:
   - New or renamed files/folders in `src/`
   - New npm dependencies or removed ones
   - New routes added to `src/app/main.tsx`
   - New Make targets added to `Makefile`

2. Update `.agent/manifest.yml` if any of these changed:
   - `framework`, `router`, `bundler`, or `language` versions
   - `commands` block (new Make targets)
   - `entry` (if routing file moved)

3. Update `.agent/conventions.md` if:
   - A new code pattern was established that isn't covered
   - An existing convention was consciously broken and a new rule should replace it
   - A new folder type was introduced (e.g. a new top-level `src/` category)

4. Update the **Project overview** section in `CLAUDE.md` and `AGENTS.md` if:
   - The `src/` folder structure changed (new folder, renamed folder)
   - The route count changed significantly

5. Do not add speculative content — only document what actually exists.
