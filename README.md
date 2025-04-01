# CSS Nesting in Next.js 15 with Styled JSX

- Demo repository for testing CSS flattening with Next.js 15 and Styled JSX

## Overview

This project tests CSS nesting capabilities in Next.js 15 with Styled JSX, specifically looking at CSS flattening functionality. It demonstrates issues with nested CSS selectors in Styled JSX both with and without Turbopack.

Next.js 15 includes [Lightning CSS](https://lightningcss.dev/) which supports CSS nesting, but there appear to be issues with how this works with Styled JSX.

## Example

The following code:

```tsx
export default function Home() {
  const breakpoint = "500px";
  return (
    <>
      <div className={"container"}>
        container (should be blue)
        <div className="inner">container + inner (should be green)</div>
        <span>span (should be red)</span>
        <div className="responsive">
          responsive (purple on mobile, orange on desktop)
        </div>
      </div>

      <style jsx>{`
        .container {
          color: blue;
          padding: 3rem;

          .inner {
            color: green;
          }

          span {
            color: red;
          }

          @media (max-width: ${breakpoint}) {
            .responsive {
              color: purple;
            }
          }
        }
      `}</style>
    </>
  );
}
```

Should produce CSS that properly flattens the nested selectors, but the implementation currently has issues.

## Configuration

The project uses:

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
