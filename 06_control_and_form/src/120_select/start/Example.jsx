import { useState } from "react";
const Example = () => {
  const OPTIONS = ["Apple", "Banana", "Cherry"];
  const [selected,setSelected] = useState("Banana")
  const onChange=(e)=>{
    setSelected(e.target.value)
  }
  return (
    <div>
      <select value={selected} onChange={onChange}>
        {OPTIONS.map(op=>{
          return (
            <option value={op} key={op}>{op}</option>
          )
        })}
      </select>
      <div>選択された果物：{selected}</div>
    </div>
  );
};

export default Example;
