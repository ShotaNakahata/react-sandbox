import AnimalItem from './AnimalItem'

const AnimalList = ({filterAnimals}) => {
  if(filterAnimals.length == 0){
    return <h2>アニマルは存在しません</h2>
  }else
    return (
      <>
        <ul>
          {filterAnimals
            .map((animal) => {
              return <AnimalItem animal={animal} key={animal} />;
            })}
        </ul>
      </>
    );
  

};
export default AnimalList;
