import { MDBFile } from 'mdb-react-ui-kit';
import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import "./PostForm.css";

function PostForm(props:any) {
  const [values,setValues]= useState({
    Content : '',
    Image : null,
    userID  : props.userID
  })
  const onChange = (e:any) => {  
    const {name,value} = e.target;  
      setValues({ ...values, [name]:value });
  }
  const handleFileChange = (event:any) => {
    setValues({
      ...values,
      Image: event.target.files[0]
    });
  };
  const makePost=(e:any)=>{
    e.preventDefault();
  }
  return (
    <div className="post-container">
      <form id="create-post">
        <FormControl
          as="textarea"
          rows={5}
          placeholder="What's on your mind today?"
          style={{ width: "100%", height: "100px" }}
          onChange={onChange}
        />
        <MDBFile label='Want to add an image?' size='sm' id='formFileSm' onChange={handleFileChange} /> 
        <Button variant="outline-primary" className="butoni-post">
          Post
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
