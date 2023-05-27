import React from "react";
import { Accordion, Button } from "react-bootstrap";

export const Messages = () => {
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          User with ID #{props.userId} has reported Post #{props.postId}
        </Accordion.Header>
        <Accordion.Body>
          <div className="report-content">
            <h2>Post #{props.postId}</h2>
            {postData.imagePath && (
              <img
                src={`https://localhost:44386/Post Images/${postData.imagePath}`}
                style={{ width: "200px", height: "200px" }}
                alt=""
              />
            )}
            <p>{postData.content}</p>
          </div>
          <div className="buttons">
            <Button
              className="reports-btn btn-primary"
              onClick={handleDeleteReport}
            >
              Unlock User
            </Button>
            <Button
              className="reports-btn btn-danger"
              onClick={handleDeletePost}
            >
              Delete Message
            </Button>
            <Button className="reports-btn btn-danger" onClick={handleLockUser}>
              Delete User{" "}
            </Button>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};
