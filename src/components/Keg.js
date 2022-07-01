import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <h3>Beer: {props.name}</h3>
      <ul>
        <li>Brand: {props.brand}</li>
        <li>Price ${props.price}</li>
        <li>Alcohol %: {props.alcohol}</li>
      </ul>
      <hr/>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcohol: PropTypes.string.isRequired
};

export default Keg;