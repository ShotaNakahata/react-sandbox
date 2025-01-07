import { useState } from "react";

const animals = ["Dog", "Cat", "Rat"];


// const animal= ()=>{
//   const isMatch = animals.filter(animals.indexOf(fillterVal)!== -1)
//   const animal=isMatch.map((animal)=>{
//     return(<li key={animal}>{animal}</li>);
//   })
// }

const Example = () => {
    const [fillterVal,setFilterVal]=useState("")
    const animalList=animals.filter(animal=>animal.indexOf(fillterVal)!==-1)
    .map((animal)=>{return(<li key={animal}>{animal}</li>)
})
  return (
    <>
      <h3>配列のフィルター</h3>
      <input type="text" value={fillterVal} onChange={(e)=>setFilterVal(e.target.value)} />
      <ul>
        {/* {animals
          .map((animal) => (
          <li>{animal}</li>
        ))} */}
        {animalList}
      </ul>
    </>
  );
};

export default Example;
