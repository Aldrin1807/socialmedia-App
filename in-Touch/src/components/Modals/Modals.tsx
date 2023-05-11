import React, { useState } from "react";
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
  MDBInput,
} from "mdb-react-ui-kit";
import axios from "axios";

export function DeletePost(props: any) {
  const toggleShow = () => props.setDeleteModal(!props.deleteModal);
  const handleDelete = () => {
    axios.delete(props.deleteUrl);
    toggleShow();
  };
  return (
    <>
      <MDBModal
        show={props.deleteModal}
        setShow={props.setDeleteModal}
        tabIndex="-1"
      >
        <MDBModalDialog>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>
                Are you sure you want to delete this Post
              </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalFooter>
              <MDBBtn color="primary" onClick={toggleShow}>
                Cancel
              </MDBBtn>
              <MDBBtn color="danger" onClick={handleDelete}>
                Delete
              </MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}

export function Modal({ centredModal, setCentredModal, props }: any) {
  //   const [centredModal, setCentredModal] = useState(false);
  const [modalData, setModalData] = useState({
    name: "",
    type: "",
    value: "",
  });
  const toggleShow = (data: any) => {
    setCentredModal(!centredModal), setModalData(data);
  };

  return (
    <>
      <MDBModal tabIndex="-1" show={centredModal} setShow={setCentredModal}>
        <MDBModalDialog centered>
          <MDBModalContent>
            <MDBModalHeader>
              <MDBModalTitle>Change {modalData.name} </MDBModalTitle>
              <MDBBtn
                className="btn-close"
                color="none"
                onClick={toggleShow}
              ></MDBBtn>
            </MDBModalHeader>
            <MDBModalBody>
              <MDBInput
                label="Password input"
                id="typePassword"
                type={modalData.type}
                value={modalData.value}
              />
            </MDBModalBody>
            <MDBModalFooter>
              <MDBBtn color="secondary" onClick={toggleShow}>
                Close
              </MDBBtn>
              <MDBBtn>Save changes</MDBBtn>
            </MDBModalFooter>
          </MDBModalContent>
        </MDBModalDialog>
      </MDBModal>
    </>
  );
}
