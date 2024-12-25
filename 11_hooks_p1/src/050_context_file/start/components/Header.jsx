import { useTheme,useUpdateTheme } from "../context/ThemeContext";
const Header = () => {
    console.log("Header")
  const changeTheme = (e) => updateTheme(e.target.value);
  const theme = useTheme();
  const updateTheme = useUpdateTheme();
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
