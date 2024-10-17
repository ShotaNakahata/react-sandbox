import { useState } from "react";
import secondAnimalFilter from "./component/AnimalFilter";
import AnimalFilter from "./component/AnimalFilter";
import AnimalItem from "./component/AnimalItem";
import AnimalList from "./component/AnimalList";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  const filterAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList filterAnimals={filterAnimals} />
    </>
  );
};

export default Example;
