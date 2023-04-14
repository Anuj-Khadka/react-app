import React from "react";
import store from "./rtk/app/store";
import { Provider } from "react-redux";

// react-redux
// import CakeContainer from "./CakeContainer";
// import HooksCakeContainer from "./HooksCakeContainer";
// import IceCreamContainer from "./redux/IceCreamContainer";
// import NewCakeContainer from "./redux/NewCakeContainer";
// import ItemContainer from "./redux/ItemContainer";
// import UserContainer from "./UserContainer";

// @reduxjs/toolkit
import CakeView from "./rtk/features/cake/CakeView";
import IcecreamView from "./rtk/features/icecream/IcecreamView";
import UserView from "./rtk/features/user/UserView";

const ReactRedux = () => {
  return (
    <Provider store={store}>
      <div>
        {/* normal react-redux */}
        {/* normal cake container
    //     <CakeContainer />
    //     hook cake container
    //     <HooksCakeContainer />
    //     <br />
    //     <br />
    //     <br />
    //     buy icecream
    //     <IceCreamContainer />
    //     <br />
    //     <br />
    //     <br />
    //     new Cake Container with payload
    //     <NewCakeContainer />
    //     <br />
    //     <br />
    //     <br />
    //     mapstatetoprops for Cake
    //     <ItemContainer cake />
    //     <br />
    //     mapstatetoprops for icecream
    //     <ItemContainer icecream/> 
    //     <UserContainer />
    */}


        {/* @reduxjs/toolkit */}
        <CakeView />
        <IcecreamView />
        <UserView />
      </div>
    </Provider>
  );
};

export default ReactRedux;
