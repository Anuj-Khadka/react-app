import React from "react";
import { connect } from "react-redux";
import buyIceCream from "./icecream/icecream-action";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of IceCreams = {props.numOfIceCream}</h2>
      <button onClick={props.buyIceCream}>Buy IceCreams</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    numOfIceCream: state.iceCream.numOfIceCream,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IceCreamContainer)