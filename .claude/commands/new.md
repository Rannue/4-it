# /new — Implement a Change From Request

Use this workflow when the user invokes **`/new`** with a description of what to build or change.

## 1. Input

Treat the user’s message as the **full request**: features, constraints, files to touch, and acceptance criteria. If something critical is missing and cannot be inferred, continue with step 3.

## 2. Find references in the project

Before writing code, **search the codebase** for similar patterns to reuse or mirror:

- Semantic search (e.g. “How is X implemented?”) for behavior and architecture.
- Exact search (`grep`/glob) for filenames, routes, imports, and existing components of the same kind.

Prefer extending existing files and conventions over inventing new patterns. Read `.agent/conventions.md` and relevant `.agent/*.md` early.

## 3. Clarify with the user (when needed)

If, after checking existing files and `.agent/` docs, **requirements are still ambiguous** (API shape, UX, routing, copy, edge cases), **ask targeted questions** and wait for answers before large edits. Do not guess on product decisions when the repo gives no signal.

## 4. Plan and subtasks

If the work is non-trivial, **split it into subtasks** and record them in an explicit plan:

- Use the agent **todo list** (or a short numbered list in the reply) so each subtask can be completed and checked off.
- Execute subtasks in order unless dependencies dictate otherwise.

## 5. Implement

Complete all subtasks following project conventions (`@/` imports, default exports, colocated CSS, etc.).

## 6. Mandatory: `/review`

After **all** subtasks are done, **run the full `/review` workflow** — follow every step in `.claude/commands/review.md` (read conventions, inspect changed files, run `make check`, report issues with `file:line`).

Fix any problems the review finds; **re-run `/review`** until the codebase is clean or only acceptable exceptions remain (document any intentional deviation).

## 7. Mandatory: `/sync-docs`

**Always** run the full **`/sync-docs`** workflow after the review cycle — follow `.claude/commands/sync-docs.md`, regardless of whether review found issues. Update `.agent/` and project entry docs only when something actually changed, per `.agent/doc-philosophy.md`.

## 8. Commit

When `make check` is green and docs are synced:

- Stage relevant changes (`git add`).
- Create a **commit** with a clear message summarizing what was done.

Do not skip steps 6–8 for `/new` runs.
