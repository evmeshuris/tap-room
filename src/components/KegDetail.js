import React from "react";
import PropTypes from 'prop-types';
import KegList from "./KegList";
import Keg from "./Keg";

function KegDetail(props){
  return (
    <React.Fragment>
      <h3>{props.name}'s Details</h3>
      <ul>
        <li>Brand: {props.brand}</li>
        <li>Price ${props.price}</li>
        <li>Alcohol %: {props.alcohol}</li>
        <li>Pints: {props.pint}</li>
      </ul>
      <hr/>
    </React.Fragment>
  );
}

export default KegDetail;