import { useContext } from "react";
import { ThemeContext } from "../../Context";
import "./Experience.css";

const Experience = () => {

  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="experience" id='Experience'>
      <div className="achievement">
      <div className="circle" style={{color: darkMode?'var(--dblue)':''}}>8+</div>
        <span style={{color: darkMode?'white':''}}>years</span>
        <span>Experience</span>
      </div>

      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--dblue)':''}}>20+</div>
        <span style={{color: darkMode?'white':''}}>completed</span>
        <span>Projects</span>
      </div>

      <div className="achievement">
        <div className="circle" style={{color: darkMode?'var(--dblue)':''}} >5+</div>
        <span style={{color: darkMode?'white':''}}>companies</span>
        <span>work</span>
      </div>
    </div>
  );
};

export default Experience;
