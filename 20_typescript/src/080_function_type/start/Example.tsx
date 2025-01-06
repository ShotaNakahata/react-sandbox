const Example = () => {
  function sum(a: number, b: number) {
    return a + b
  }

  console.log(sum(1, 3))

  const sum2 = (a: number, b: number) => {
    return a + b
  }

  console.log(sum2(1, 4))
};

export default Example;
