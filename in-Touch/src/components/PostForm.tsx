import React, { useState } from 'react';
import { Form, Button, FormControl } from 'react-bootstrap';
import './PostForm.css'

function PostForm(){
  return (
    <div className='post-container'>
         <form id='create-post'>
                <FormControl type="text" placeholder="What's on your mind today?"  style={{ width: '100%',height:'100px' }}  />
                <div className="form-group">
                <label htmlFor="fileInput">Want to add an image?</label>
                <br />
                <input type="file" className="form-control-file" id="fileInput" accept="image/*" multiple />
                 </div>
                <Button variant="outline-primary" className='butoni-post'>Post</Button>
        </form>
  </div>
  )
}

export default PostForm;