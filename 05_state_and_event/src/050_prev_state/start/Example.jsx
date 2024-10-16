import { useState } from "react";

const Example = () => {
    const [Count,setCount]= useState(0)
    const CountUp = ()=>{
        setCount(Count+1);      
        setCount(prevstate=>{
            return prevstate+1;
        });
    };
    const CountDown = ()=>{
        setCount(Count-1)
        setCount(prevstate=>{
            return prevstate - 1;
        })
    }
    return(
        <>
        <p>現在のカウント{Count}</p>
        <button
        onClick={CountUp}
        >+</button>

        <button
        onClick={CountDown}>-</button>
        </>
    )
};

export default Example;
