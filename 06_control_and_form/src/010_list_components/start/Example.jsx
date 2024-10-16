
const animals = ["Dog", "Cat", "Rat"];

const Example = () => {
  const animal = animals.map((animal)=>{
    return(<li>hello{animal}</li>)
  })
  return (
    <>
      <h3>配列の操作</h3>
      <ul>
        {animal}
      </ul>
    </>
  );
};

export default Example;
