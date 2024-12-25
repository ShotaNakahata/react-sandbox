import "./Example.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";
import  Footer  from "./components/Footer";


const Example = () => {
  return (
    <>
      <ThemeProvider>
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
};

export default Example;
