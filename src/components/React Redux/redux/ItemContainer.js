import React from "react";
import { connect } from "react-redux";
import buyIceCream from "./icecream/icecream-action";
import buyCake from "./cake/cake-actions";

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}</h2>
      <button onClick={props.buyItem}>Buy {props.item}</button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake
    ? state.cake.numOfCakes
    : state.iceCream.numOfIceCream;
  return {
    item: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction = ownProps.cake
    ? () => dispatch(buyCake())
    : () => dispatch(buyIceCream());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
