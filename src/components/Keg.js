import React from "react";
import PropTypes from "prop-types";

function Keg(props){
  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
      <h3>Beer: {props.name}</h3>
      <ul>
        <li>Brand: {props.brand}</li>
        <li>Price ${props.price}</li>
        <li>Alcohol %: {props.alcohol}</li>
        <li>Pints: {props.pint}</li>
      </ul>
      <hr/>
      </div>
    </React.Fragment>
  );
}

Keg.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  alcohol: PropTypes.string.isRequired,
  pint: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;