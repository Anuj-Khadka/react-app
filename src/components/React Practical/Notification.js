import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// configurations: message, position, type, auto-close, render custom component

const Notification = () => {
  const notify = () => {
    toast("Simple Notification Deafult");
    toast.success("Success Notification 1", {
      position: toast.POSITION.TOP_LEFT,
    });
    toast.info("Info Notification 2", { position: toast.POSITION.TOP_CENTER });
    toast.warn(<CustomToast />, {
      position: toast.POSITION.TOP_RIGHT,
    });
    toast.error("Error Notification 4", {
      position: toast.POSITION.BOTTOM_LEFT,
    });
    toast("Simple Notification 5 (autoClose)", {
      position: toast.POSITION.BOTTOM_CENTER,
      autoClose: 2000,
    });
    toast("Simple Notification 6", {
      position: toast.POSITION.BOTTOM_RIGHT,
      autoClose: false,
    });
  };

  return (
    <div>
      <h2>
        <a href="https://github.com/fkhadra/react-toastify">Notification</a>
      </h2>
      <button onClick={notify}>Notify</button>
      <ToastContainer />
    </div>
  );
};

const CustomToast = ({ closeToast }) => {
  return (
    <div>
      Something went wrong!
      <button onClick={closeToast}>Close</button>
    </div>
  );
};

export default Notification;
