import React, { useEffect, useState } from "react";
import axios from "axios";
import { Modal, Button, Form, ModalDialog } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './Modals.css'
import swal from "sweetalert";

export function ChangePassword(props: any) {
  const [oldPasswordLengthError,setOldPasswordLengthError] = useState(false);
  const [newPasswordLengthError,setNewPasswordLengthError] = useState(false);
  const [confirmPasswordLengthError,setConfirmPasswordLengthError] = useState(false);
  const [passwordDontMatch,setPasswordDontMatch] = useState(false);
  const handleToggleModal = () => {
    setValues({
      oldPassword : '',
      newPassword : '',
      confirmPassword : ''
    })
    setOldPasswordLengthError(false)
    setNewPasswordLengthError(false)
    setConfirmPasswordLengthError(false);
    setPasswordDontMatch(false);

    props.setShowModal(!props.showModal);
   
  };
  const [values,setValues] = useState({
    oldPassword : '',
    newPassword : '',
    confirmPassword : ''
  })
  const handleForm = () =>{
    const oldPasswordValid = values.oldPassword.length >= 8 && values.oldPassword.length <= 20;
    const newPasswordValid = values.newPassword.length >= 8 && values.newPassword.length <= 20;
    const confirmPasswordValid = values.confirmPassword.length  >= 8 && values.confirmPassword.length <= 20;
    const passwordMatch = values.newPassword===values.confirmPassword

    setOldPasswordLengthError(!oldPasswordValid)
    setNewPasswordLengthError(!newPasswordValid)
    setConfirmPasswordLengthError(!confirmPasswordValid);

    if(oldPasswordValid&&newPasswordValid&&confirmPasswordValid){
      setPasswordDontMatch(!passwordMatch);
      if(passwordMatch){
        swal({
          title: 'Confirmation',
          text: 'Are you sure you want to update your password?',
          icon: 'warning',
          buttons: ['Cancel', 'Yes, update it!'],
          dangerMode: true,
        }).then((confirmed) => {
          if (confirmed) {
                axios.put('https://localhost:44386/api/Users/update-password', {
                  id: props.userId,
                  oldPassword: values.oldPassword,
                  newPassword: values.newPassword
                }, {
                  headers: { 'Authorization': `Bearer ${props.token}` }
                })
              .then((response:any) => {
                if(response.data.status=="Success"){
                swal({
                  title: 'Password Updated',
                  text: 'Your password has been successfully updated.',
                  icon: 'success',
                })
                handleToggleModal()
                }else{
                  swal({
                    title: 'Error',
                    text: `${response.data.message}`,
                    icon: 'error',
                  });
                  handleToggleModal()
              }
              })
          }
        });
      }
    }
    

  }
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Modal show={props.showModal} onHide={handleToggleModal} top className="password-modal" >
      <Modal.Header closeButton>
        <Modal.Title>Change Password</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="inputPasswordOld">
            <Form.Label>Current Password</Form.Label>
            <Form.Control type="password"  name="oldPassword" value={values.oldPassword} onChange={onChange} />
            {oldPasswordLengthError?
            <label htmlFor="" className="error-label">Password more than 8 characters less than 20</label>:''}
          </Form.Group>
          <Form.Group controlId="inputPasswordNew">
            <Form.Label>New Password</Form.Label>
            <Form.Control type="password"  name="newPassword" value={values.newPassword} onChange={onChange}/>
            {newPasswordLengthError?
            <label htmlFor="" className="error-label">Password more than 8 characters less than 20</label>:''}
          </Form.Group>
          <Form.Group controlId="inputPasswordNewVerify">
            <Form.Label>Confirm New Password</Form.Label>
            <Form.Control type="password"  name="confirmPassword" value={values.confirmPassword} onChange={onChange}/>
            {confirmPasswordLengthError?
            <label htmlFor="" className="error-label">Password more than 8 characters less than 20</label>:''}
             {passwordDontMatch?
            <label htmlFor="" className="error-label">Passwords don't match. Please verify again.</label>:''}
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
      <Button variant="outline-danger" onClick={handleToggleModal}>Cancel</Button>
        <Button variant="outline-primary" onClick={handleForm}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
export function ChangeProfilePicture(props: any) {
  const [emptyError, setEmptyError] = useState(false);
  const [image, setImage] = useState<File | null>(null);

  const handleToggleModal = () => {
    setImage(null);
    setEmptyError(false);
    props.setShowModal(!props.showModal);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setImage(event.target.files[0]);
    }
  };
  const handleSubmit = () =>{
    const fileValid = image!=null
    setEmptyError(!fileValid)
    if(fileValid){
      const formData = new FormData();
      formData.append('Id',props.userId);
      formData.append('Image',image);
      swal({
        title: 'Confirmation',
        text: 'Are you sure you want to update your Profile Picture?',
        icon: 'warning',
        buttons: ['Cancel', 'Yes, update it!'],
        dangerMode: true,
      }).then((confirmed) => {
        if (confirmed) {
          axios.put('https://localhost:44386/api/Users/update-profile-pic', formData, {
            headers: { 'Authorization': `Bearer ${props.token}` }
          })
            .then((response:any) => {
              if(response.data.status=="Success"){
              swal({
                title: 'Profile Picture Updated',
                text: 'Your Profile Picture has been successfully updated.',
                icon: 'success',
              })
              handleToggleModal()
              }else{
                swal({
                  title: 'Error',
                  text: `${response.data.message}`,
                  icon: 'error',
                });
                handleToggleModal()
            }
            })
        }
      });
    }
  }

  return (
    <Modal show={props.showModal} onHide={handleToggleModal} top className="profile-pic-modal">
      <Modal.Header closeButton>
        <Modal.Title>Change Profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <label htmlFor="prfImage" className="image-input" style={emptyError ? { borderColor: 'red' } : undefined}>
            <input type="file" id="prfImage" accept="image/*" onChange={handleFileChange} hidden />
            {image ? <p>{image.name}</p> : <p>Upload image here.</p>}
          </label>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleToggleModal}>
          Cancel
        </Button>
        <Button variant="outline-primary"onClick={handleSubmit}>Save</Button>
      </Modal.Footer>
    </Modal>
  );
}
export function ChangePersonalInfo(props: any) {
 


  const [values, setValues] = useState({
    id: '',
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    isPrivate: false
  });
  const handleToggleModal = () => {
    setValues({
      id: props.userData.id,
      firstname: props.userData.firstname,
      lastname: props.userData.lastname,
      username: props.userData.username,
      email: props.userData.email,
      isPrivate: props.userData.isPrivate
    })
    props.setShowModal(!props.showModal);

  };
  
  useEffect(() => {
    setValues({
      id: props.userData.id,
      firstname: props.userData.firstname,
      lastname: props.userData.lastname,
      username: props.userData.username,
      email: props.userData.email,
      isPrivate: props.userData.isPrivate
    });
  }, [props.userData]);


  const radioOnChange = (isPrivateValue:any) => {
    setValues(prevValues => ({
      ...prevValues,
      isPrivate: isPrivateValue
    }));
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const [Firsterror,setFirsterror] = useState(false);
  const [Lasterror,setLasterror] = useState(false);
  const [Usererror,setUsererror] = useState(false);
  const [Emailerror,setEmailerror] = useState(false);
 

  const handleSubmit = (event: any) => {
    event.preventDefault();
   

    const FirstLastNameRegex = /^[a-zA-Z]{3,}$/;
    const UserNameRegex = /^[a-zA-Z0-9]{3,}$/;
    const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const firstNameValid = FirstLastNameRegex.test(values.firstname);
    const lastNameValid = FirstLastNameRegex.test(values.lastname);
    const userNameValid = UserNameRegex.test(values.username);
    const emailValid = EmailRegex.test(values.email);

    setFirsterror(!firstNameValid);
    setLasterror(!lastNameValid);
    setUsererror(!userNameValid);
    setEmailerror(!emailValid);

    const sameData =
    values.firstname === props.userData.firstname &&
    values.lastname === props.userData.lastname &&
    values.email === props.userData.email &&
    values.isPrivate === props.userData.isPrivate;

    console.log(sameData);

    if(firstNameValid && lastNameValid && userNameValid && emailValid){
      swal({
        title: 'Confirmation',
        text: 'Are you sure you want to update your data?',
        icon: 'warning',
        buttons: ['Cancel', 'Yes, update it!'],
        dangerMode: true,
      }).then((confirmed) => {
        if(sameData){
          swal('Same Data', 'The data is the same', 'info');
  
        }else{
        if (confirmed) {
          axios.put('https://localhost:44386/api/Users/update-user-info', {
            id: values.id,
            firstName: values.firstname,
            lastName: values.lastname,
            username: values.username,
            email: values.email,
            isPrivate: values.isPrivate
          }, {
            headers: { 'Authorization': `Bearer ${props.token}` }
          })
            .then((response:any) => {
              if(response.data.status=="Success"){
              swal({
                title: 'Info Updated',
                text: 'Your Personal Info has been successfully updated.',
                icon: 'success',
              })
              handleToggleModal()
              }else{
                swal({
                  title: 'Error',
                  text: `${response.data.message}`,
                  icon: 'error',
                });
                handleToggleModal()
            }
            })
          }
          }
        });
    }

  };


  return (
    <Modal show={props.showModal} onHide={handleToggleModal} top className="pinfo-modal">
      
    <Modal.Header closeButton>
    <Modal.Title>Update Personal Information</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" name="firstname" value={values.firstname} onChange={onChange} />
          {Firsterror?
          <label htmlFor="" className="error-label">First Name more than 3 characters</label>:''}
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Last Name</Form.Label>
          <Form.Control type="text" name="lastname" value={values.lastname} onChange={onChange}/>
          {Lasterror?
          <label htmlFor="" className="error-label">Last Name more than 3 characters</label>:''}
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Username</Form.Label>
          <Form.Control type="text" name="username" value={values.username} onChange={onChange}/>
          {Usererror?
          <label htmlFor="" className="error-label">Username more than 3 characters</label>:''}
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text"name="email"value={values.email} onChange={onChange}/>
          {Emailerror?
          <label htmlFor="" className="error-label">Email invalid</label>:''}
        </Form.Group>
        <Form.Group controlId="">
          <Form.Label>Account type</Form.Label>
          <div style={{display:'flex',justifyContent:'flex-start'}}>
            <Form.Check
              type="radio"
              id="public-radio"
              name="visibility"
              label="Public"
              checked={!values.isPrivate}
              onChange={() => radioOnChange(false)}
            />
            <Form.Check
              type="radio"
              id="private-radio"
              name="visibility"
              label="Private"
              checked={values.isPrivate}
              onChange={() => radioOnChange(true)}
            />
          </div>
        </Form.Group>
      </Form>
    </Modal.Body>
    <Modal.Footer>
    <Button variant="outline-danger" onClick={handleToggleModal}>Cancel</Button>
      <Button variant="outline-primary" onClick={handleSubmit}>Update</Button>
    </Modal.Footer>
  </Modal>
  );
}


export const ContactTeam = (props:any) => {
  
  const handleToggleModal = () => {
    props.setShowModal(!props.showModal);
    setMessage("");
  };
  const [emailError,setEmailError] = useState(false);
  const [messageError,setMessageError] = useState(false);

  const [message,setMessage] = useState('')
  const onChange = (e:any) => {
    const { name, value } = e.target;
    setMessage(value);
  };
  const handleSubmit=()=>{

    const messageValid = message.length > 0

    setMessageError(!messageValid);

    if(messageValid){
      axios.post('https://localhost:44386/api/SupportMessages/send-support-message',{
        usernameOrEmail: props.EmailorUsername,
        message: message,
      }).then((response:any)=>{
        if(response.data.status=="Success"){
          swal({
            title: 'Message sent',
            text: 'Our team will see your message and decide about your account',
            icon: 'success',
          })
          handleToggleModal()
        }else{
          swal({
            title: 'Message not sent',
            text: `${response.data.message}`,
            icon: 'error',
          })
          handleToggleModal()
        }
      })
    }


  }
  return (
    <>
     <Modal show={props.showModal} onHide={handleToggleModal} top className="contact-modal">
      <Modal.Header closeButton className="contact-header">
        <p style={{marginTop:'-20px'}}>Send us a message about it, and why should we unlock it,</p>
        <p>If your account has been locked.</p>
        <Modal.Title>Send a Message</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
        <Form.Group controlId="">
          <Form.Label>Your Message</Form.Label>
          <Form.Control type="text"name="message" value={message} onChange={onChange} />
           {messageError?
          <label htmlFor="" className="error-label">Message can't be empty</label>:''} 
        </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={handleToggleModal}>
          Cancel
        </Button>
        <Button variant="outline-primary" onClick={handleSubmit}>Send Message</Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}
