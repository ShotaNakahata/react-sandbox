import { useState, createContext } from "react";
import "./Example.css";
import  Main  from "./components/Main";
import  Header  from "./components/Header";

export const ThemeContext = createContext();
const Example = () => {
  const [theme, setTheme] = useState("light");
  return (
    <>
      <ThemeContext.Provider value={[theme, setTheme]}>
        <Header></Header>
        <Main></Main>
      </ThemeContext.Provider>
    </>
  );
};

export default Example;
