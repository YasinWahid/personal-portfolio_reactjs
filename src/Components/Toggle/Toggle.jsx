import { useContext } from "react";
import "./Toggle.css";
import { UilSun, UilMoon } from "@iconscout/react-unicons";
import { ThemeContext } from "../../Context";

const Toggle = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <UilMoon color="var(--dblue)" />
      <UilSun color="gold" />
      <div
        className="t-button"
        style={darkMode ? { left: "2px" } : { right: "2px" }}
      ></div>
    </div>
  );
};

export default Toggle;
