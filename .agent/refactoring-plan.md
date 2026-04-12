# Refactoring Plan

Each step is designed to be a self-contained session. Run `make check` at the end of every step and commit before moving on.

---

## Step 1 — Rename Cyrillic assets and folders

**Goal:** All file and folder names in English.

- Rename `src/assets/img/Кибербезопасность/` → `src/assets/img/cybersecurity/`
- Rename `src/assets/img/illustrations/Кибербезопасность/` → `src/assets/img/illustrations/cybersecurity/`
- Rename `src/components/кибербезопасность/` → `src/components/cybersecurity/`
- Rename any other Cyrillic-named files in `src/assets/` (e.g. `Логотип 4-IT.svg` → `logo-4it.svg`)
- Update every import path referencing the renamed files

Commit: `chore: rename Cyrillic assets and folders to English`

---

## Step 2 — Remove dead files and fix file naming

**Goal:** No orphan files, no broken naming conventions.

- Delete `src/App.tsx` (empty orphan — confirmed no imports reference it)
- Delete `src/pages/cybersecurity/Audit.tsx` (superseded by `src/pages/cybersecurity/audit/Audit.tsx`)
- Investigate `src/pages/cybersecurity/certification/CreationOfAnInformationSecuritySystem.tsx` — if unfinished/unused, delete; if needed, wire it up
- Rename `src/pages/cybersecurity/delivery/01_SIEM.tsx` → `SIEM.tsx`, update the import in `src/app/main.tsx`
- Move `src/pages/cybersecurity/delivery/cyberCultureProductTiers.tsx` → `src/data/cyberCultureProductTiers.tsx`, update its import in `CyberCulture.tsx`

Commit: `refactor: remove dead files, fix file naming`

---

## Step 3 — Normalize cybersecurity page locations

**Goal:** All cybersecurity subpages live under `src/pages/cybersecurity/`, no flat `cybersecurity-*.tsx` files.

Move flat pages into the nested folder:
- `src/pages/cybersecurity-design-szi.tsx` → `src/pages/cybersecurity/DesignSzi.tsx`
- `src/pages/cybersecurity-create-szi.tsx` → `src/pages/cybersecurity/CreateSzi.tsx`
- `src/pages/cybersecurity-attestation-szi.tsx` → `src/pages/cybersecurity/AttestationSzi.tsx`
- `src/pages/cybersecurity-infrastructure-effectiveness.tsx` → `src/pages/cybersecurity/InfrastructureEffectiveness.tsx`

Update the four import paths in `src/app/main.tsx`.

Commit: `refactor: normalize cybersecurity page locations`

---

## Step 4 — Apply import grouping across all files

**Goal:** Every `.tsx` and `.ts` file follows the import grouping convention in `.agent/conventions.md`.

Go through all files in `src/` and reorganize imports into the five groups with comment labels. Files to cover (in order of importance):
1. `src/app/main.tsx`
2. All files in `src/pages/`
3. All files in `src/components/`
4. All files in `src/widgets/`
5. All files in `src/shared/`

Commit: `style: apply import grouping convention across all files`

---

## Step 5 — Final review pass

**Goal:** Clean bill of health.

- Run `make check` — fix any remaining lint or type errors
- Run `/review` — address any remaining convention violations
- Update `.agent/architecture.md` to reflect the new folder structure from steps 1–3

Commit: `chore: post-refactor cleanup and docs update`
