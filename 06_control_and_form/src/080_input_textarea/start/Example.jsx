import { useState } from "react";

const Example = () => {
  const [val, setVal] = useState("");
  const clear =()=>{setVal("")}
  return (
    <div>
      <label htmlFor="123">ラベル</label>
      <div>
        <input
          type="text"
          id="123"
          value={val}
          placeholder="こんにちは"
          onChange={(e) => setVal(e.target.value)}
        />
        <textarea  
        id="345" 
        placeholder="こんにちは" 
        value={val} 
        onChange={(e)=>setVal(e.target.value)}
        ></textarea>
      </div>
      <h3>{val}</h3>
      <button onClick={clear}>クリア</button>
    </div>
  );
};

export default Example;
