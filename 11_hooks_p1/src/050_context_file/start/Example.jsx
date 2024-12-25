import { useState } from "react";
import "./Example.css";

const Example = () => {
  const [theme, setTheme] = useState('light')
  
  const changeTheme = (e) => setTheme(e.target.value)
  
  const THEMES = ['light', 'dark', 'red'];

  return (
    <>
      <header className={`content-${theme}`}>
        {THEMES.map(_theme=>{
          return(
            <label id="_theme">
              <input type="radio" value={_theme} key={_theme} 
              checked={theme===_theme}
              onClick={changeTheme}
              />
              {_theme}
            </label>
            
          )
        })}
        
      </header>
      <main className={`content-${theme}`}>
        <h1>テーマの切り替え</h1>
      </main>
    </>
  );
};

export default Example;
