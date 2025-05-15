export default function Home() {
  const breakpoint = '500px'
  return (
    <>
      <div className="container">
        container (should be blue)
        <div className="responsive">
          responsive (purple on mobile, orange on desktop)
        </div>

        <div className="child">
          this should be green
        </div>
      </div>

      <style jsx>{`
          .container {
              color: blue;
              padding: 3rem;

              .responsive {
                  color: orange;
              }

              @media (max-width: ${breakpoint}) {
                  .responsive {
                      color: purple;
                  }
              }

              :global(div.child) {
                  color: green;
              }
          }
      `}</style>
    </>
  );
}
