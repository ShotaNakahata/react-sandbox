import { useState } from "react";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  const animalList = animals.filter(animal=>animal.indexOf(filterVal) !==-1)
  .map((animal)=>{
    return(
      <li key={animal}>{animal=="Dog"?animal+"⭐︎":animal}</li>
    )
  })
  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {/* {animals
          .filter((animal) => {
            const isMatch = animal.indexOf(filterVal) !== -1;
            console.log(animal.indexOf(filterVal));
            return isMatch;
          })
          .map((animal) => (
            <li key={animal}>{animal}</li>
          ))} */}
          {animalList}
      </ul>
    </>
  );
};

export default Example;
