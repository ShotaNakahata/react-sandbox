import {useState} from 'react'
const Example = () => {
  const [Val,setVal] = useState(); 
  return (
    <>
      <input type="text" 
      onChange = {(e)=>{
        setVal(e.target.value);
      }}/> = {Val}
    </>
  );
};

export default Example;
