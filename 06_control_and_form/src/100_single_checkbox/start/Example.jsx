import { useState } from "react";
const Example = () => {
  const [isChecked, setIsChecked] = useState(false);
  const checked = () => {
    setIsChecked((prev) => !prev);
  };
  return (
    <div>
      <label htmlFor="a">チェック：</label>
      <input type="checkbox" id="a" onChange={checked} checked={isChecked} />
      <div>{isChecked === true ? "on!" : "off!"}</div>
    </div>
  );
};

export default Example;
