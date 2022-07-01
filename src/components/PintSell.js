import React from "react";
import { v4 } from 'uuid';
import PropTypes from 'prop-types';


function PintSell(props){
  function handlePintSellSubmission(event) {
    event.preventDefault();
    props.onPintSell({
      name: event.target.name.value, 
      brand: event.target.brand.value, 
      price: event.target.price.value,
      alcohol: event.target.alcohol.value, 
      id: v4(),
      pint: event.target.pint.value
    });
  }
}



PintSell.propTypes = {
  onPintSell: PropTypes.func
  };
  
  export default PintSell;