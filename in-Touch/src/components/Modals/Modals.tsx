import React, { useState } from 'react';
import {
  MDBBtn,
  MDBModal,
  MDBModalDialog,
  MDBModalContent,
  MDBModalHeader,
  MDBModalTitle,
  MDBModalBody,
  MDBModalFooter,
} from 'mdb-react-ui-kit';

export function DeletePost(props:any){
    const { showModal, setDeleteModal } = props.showModal;

    const toggleShow = () => {
        setDeleteModal(!showModal);
      };
      
    
    return (
      <>
      <MDBModal show={showModal} setShow={toggleShow} tabIndex='-1'>

          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Are you sure</MDBModalTitle>
                <MDBBtn className='btn-close' color='none' onClick={toggleShow}></MDBBtn>
              </MDBModalHeader>
              <MDBModalFooter>
                <MDBBtn color='danger' onClick={toggleShow}>
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