import React, { useState } from "react";
import "./Modal.css";
import { useLocation, Route } from "react-router-dom";

export default function Modal() {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {location.pathname !== "/" && modalOpen && (
        <Route path="*">
          <div className="modal-window">
            <div className="modal-box">
              <p>Please check the URL.</p>
              <button className="close-modal" onClick={closeModal}>X</button>
            </div>
          </div>
        </Route>
      )}
    </>
  );
}
