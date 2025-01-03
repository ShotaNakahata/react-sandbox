const Example = () => {
  const addFunc = import("./add").then((module) => {
    console.log(module.add(1, 3));
  });
  addFunc();
};

export default Example;
