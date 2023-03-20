import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ModalCarousel from "./ModalCarousel";
import Image from "./productImages/plain-black-t-shirt-wyo.webp";

function CustomModal({ show, setShow }) {
  const handleClose = () => setShow(false);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        style={{ height: "100vh", width: "100vw" }}
        animation={true}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div style={{height:"100vh"}}>
            <ModalCarousel />
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
export default CustomModal;
