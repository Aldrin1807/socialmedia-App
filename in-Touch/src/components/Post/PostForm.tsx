import { MDBFile } from 'mdb-react-ui-kit';
import React, { useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import "./PostForm.css";
import axios from 'axios';

function PostForm(props:any) {
  const apiUrl = 'https://localhost:44386/api/Posts/make-post'
  const [error,setError] = useState(false);
  const [isLoading,setIsLoading] = useState(false);
  const [values,setValues]= useState({
    Content : '',
    Image : null,
    userID  : props.userID
  })
  const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {  
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const handleFileChange = (event:any) => {
    setValues({
      ...values,
      Image: event.target.files[0]
    });
  };
  const makePost=(e:any)=>{
    e.preventDefault();
    const contentValid = values.Content.length<1;
    if(contentValid){
      setError(true);
      setIsLoading(false);
    }else{
      setError(false);
      setIsLoading(true);
      const form = new FormData();
      form.append('Content',values.Content)
      if(values.Image){
        form.append('Image',values.Image)
      }
      form.append('userID',values.userID)

      // for (const pair of form.entries()) {
      //   console.log(pair[0], pair[1]);
      // }
      axios.post(apiUrl, form
        ).then((response) => {
          console.log(response.data);
          if(response.data.status=='Success'){
            setValues({
              Content : '',
              Image : null,
              userID  : props.userID
            })
            window.location.reload()
          }
      
      }) .catch((error) => {
        console.error(error);
      });
    }
  }
  return (
    <div className="post-container">
      <form id="create-post">
        <FormControl
          as="textarea"
          rows={5}
          placeholder="What's on your mind today?"
          style={{ width: "100%", height: "100px", borderColor: error ? 'red' : undefined }}
          name="Content"
          onChange={onChange}
          value={values.Content}
        />
        <MDBFile label='Want to add an image?' size='sm' id='formFileSm' onChange={handleFileChange} /> 
        <Button variant="outline-primary" className="butoni-post" onClick={makePost}>
        {isLoading ? 'Posting...' : 'Post'} 
        </Button>
      </form>
    </div>
  );
}

export default PostForm;
