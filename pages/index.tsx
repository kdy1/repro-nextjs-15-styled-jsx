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
