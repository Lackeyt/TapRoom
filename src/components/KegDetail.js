import React from "react";
import PropTypes from "prop-types";

function KegDetail(props){
  const {keg, onClickingDelete, onClickingEdit} = props;

  return(
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name} - {keg.brand}</h3>
      <p>{keg.price}</p>
      <p><em>{keg.alcoholContent}</em></p>
      <p>Pints Remaining: </p>
      <button onClick={()=>onClickingEdit(keg.id)}>Update Keg info</button>
      <button onClick={()=>onClickingDelete(keg.id)}>Remove Keg</button>
      <hr/>
    </React.Fragment>
  );
}

KegDetail.propTypes = {
  keg: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func
}

export default KegDetail;