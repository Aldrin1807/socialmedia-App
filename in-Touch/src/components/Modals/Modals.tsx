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
            axios
              .put('https://localhost:44386/api/Users/update-password', {
                id: props.userId,
                oldPassword: values.oldPassword,
                newPassword: values.newPassword
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
            <Form.Label>Verify New Password</Form.Label>
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

export function ChangePersonalInfo(props: any) {
  const handleToggleModal = () => {
    props.setShowModal(!props.showModal);

  };


  const [values, setValues] = useState({
    id: '',
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    isPrivate: false
  });
  
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
  const [Firsterror,setFirsterror] = useState(true);
  const [Lasterror,setLasterror] = useState(true);
  const [Usererror,setUsererror] = useState(true);
  const [Emailerror,setEmailerror] = useState(true);
 

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

    if(firstNameValid && lastNameValid && userNameValid && emailValid){
      swal({
        title: 'Confirmation',
        text: 'Are you sure you want to update your data?',
        icon: 'warning',
        buttons: ['Cancel', 'Yes, update it!'],
        dangerMode: true,
      }).then((confirmed) => {
        if (confirmed) {
          axios
            .put('', {
              
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
        });
    }

    handleToggleModal();
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
    <Button variant="outline-danger">Cancel</Button>
      <Button variant="outline-primary" onClick={handleSubmit}>Update</Button>
    </Modal.Footer>
  </Modal>
  );
}