import "./Intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/vector1.png";
import Vector2 from "../../img/vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassesemoji from "../../img/glassesemoji.png";
import FloatingDiv from "../FloatingDiv/FloatingDiv";
import { ThemeContext } from "../../Context";
import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Intro = () => {
  const transition = { duration: 2, type: "spring" };
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span style={{ color: darkMode ? "white" : "" }}>Hi! I Am</span>
          <span>Yasin Wahid</span>
          <span>
            Frontend Developer with high level of experience in web designing
            and development, producting the Quality work
          </span>
        </div>
        <Link to="contact" smooth={true} spy={true}>
          <button className="button i-button">Hire me</button>
        </Link>
        <div className="i-icons">
          <a href="">
            <img src={Github} alt="yasinwahidgithub" />
          </a>
          <a href="">
            <img src={Linkedin} alt="yasinwahidlinkedin" />
          </a>
          <a href="">
            <img src={Instagram} alt="yasinwahidinstagram" />
          </a>
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} style={{ position: "absolute" }} />
        <img src={Vector2} style={{ position: "absolute" }} />
        <img src={boy} style={{ position: "absolute" }} />

        <motion.img
          initial={{ left: "-36%" }}
          whileInView={{ left: "-24%" }}
          transition={transition}
          src={glassesemoji}
          alt=""
          style={{ position: "absolute" }}
        />
        <motion.div
          initial={{ top: "-4%", left: "-74%" }}
          whileInView={{ left: "68%" }}
          transition={transition}
          className="floating-div"
          style={{ position: "absolute", top: "-4%", left: "58%" }}
        >
          <FloatingDiv img={Crown} txt1="Web" txt2="Developer" />
        </motion.div>
        <motion.div
          initial={{ top: "17rem", left: "9rem" }}
          whileInView={{ left: "0rem" }}
          transition={transition}
          className="floating-div"
          style={{ position: "absolute", top: "74%", left: "-8%" }}
        >
          <FloatingDiv img={thumbup} txt1="Best Design" txt2="Award" />
        </motion.div>
        {/* blur divs */}
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>
        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
