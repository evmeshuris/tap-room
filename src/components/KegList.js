import React from "react";
import Keg from "./Keg";
import PropTypes from 'prop-types';

function KegList(props){
  return (
    <React.Fragment>
      <hr />
      {props.kegList.map((keg, index) => 
        <Keg 
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          alcohol={keg.alcohol}
          key={index} 
          pint={keg.pint}
          id={keg.id}/>
      )}
    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
};

export default KegList;