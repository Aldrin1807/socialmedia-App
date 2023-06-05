import axios from "axios";
import React, { useState } from "react";
import { Accordion, Button } from "react-bootstrap";
import swal from "sweetalert";

export const Messages = (props: any) => {
  const [change,setChange]=useState(false);

  const handleDeleteMessage = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, the Message cannot be recovered!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((confirmed) => {
      if (confirmed) {
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
              swal("Post successfully kept!", " ", "success");
            } else {
              swal(`${response.data.message}`, " ", "Error");
            }
          });
      }
    });
  };
  const handleUnlockUser = () => {
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
            `https://localhost:44386/api/Users/unlock-account?userId=${props.userId}`,{
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
      }
    });
  };

  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          User with ID #{props.userId} has sent Message #{props.id}
        </Accordion.Header>
        <Accordion.Body>
          <div className="report-content">
            <h2>Message #{props.id}</h2>
            {/* {postData.imagePath && (
              <img
                src={`https://localhost:44386/Post Images/${postData.imagePath}`}
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
            )} */}
            <p>{props.message}</p>
          </div>
          <div className="buttons">
            <Button
              className="reports-btn btn-primary"
              onClick={handleUnlockUser}
            >
              Unlock User
            </Button>
            <Button
              className="reports-btn btn-danger"
              onClick={handleDeleteMessage}
            >
              Delete Message
            </Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};


