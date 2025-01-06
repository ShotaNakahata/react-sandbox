const Example = () => {
  let strOrNum: string | number = "hello"
  console.log(strOrNum)

  strOrNum = 123
  console.log(strOrNum)

  type HelloOrNum = "hello" | number;
  const hello: HelloOrNum = "hello"
  console.log(hello)
};

export default Example;
