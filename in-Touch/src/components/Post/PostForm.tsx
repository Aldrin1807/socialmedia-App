// import { MDBFile } from 'mdb-react-ui-kit';
import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import "./PostForm.css";

function PostForm() {
  return (
    <div className="post-container">
      <form id="create-post">
        <FormControl
          as="textarea"
          rows={5}
          placeholder="What's on your mind today?"
          style={{ width: "100%", height: "100px" }}
        />
        {/* <MDBFile label='Want to add an image?' size='sm' id='formFileSm' /> */}
        <Button variant="outline-primary" className="butoni-post">
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
