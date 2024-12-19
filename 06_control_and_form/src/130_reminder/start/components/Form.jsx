import { useState } from "react";
const Form = ({ createTodo }) => {
  const [inputVal, setInputVal] = useState("");
  
  const addTodo = () => {
    const newTodo = {
      id:  Math.floor(Math.random() * 1e5),
      content: inputVal,
    };
    createTodo(newTodo);
  };

  return (
    <div>
      <input
        type="text"
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button onClick={addTodo}>追加</button>
      {inputVal}
    </div>
  );
};
export default Form;
