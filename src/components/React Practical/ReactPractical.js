import React from "react";
import Icons from "./Icons";
import Notification from "./Notification";
import ModalDemo from "./Modals";
import ToolTips from "./ToolTips";
import CountUpDemo from "./CountUpDemo";

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
      {/* CountUpDemo */}
      <CountUpDemo/>
      <hr />
    </div>
  );
};

export default ReactPractical;
