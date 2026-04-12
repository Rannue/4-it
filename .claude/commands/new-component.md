# /new-component — Scaffold a New Component

Create a new component following project conventions.

## Steps

1. Ask the user for:
   - **Component name** (PascalCase, e.g. `PricingCard`)
   - **Type** — one of:
     - `shared/ui` — reusable primitive (button, card, badge)
     - `section` — full-page section (`src/components/sections/`)
     - `widget` — standalone UI unit with its own folder (`src/widgets/<name>/`)
     - `page` — route-level page (`src/pages/`)

2. Determine the target folder:
   - `shared/ui` → `src/shared/ui/`
   - `section` → `src/components/sections/`
   - `widget` → `src/widgets/<kebab-case-name>/`
   - `page` → `src/pages/`

3. Create `<ComponentName>.tsx`:
   ```tsx
   import './<ComponentName>.css'

   type <ComponentName>Props = {
     // define props here
   }

   export default function <ComponentName>({}: <ComponentName>Props) {
     return (
       <div className="<block-name>">
       </div>
     )
   }
   ```
   - Use `@/` for any additional imports
   - BEM root class = kebab-case of component name (e.g. `PricingCard` → `pricing-card`)

4. Create `<ComponentName>.css` in the same folder:
   ```css
   /* <block-name> */
   ```

5. Confirm the files created and their paths.
