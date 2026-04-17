# Philosophy: Lean, Scalable Documentation

**The core insight:** With clean architecture, the code IS the documentation. These docs exist only for information that can't be derived from reading the source.

## Guiding principles

1. **Document decisions, not basics** — Only what's specific to THIS project. Don't explain React component lifecycle, TypeScript generics, or CSS specificity. Do explain why a particular pattern was chosen over the obvious alternative.

2. **Code is the example** — Never duplicate patterns the codebase demonstrates. Instead of showing a discriminated union example, write: "See `src/data/stackedFeatureCards/StackedCards.tsx` for the union prop pattern." The actual implementation is always more accurate than documentation.

3. **One fact, one place** — Strict single-source-of-truth. If a convention is documented in `conventions.md`, don't repeat it in `CLAUDE.md`. Cross-reference instead.

4. **Scale by splitting** — Adding features should add files, not grow existing ones. When a new domain is added (e.g. a blog, a contact form), create a new doc file rather than expanding `conventions.md`.

5. **No speculative content** — Don't document features that don't exist yet. When it's implemented, then document it.

6. **Only quirks and gotchas as examples** — Code examples are allowed only for:
   - Non-obvious workarounds (e.g. custom CSS property typing with `as CSSProperties`)
   - Project-specific patterns that aren't standard React/TS practice
   - Gotchas that will trip up agents repeatedly

## What this means in practice

**Don't document:**
- Standard React/TypeScript features (hooks, generics, JSX)
- Patterns visible in the codebase (component structure, CSS colocation)
- Generic best practices ("use meaningful names", "keep components small")
- Troubleshooting steps any LLM already knows ("clear node_modules", "restart dev server")
- Features that don't exist yet

**Do document:**
- Project-specific decisions (why BEM over CSS Modules, why default exports)
- Non-obvious conventions (discriminated union props, CSS custom property typing)
- Gotchas discovered through experience (build quirks, Vite alias edge cases)
- Required workflows (`make check` before commit)
