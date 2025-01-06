const Example = () => {
  const repeatStr = (value: string, times: number): string[] => {
    return new Array(times).fill(value);
  }

  const repeatNum = (value: number, times: number): number[] => {
    return new Array(times).fill(value);
  }

  console.log(repeatStr("A", 3))
  console.log(repeatNum(1, 3))


  const repeat = <T>(value: T, times: number): T[] => {
    return new Array(times).fill(value)
  }

  console.log(repeat<number>(8, 3))
  console.log(repeat<string>("str", 4))
};

export default Example;
