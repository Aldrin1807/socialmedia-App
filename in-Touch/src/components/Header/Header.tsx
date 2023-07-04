import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form, FormControl,Image } from 'react-bootstrap';
import  './Header.css';
import { useEffect, useState } from 'react';
import { VscAccount } from "react-icons/vsc";
import Loader from "../Other/Loader";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from "sweetalert";

function Header(props:any){
  const token = sessionStorage.getItem("token");
  const tokenUrl = `https://localhost:44386/api/Users/is-token-available?token=${token}`
  const navigate = useNavigate();

 
  useEffect(() => {
  
    const interval = setInterval(checkTokenAvailability, 30 * 1000); 

    return () => {
      clearInterval(interval); 
    };
  }, []);

  const checkTokenAvailability = () => {
    axios.get(tokenUrl)
      .then((response) => {
        const tokenAvailable = response.data;
        if (!tokenAvailable) {
          showTokenUnavailableNotification();
        }
      })
      .catch((error) => {
        console.error('Error checking token availability:', error);
      });
  };

  const showTokenUnavailableNotification = () => {
    swal({
      title: "Login Expired",
      text: "Please log in again to access this page.",
      icon: "info",
      buttons: undefined,
      timer: 3000,
    }).then(() => {
      navigate("/login");
    });
  };


  const [searchQuery,setSearchQuery] = useState('');
  const [error,setError]= useState(false);
  const onChange = (event:any) => {
    setSearchQuery(event.target.value);
  };
  const handleClick = () => {
    const queryValid = searchQuery.length>1;
    if(queryValid){
      navigate(`/search?query=${searchQuery}`);
      setError(false);
    }else{
      setError(true);
    }
  };
  setTimeout(() => {
    
    if (!token) {
      navigate("/login");
    }
    setIsLoading(false);
  }, 1000);
  
  const [isLoading, setIsLoading] = useState(true);
if(isLoading) {
return (
  <Loader />
);
}
 
     return(
      <>
      <Navbar bg="light" variant="light" expand="lg" className="p-3">
        <Container>
          <Navbar.Brand href="/home">
            <Image 
            className='header-img'
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            {props.admin?(  <Nav.Link href="/dashboard">Dashboard</Nav.Link>):(<Nav.Link href="/home">Home</Nav.Link>)}
          
            <Nav className="me-auto" id='items'>
              {props.admin?(null):(
                <Nav.Item>
                <Form className="d-flex" id='search-forma'>
                <FormControl
                  type="search"
                  placeholder="Search Users"
                  className="me-2"
                  aria-label="Search Users"
                  id="searchInput"
                  value={searchQuery}
                  onChange={onChange}
                  style={{borderColor: error ? 'red' : undefined }}
                />
                <Button variant="outline-primary" onClick={handleClick}>Search</Button>
              </Form>
            </Nav.Item>
              )}
              
            </Nav>
            {props.admin?(
               <Nav className="gap-2">
               <NavDropdown
               id="user-dropdown"
               title={<VscAccount style={{fontSize:'30px', color: '#4b6cb7'}}/>}
               align="end"
               menuVariant="light"
             >
               <NavDropdown.Item onClick={function(){
                   localStorage.clear();
                   sessionStorage.clear();
                 navigate('/login');
               }} >Sign out</NavDropdown.Item>
               </NavDropdown>
               </Nav>
            ):(
              <Nav className="gap-2">
              <NavDropdown
              id="user-dropdown"
              title={<VscAccount style={{fontSize:'30px', color: '#4b6cb7'}}/>}
              align="end"
              menuVariant="light"
            >
              <NavDropdown.Item href='/profile'>Account</NavDropdown.Item>
              <NavDropdown.Item onClick={function(){
                  localStorage.clear();
                  sessionStorage.clear();
                navigate('/login');
              }} >Sign out</NavDropdown.Item>
              </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
}

export default Header;