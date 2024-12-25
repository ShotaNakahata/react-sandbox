import "./Example.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";


const Example = () => {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <Main></Main>
      </ThemeProvider>
    </>
  );
};

export default Example;
