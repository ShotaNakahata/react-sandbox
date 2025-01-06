const Example = () => {
  const arry1: number[] = [1, 2, 3]
  console.log(arry1);

  const arry2: string[] = ["A", "B", "C"]
  console.log(arry2);

  const arry3: Array<number> = [2, 3, 4]
  console.log(arry3)

  const arry4: Array<string> = ["A", "B", "C"]
  console.log(arry4)

  const arry5: (number | string)[] = [1, "A", 3]
  console.log(arry5)

  const arry6: Array<number | string> = [1, "A", 3]
  console.log(arry6)

  type Person = { name: string, age?: number }

  const taro: Person = { name: "taro" }
  console.log(taro)

  const party: Person[] = [
    { name: "hanako", age: 30 },
    { name: "hanako2", age: 30 }
  ]

  console.log(party)

  const party2: { name: string, age: number }[] = [
    { name: "hanako", age: 30 },
    { name: "hanako2", age: 30 }
  ]

  console.log(party2)
};

export default Example;
