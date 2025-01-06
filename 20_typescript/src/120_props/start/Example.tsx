import {Hello,Btn} from "./Hello";

const Example = () => {
  return <>
  <Btn fn={(text)=>console.log(text)}></Btn>
  <Hello text="Hello">TypeScript</Hello>
  </>
};

export default Example;
