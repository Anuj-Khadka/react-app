import React from "react";
import CakeContainer from "./CakeContainer";
import store from "./redux/store";
import { Provider } from "react-redux";

const ReactRedux = () => {
  return (
    <Provider store={store}>
      <div>
        <CakeContainer />
      </div>
    </Provider>
  );
};

export default ReactRedux;
