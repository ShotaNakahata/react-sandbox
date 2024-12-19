import { useState } from "react";

const Example = () => {
  const [isSelected, setIsSelected] = useState(false);

  const clickHandler = () => setIsSelected((prev) => !prev);

  const style = {
    display: "block",
    margin: "auto",
    "border-radius": "9999px",
    border: "none",
    width: 120,
    height: 60,
    fontWeight: "bold",
    cursor: "pointer",
    backgroundColor: isSelected ? "pink" : "",
  };

  return (
    <>
      <button onClick={clickHandler} style={style}>
        ボタン
      </button>
      <div style={{textAlign:"center"}}>{isSelected && "クリックされました。"}</div>
    </>
  );
};

export default Example;
