import  Input  from "./component/Input";
import  Select  from "./component/Select";
import Result from "./component/Result";
import { CalcProvider } from "./context/CalcContext";
const Example = () => {
  return (
    <CalcProvider>
      <Input name="a" />
      <Input name="b" />
      <Select />
      <Result />
    </CalcProvider>
  );
};

export default Example;
