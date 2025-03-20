import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./yw-resume.pdf"
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";


const Services = () => {

  const transition = { duration: 1, type: 'spring' };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="services" id="Services">
      {/* left side*/}
      <div className="s-name">
        <span style={{color: darkMode? 'white': ''}}>My Professional</span>
        <span>Services</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur 
          modi totam dolorem <br />
          fugit voluptatum sint aspernatur nobis 
        </span>

        <a href={Resume} download>
        <button className="button s-button">Download CV</button>
        </a>

        <div className="blur s-blur1" style={{background: '#ABF1FF94'}}>  
        </div>
      </div>

      {/* right side */}
      <div className="cards">
        {/* 1st card */}
        <motion.div 
        initial={{ left: "25rem" }}
        whileInView={{ left: "14rem" }}
        transition={transition}

        style={{left: '14rem', position: 'absolute'}}>
          <Card
          emoji = {HeartEmoji}
          heading = {"Web Design"}
          detail = {"figma,sketch,photoshop"}
          /> 
        </motion.div>
       
       {/* 2nd Card */}
       <motion.div
       initial={{ left: "-11rem", top: "12rem" }}
       whileInView={{ left: "-4rem" }}
       transition={transition}

       style={{top: '12rem', left: '-2rem',position: 'absolute'}}>
          <Card
          emoji = {Glasses}
          heading = {"Web Developer"}
          detail = {"Html,css,javascript"}
          /> 
        </motion.div>

       {/* 3rd Card */}
       <motion.div
       initial={{ top: "19rem", left: "25rem" }}
       whileInView={{ left: "12rem" }}
       transition={transition}
        
       style={{top: '19rem',left: '14rem', position: 'absolute'}}>
          <Card
          emoji = {Humble}
          heading = {"UI/UX"}
          detail = {" JHJSDHJJDSHJD"}
          /> 
        </motion.div>
        <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
      </div>
    </div>
  );
};

export default Services;
