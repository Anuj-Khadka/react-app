import React, { useState } from "react";
import Modal from "react-modal";

// learnings: Modal Component, isOpen attribute, overlay response(onRequestClose), remove error in console, styling

Modal.setAppElement("#root");
const ModalDemo = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div>
      <h2>
        <a href="https://reactcommunity.org/react-modal/">Modal</a>
      </h2>
      <button onClick={() => setModalIsOpen(true)}>Open Modal</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        shouldCloseOnOverlayClick={() => setModalIsOpen(false)}
        style={{
          overlay: {
            background: "grey",
          },
          content: {
            color: "#4afce0",
          },
        }}
      >
        <h4>Modal Title</h4>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique,
          sed veniam officia ipsa expedita non!
        </p>
        <div>
          <button onClick={() => setModalIsOpen(false)}>Close Modal</button>
        </div>
      </Modal>
    </div>
  );
};

export default ModalDemo;
