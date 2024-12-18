import { useState } from "react";
const Example = () => {
  const RADIO_COLLECTION = ["Apple", "Banana", "Cherry"];
  const [val, setVal] = useState("Apple");
  const onChange = (e)=>{
    setVal(e.target.value)
  }
  return (
    <>
      {RADIO_COLLECTION.map((fruit) => {
        return (
          <label key={fruit}>
            <input type="radio" 
            value={fruit} 
            checked={fruit===val} 
            onChange={onChange}/>
            {fruit}
          </label>
        );
      })}
      <h3>I wanna eat {val}</h3>

    </>
  );
};

export default Example;
