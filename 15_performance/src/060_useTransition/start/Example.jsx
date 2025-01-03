import { useDeferredValue } from "react";
import { useTransition } from "react";
import { useState } from "react";

const generateDummyItem = (num) => {
  return new Array(num).fill(null).map((item, index) => `item ${index}`);
};

const dummyItems = generateDummyItem(10000);

const Example = () => {
  const [filterVal, setFilterVal] = useState("");
  // const [isPending,startTransition]=useTransition()

  const changeHandler = (e) => {
    // startTransition(()=>{
    //   setFilterVal(e.target.value);
    // })
    setFilterVal(e.target.value);
  };

  const dummyFilteredVal = dummyItems
    .filter((item) => {
      if (filterVal === "") return true;
      return item.includes(filterVal);
    })
    .map((item) => <li key={item}>{item}</li>);

  const defferedItems = useDeferredValue(dummyFilteredVal);

  return (
    <>
      <input type="text" onChange={changeHandler} />
      {/* {isPending&&<h3>Loading...</h3>} */}
      <ul>{defferedItems}</ul>
    </>
  );
};

export default Example;
