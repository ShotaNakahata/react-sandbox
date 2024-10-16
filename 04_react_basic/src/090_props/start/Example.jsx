import Child from "./components/Child";

const Example = () => {
    const hello = (arg)=>`hello ${arg}`
    const obj = {
        name:"tom",
        age:20
    }
    const o = {color:"red",
        num : 123 
    }
    return(
        <>
        <Child 
        {...o}
        num = {123} 
        helloFn={hello}
        obj1={{
            name:"Jon",
            age:23}}
        obj={obj}
        
        />
        {/* <Child color = "red" /> */}
        </>
    )
};

export default Example;
