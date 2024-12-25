import { ThemeContext } from "../Example";
import { useContext } from "react";

const Header = () => {
  const changeTheme = (e) => setTheme(e.target.value);
  const [theme, setTheme] = useContext(ThemeContext);
  const THEMES = ["light", "dark", "red"];
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme) => {
        return (
          <label id="_theme" key={_theme}>
            <input
              type="radio"
              value={_theme}
              checked={theme === _theme}
              onChange={changeTheme}
            />
            {_theme}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
