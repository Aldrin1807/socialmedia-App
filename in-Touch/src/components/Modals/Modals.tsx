import React, { useState } from "react";
import axios from "axios";
import { Modal, Button, Form, ModalDialog } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Modals.css'

export function ChangePassword(props: any) {
  const handleToggleModal = () => {
    props.setShowModal(!props.showModal);
  };
  return (
    <Modal show={props.showModal} onHide={handleToggleModal} top className="password-modal" >
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
      <Button variant="outline-danger">Cancel</Button>
        <Button variant="outline-primary">Save</Button>
      </Modal.Footer>
    </Modal>
  );
}

export function ChangePersonalInfo(props: any) {
  const handleToggleModal = () => {
    props.setShowModal(!props.showModal);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Handle form submission and update personal information
    // ...

    // Close the modal
    handleToggleModal();
  };

  return (
    <Modal show={props.showModal} onHide={handleToggleModal} top className="pinfo-modal">
      
    <Modal.Header closeButton>
      <Modal.Title>Update Personal Information</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text"  />
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Account type</Form.Label>
          <div style={{display:'flex',justifyContent:'flex-start'}}>
            <Form.Check
              type="radio"
              id="public-radio"
              name="visibility"
              label="Public"
            />
            <Form.Check
              type="radio"
              id="private-radio"
              name="visibility"
              label="Private"
            />
          </div>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="outline-danger">Cancel</Button>
      <Button variant="outline-primary">Update</Button>
    </Modal.Footer>

  </Modal>
  );
}