import { useEffect } from "react";
import { useState } from "react";

const Example = () => {
  const [time, setTime] = useState(0);

  useEffect(()=>{
    window.setInterval(()=>{
      // console.log("set Time")
      setTime(prev=>prev+1)
    },1000)
  },[]);

  return (
    <>
    <h1>
      <time>{time}</time>
      <span>秒経過</span>
    </h1>
    </>
  );
};

export default Example;
