import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';

function ExpiredModal(props:any) {
  const [show, setShow] = useState(props.show);
  const navigate = useNavigate();
  const handleClose = () =>{
    navigate("/login")
  };


  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Your session has timed out.</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please login again.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ExpiredModal