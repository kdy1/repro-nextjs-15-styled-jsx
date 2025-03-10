# Issue CSS Nesting in Next.js 14 + Turbo + Styled JSX

- [Git Repository](https://github.com/vpontis/nextjs-14-turbo-styled-jsx)
- [Demo](https://nextjs-14-turbo-styled-jsx.vercel.app/)

In the [Turbopack docs](https://turbo.build/pack/docs/features/css) it says that it
supports [PostCSS nested](https://www.npmjs.com/package/postcss-nested) which allows you to nest CSS selectors.

This would be very useful for us since we are currently using Sass just to be able to nest selectors. We would like to
move off Sass / Babel and use Turbo.

But I think Turbopack doesn't apply the PostCSS plugins to the CSS generated by Styled JSX.

For example, the following code:

```tsx
export default function Home() {
  return (
    <>
      <div className={'container'}>
        container (should be blue)

        <div className="inner">
          container + inner (should be yellow)
        </div>
        
        <span>
          span (should be red)
        <span>
      </div>

      <style jsx>{`
        .container {
          color: blue;
          padding: 3rem;

          .inner {
            color: yellow;
          }
          
          span {
            color: red;
          }
        }
      `}</style>
    </>
  )
}
```

Gives me this CSS:

```css
.container {
    color: blue;
    padding: 3rem;

    .inn {
        &er {
            color: yellow
        }
    }
}
```

Where I would expect:

```css
.container {
    color: blue;
    padding: 3rem;
}

.container .inner {
    color: yellow;
}
```
