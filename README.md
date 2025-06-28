# Styled JSX :global() Selector Issue

## Issue with :global() Selector in CSS Output

Styled JSX incorrectly handles the `:global()` selector when used in combination with other selectors. The following CSS:

```css
:global(.c1),
.c2 {
  background: orange !important;
}
```

Is compiled to:

```css
.jsx-60bae1dc4409a62b:is(:global(.c1), .c2) {
  background: orange !important;
}
```

**The Problem**: The `:global()` selector is incorrectly placed inside an `:is()` pseudo-class and scoped with the JSX class, which breaks its intended functionality. The `:global()` selector should bypass JSX scoping entirely, but instead it's being treated as a regular selector.

**Expected Output**: The CSS should be compiled to two separate rules:

```css
.c1 {
  background: orange !important;
}
.c2.jsx-60bae1dc4409a62b {
  background: orange !important;
}
```

This issue prevents global styles from working correctly in Styled JSX when combined with other selectors.

- Next.js 15.2.1
- React 19
- Styled JSX 5.1.6
- Lightning CSS (enabled via `useLightningcss: true` in next.config.js)
- Turbopack (optional, but issues are present with or without it)

## Running the project

```bash
# Install dependencies
pnpm install

# Run with default compiler
pnpm dev

# Run with Turbopack
pnpm dev -- --turbo
```
