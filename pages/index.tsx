import { PlusIcon } from "../icons";

export default function Home() {
  return (
    <>
      <div className={"container"}>
        container (should be blue)
        <div className="inner">container + inner (should be green)</div>
        <span>span (should be red)</span>
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
        }
      `}</style>
    </>
  );
}
