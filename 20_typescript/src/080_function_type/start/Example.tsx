const Example = () => {
  function sum(a: number, b: number) {
    return a + b
  }

  console.log(sum(1, 3))

  const sum2 = (a: number, b: number) => {
    return a + b
  }

  console.log(sum2(1, 4))

  const sum3 = (x: number, y: number): number => {
    return x + y
  }

  console.log(sum3(1, 9))

  type Sum = (x: number, y: number) => number
  const sum4: Sum = (x, y) => {
    return x - y
  }

  console.log(sum4(10, 3))
};

export default Example;
