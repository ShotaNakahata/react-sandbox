import { useReducer } from "react";
import { useState } from "react";
const Example = () => {
  const [num, setNum] = useState(0);
  const [rNum, dispatch] = useReducer((prev, { type ,step}) => {
    switch (type) {
      case "+":
        return prev+step;
      case "-":
        return prev-step;
      default:
        throw new Error("error");
    }
  }, 0);

  const CountUp = () => {
    // console.log(num);
    setNum((prevNum) => ++prevNum);
  };

  const rCountUp = () => {
    dispatch({ type: "+", step: 2 });
  };
  const rCountDown = () => {
    dispatch({ type: "-", step: 3 });
  };
  return (
    <>
      <div>
        <h3>{num}</h3>
        <button onClick={CountUp}>+</button>
      </div>
      <div>
        <h3>{rNum}</h3>
        <button onClick={rCountUp}>+</button>
        <button onClick={rCountDown}>-</button>
      </div>
    </>
  );
};

export default Example;
