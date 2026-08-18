import React, { useState, useEffect } from "react";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalHandle = () => {
    setIsOpen((prev) => !prev);
  };
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);
  return (
    <div>
      <h2>Modal</h2>
      <button onClick={modalHandle}>Open ModalBox</button>
      {isOpen === true ? (
        <div className="overlay" onClick={() => setIsOpen(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <p onClick={modalHandle} className="close">
              X
            </p>
            <b>modal header</b>
            <p>modal content</p>
            <p>modal footer</p>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Modal;
