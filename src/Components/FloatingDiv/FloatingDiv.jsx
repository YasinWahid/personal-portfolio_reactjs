import './FloatingDiv.css'
import PropTypes from "prop-types";

const FloatinDiv = ({img, txt1, txt2}) => {
  return (

    <div className="floatingdiv" style={{}}>
      <img className="img" src={img} alt="" />
      <span>
        {txt1}
        <br/>
        {txt2}
      </span>
    </div>
  );
};

FloatinDiv.propTypes = {
  img: PropTypes.node.isRequired,
  txt1: PropTypes.node.isRequired,
  txt2: PropTypes.node.isRequired,
};

export default FloatinDiv;