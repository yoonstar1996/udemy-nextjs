import React, { useState } from "react";
import Modal from "./Modal";
import Backdrop from "./Backdrop";

export default function Todo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  return (
    <>
      <div className="card">
        <h2>{props.text}</h2>
        <p>...</p>
        <div className="actions">
          <button className="btn" onClick={deleteHandler}>
            Delete
          </button>
        </div>
        {modalIsOpen ? (
          <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
        ) : null}
        {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
      </div>
    </>
  );
}
