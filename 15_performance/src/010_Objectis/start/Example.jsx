import { useState } from "react";

const Example = () => {
  console.log("render from practice")
  const [state,setState]=useState({
    val:0
  })
  return (
    <>
    {/* <h3>再レンダリングが発生する条件</h3>
    <p>stateの値が変更された時</p>
    <p>Object.isによって変更は検知される</p> */}
    <button onClick={()=>setState({val:0})}> button A</button>
    <div><p>ボタンAクリック回数: {state.val}</p></div>
    </>
  );
};

export default Example;
