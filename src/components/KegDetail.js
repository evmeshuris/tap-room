import React from "react";
import PropTypes from 'prop-types';
// import KegList from "./KegList";
// import Keg from "./Keg";

function KegDetail(props){
  const { keg } = props;
  return (
    <React.Fragment>
      <h3>{keg.name}'s Details</h3>
      <p>Brand: {keg.brand}</p>
      <p>Price ${keg.price}</p>
      <p>Alcohol %: {keg.alcohol}</p>
      <p>Pints: {keg.pints}</p>

      { keg.pints > 0 ? <button onClick= {props.removePint}>Sell Pint</button> : null}
      <hr/>
    </React.Fragment>
  );
}
KegDetail.propTypes = {
  keg: PropTypes.object,
  removePint: PropTypes.func
};

export default KegDetail;


