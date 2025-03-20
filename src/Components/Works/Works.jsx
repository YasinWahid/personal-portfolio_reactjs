import "./Works.css";
import Upwork from "../../img/upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/shopify.png";
import Facebook from "../../img/facebook.png";
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import {Link} from 'react-scroll';

const Works = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="works" id="works">
      {/* left side*/}
      <div className="s-name">
        <span style={{ color: darkMode ? "white" : "" }}>
          Works for all these
        </span>
        <span>Brands & Clients</span>
        <span>
          Lorem ipsum dolor sit amet, consectetur
          <br />
          modi totam dolorem
          <br />
          fugit voluptatum sint aspernatur nobis
          <br />
          ipsum dolor sit amet, consectetur
        </span>
         <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>

      {/* right side */}
      <div className="w-right">
        <motion.div
          className="w-mainCircle"
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle greenCircle"></div>
      </div>
    </div>
  );
};

export default Works;
