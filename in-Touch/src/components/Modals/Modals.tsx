import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Form } from 'react-bootstrap';


export function ChangePassword(props: any) {
  const handleToggleModal = () => {
    props.setShowModal(!props.showModal);
  };

  return (
    <Modal show={props.showModal} onHide={handleToggleModal} top>
      <Modal.Header closeButton>
        <Modal.Title>Change Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="inputPasswordOld">
            <Form.Label>Current Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group controlId="inputPasswordNew">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
          <Form.Group controlId="inputPasswordNewVerify">
            <Form.Label>Verify New Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary">Save</Button>
      </Modal.Footer>
    </Modal>
  );
}