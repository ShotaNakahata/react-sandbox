import { ThemeContext } from "../Example";
import { useContext } from "react";

const Main = () => {
  const [theme] = useContext(ThemeContext);
  return (
    <main className={`content-${theme}`}>
      <h1>テーマの切り替え</h1>
    </main>
  );
};

export default Main;
