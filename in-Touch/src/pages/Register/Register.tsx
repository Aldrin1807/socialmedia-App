import "../Login/Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormControl, Button, Image, Modal, Spinner } from "react-bootstrap";
import "./Register.css";
import { CiUser } from "react-icons/ci";
import { MDBFile } from "mdb-react-ui-kit";
import axios from 'axios'; 
import {  useState } from "react";
import { useNavigate  } from 'react-router-dom';

function Register() {
  const navigate = useNavigate();
  const apiUrl = "https://localhost:44386/api/Users/register"
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
    imageFile:null
  });
  const [FirstLasterror,setFirstLasterror] = useState(false);
  const [Usererror,setUsererror] = useState(false);
  const [Emailerror,setEmailerror] = useState(false);
  const [Passworderror,setPassworderror] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const onChange = (e:any) => {  
    const {name,value} = e.target;  
      setFormData({ ...formData, [name]:value });
  } 
  const handleFileChange = (event:any) => {
    setFormData({
      ...formData,
      imageFile: event.target.files[0]
    });
  };
 
    const handleRegister = (e:any) =>{
      setIsLoading(true);
      e.preventDefault();
      const FirstLastNameRegex = /^[a-zA-Z]{3,}$/;
      const UserNameRegex = /^[a-zA-Z0-9]{3,}$/;
      const EmailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
      const firstNameValid = FirstLastNameRegex.test(formData.firstName);
      const lastNameValid = FirstLastNameRegex.test(formData.lastName);
      const userNameValid = UserNameRegex.test(formData.userName);
      const emailValid = EmailRegex.test(formData.email);
      const passwordValid = formData.password.length >= 8;
  
      setFirstLasterror(!firstNameValid || !lastNameValid);
      setUsererror(!userNameValid);
      setEmailerror(!emailValid);
      setPassworderror(!passwordValid);
  
      if (firstNameValid && lastNameValid && userNameValid && emailValid && passwordValid) {
          setIsLoading(true);
          const form = new FormData();
          form.append('FirstName',formData.firstName)
          form.append('LastName',formData.lastName)
          form.append('Username',formData.userName)
          form.append('Email',formData.email)
          form.append('Password',formData.password)
          if (formData.imageFile) {
            form.append('Image', formData.imageFile);
          }
          form.append('role','0')
        
          axios.post(apiUrl, form
            ).then((response) => {
          console.log(response.data);
          if (response.data.status === 'Success') {
            setIsModalOpen(true);
          } else {
            setIsModalOpen(true);
            setError(response.data.message);
        }
        })
        .catch((error) => {
          console.error(error);
        });
      }else{
        setIsLoading(false);
      }
     
    }
    const handleCloseModal = () => {
      setIsModalOpen(false);
      error?window.location.reload():navigate('/login');
    };

  return (
    <div className="container">
      <div className="sign-up">
        <div className="form">
          <form noValidate>
            <CiUser className="login-icon" />
            <span>Sign up</span>
            <p className="paragraph">
              Please provide us some information about you
            </p>
            <div className="two-inputs">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              className="form-control inp_text"
              id="first-name"
              value={formData.firstName}
              onChange={onChange}
              style={FirstLasterror ? { borderColor: 'red' } : undefined}
            />
            <input
              type="last-name"
              name="lastName"
              placeholder="Last name"
              className="form-control inp_text"
              id="last-name"
              value={formData.lastName}
              onChange={onChange}
              style={FirstLasterror ? { borderColor: 'red' } : undefined}
            />
            
          </div>
          {FirstLasterror?
          <label htmlFor="" className="error-label">First Name or Last Name more than 3 characters</label>:''}
          <input
            type="text"
            name="userName"
            placeholder="User name"
            className="form-control inp_text"
            id="user-name"
            value={formData.userName}
            onChange={onChange}
            style={Usererror ? { borderColor: 'red' } : undefined}
          />
          {Usererror?
          <label htmlFor="" className="error-label">Username more than 3 characters</label>:''}
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control inp_text"
            id="email"
            value={formData.email}
            onChange={onChange}
            style={Emailerror ? { borderColor: 'red' } : undefined}
          />
          {Emailerror?
          <label htmlFor="" className="error-label">Email invalid</label>:''}
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control"
            value={formData.password}
            onChange={onChange}
            style={Passworderror ? { borderColor: 'red' } : undefined}
          />
          {Passworderror?
          <label htmlFor="" className="error-label">Password more than 8 characters</label>:''}
            <p>Add a Profile Pic (Optional)</p>
              <input type="file" id="fileInput" accept="image/*"
              onChange={handleFileChange} 
              />
              <i className="fas fa-image"></i> Upload
            <p>
              Already have an account? <a href="/login">Sign in here!</a>
            </p>
            <Button variant="outline-primary" className="butoni-post" onClick={handleRegister}>
            {isLoading ? 'Signing up...' : 'Sign up'} 
            </Button>
          </form>
          <Modal show={isModalOpen} onHide={handleCloseModal}>
            <Modal.Body>
                { error ? <div className="alert alert-danger">{error}</div> : (
                    <div className="text-center">
                        <h1 className="display-6">User registered successfully!</h1>
                        <p>Please login with your new account.</p>
                    </div>
                )}
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleCloseModal}>
                Continue
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
}
export default Register;