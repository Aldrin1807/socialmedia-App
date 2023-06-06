import axios from "axios";
import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import swal from "sweetalert";

export const Messages = (props: any) => {
  const [change,setChange]=useState(false);

  const handleUnlockUserandDelete = () => {
    swal({
      title: "Are you sure?",
      text: "Only you can lock it again!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
        axios
          .put(
            `https://localhost:44386/api/Users/unlock-account?userId=${props.userId}`,{},{
              headers: {
                Authorization: `Bearer ${props.token}`,
              }
            }
          )
          .then((response: any) => {
            if (response.data.status == "Success") {
              swal(`${response.data.message}`, " ", "success");
              setChange(!change)
            } else {
              swal(`${response.data.message}`, " ", "Error");
            }
          });
          axios
          .delete(
            "https://localhost:44386/api/SupportMessages/delete-support-message",
            {
              headers: {
                Authorization: `Bearer ${props.token}`,
              },
              data: {
                id: props.id,
              },
            }
          )
          .then((response: any) => {
            if (response.data.status == "Success") {
              swal("Message successfully deleted!", " ", "success");
            } else {
              swal(`${response.data.message}`, " ", "Error");
            }
          });
      }
    });
  };

  return (
    <div className='reports-msg'>
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          User with ID #{props.userId} has sent a message 
        </Accordion.Header>
        <Accordion.Body>
          <div className="report-content">
            <h2 className='primary-text'>Message</h2>
            {/* {postData.imagePath && (
              <img
                src={`https://localhost:44386/Post Images/${postData.imagePath}`}
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
            )} */}
             <div className='contenti-rep'>
            <p>{props.message}</p>
            </div>
          </div>
          <div className="buttoni">
            <Button
              className="buttonat"
              onClick={handleUnlockUserandDelete}
              variant="outline-primary"
            >
              Unlock User and delete Message
            </Button>
            
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
    </div>
  );
};


