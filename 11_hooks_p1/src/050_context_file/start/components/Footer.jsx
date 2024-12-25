import { useTheme } from "../context/ThemeContext";

const Footer = () => {
  const theme = useTheme();
  console.log("Footer")
  return (
    <main className={`content-${theme}`}>
      <h1>Footer</h1>
    </main>
  );
};

export default Footer;
