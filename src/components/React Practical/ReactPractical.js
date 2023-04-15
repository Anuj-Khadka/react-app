import React from "react";
import Icons from "./Icons";
import Notification from "./Notification";
import ModalDemo from "./Modals";
import ToolTips from "./ToolTips";

const ReactPractical = () => {
  return (
    <div>
      ReactPractical
      <hr />
      {/* Icons  */}
      <Icons />
      <hr />
      {/* Notification */}
      <Notification />
      <hr />
      {/* Modal */}
      <ModalDemo/>
      <hr />
      {/* ToolTips */}
      <ToolTips/>
      <hr />
    </div>
  );
};

export default ReactPractical;
