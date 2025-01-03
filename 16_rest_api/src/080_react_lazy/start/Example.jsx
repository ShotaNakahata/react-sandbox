import { useState, lazy, Suspense } from "react";
// import ComponentA from "./components/ComponentA";

const LazyCompA = lazy(() => import("./components/ComponentA"));
const LazyCompB = lazy(() => import("./components/ComponentB"));
const Example = () => {
  const [compA, setCompA] = useState(true);

  return (
    <>
      <button onClick={() => setCompA((prev) => !prev)}>ComponentA</button>
      <Suspense fallback={<h3>now Loading.....</h3>
      }
      >{compA ? <LazyCompA/>:<LazyCompB/>}</Suspense>
    </>
  );
};

export default Example;
