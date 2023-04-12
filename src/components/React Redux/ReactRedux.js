import React from "react";
import CakeContainer from "./CakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";
import HooksCakeContainer from "./HooksCakeContainer";
import IceCreamContainer from "./redux/IceCreamContainer";
import NewCakeContainer from "./redux/NewCakeContainer";
import ItemContainer from "./redux/ItemContainer";
import UserContainer from "./UserContainer";

const ReactRedux = () => {
  return (
    <Provider store={store}>
      <div>
        {/* normal cake container
        <CakeContainer />
        hook cake container
        <HooksCakeContainer />
        <br />
        <br />
        <br />
        buy icecream
        <IceCreamContainer />
        <br />
        <br />
        <br />
        new Cake Container with payload
        <NewCakeContainer />
        <br />
        <br />
        <br />
        mapstatetoprops for Cake
        <ItemContainer cake />
        <br />
        mapstatetoprops for icecream
        <ItemContainer icecream/> */}

        <UserContainer />
      </div>
    </Provider>
  );
};

export default ReactRedux;
