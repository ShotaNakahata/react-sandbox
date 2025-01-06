import { useState } from "react";

type Todo = {
    id:number,
    text:string
}

const Example = () => {
  const [todos,setTodos]= useState<Todo[]>([{id:0,text:"homework"}])
};

export default Example;
