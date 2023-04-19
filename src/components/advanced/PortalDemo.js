import React from "react";
import ReactDOM  from "react-dom";

let portalModal = document.getElementById("portal-modal");
const PortalDemo = () => {
  return ReactDOM.createPortal(
    <div>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum non eaque
      officiis!
      <button>empty</button>
    </div>,
    portalModal
  );
};

export default PortalDemo;
