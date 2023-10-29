export default function Home() {
  return (
    <>
      <div className={'container'}>
        container (should be blue)

        <div className="inner">
          container + inner (should be yellow)
        </div>
      </div>

      <style jsx>{`
        .container {
          color: blue;
          padding: 3rem;

          .inn {
            &_er {
              color: yellow;
            }
          }
        }
      `}</style>
    </>
  )
}
