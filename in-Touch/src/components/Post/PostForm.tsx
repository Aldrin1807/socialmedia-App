
import React, { useEffect, useState } from "react";
import { Form, Button, FormControl } from "react-bootstrap";
import "./PostForm.css";
import axios from 'axios';
import { CiImageOn } from "react-icons/ci";

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
            setIsLoading(false);
            const fileInput = document.getElementById('formFileSm') as HTMLInputElement;
            fileInput.value = '';
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
          style={{ width: "100%", height: "60px", borderColor: error ? 'red' : undefined }}
          name="Content"
          onChange={onChange}
          value={values.Content}
        />
        <Button variant="outline-primary" className="butoni-post" onClick={makePost}>
        {isLoading ? 'Posting...' : 'Post'} 
        </Button>
      </form>
      <input type="file" id="fileInput" accept="image/*" onChange={handleFileChange} hidden />
      <label htmlFor="fileInput" className='add-image'>
        <CiImageOn className='image-icon' />
        {values.Image?<p className='image-p'>{values.Image.name}</p>:<p className='image-p'>Add an image</p>}
      </label>
    </div>
  );
}

export default PostForm;
