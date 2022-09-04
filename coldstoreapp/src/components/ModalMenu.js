import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FaTruck } from "react-icons/fa";
import Form from "react-bootstrap/Form";

function ModalMenu() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Dispatch
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Truck Dispatch
            <FaTruck style={{ marginLeft: 10 }} />
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="formGroupDriver">
              <Form.Label>Driver's Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Driver's Name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupNumber">
              <Form.Label>Truck Number</Form.Label>
              <Form.Control type="text" placeholder="Example : AS 4091 Y" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGroupEscort">
              <Form.Label>Security Escort</Form.Label>
              <Form.Control type="text" placeholder="Example : John Doe" />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">
            Dispatch <FaTruck />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalMenu;
