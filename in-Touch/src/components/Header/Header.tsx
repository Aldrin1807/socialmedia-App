import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form, FormControl,Image } from 'react-bootstrap';
import  './Header.css';
import { useState } from 'react';
import '../../assets/logo.png';
import { VscAccount } from "react-icons/vsc";

function Header(){
  const[logged,setLogged] = useState(true);
     return(
      <>
      <Navbar bg="light" variant="light" expand="lg" className="p-3">
        <Container>
          <Navbar.Brand href="/home">
            <Image 
            className='header-img'
            style={{height:'50px',width:'50px'}}
            roundedCircle
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav.Link href="/home">Home</Nav.Link>
            <Nav className="me-auto" id='items'>
              
              <Nav.Item>
              <Form className="d-flex" id='search-forma'>
              <FormControl
                type="search"
                placeholder="Search Users"
                className="me-2"
                aria-label="Search Users"
              />
              <Button variant="outline-primary">Search</Button>
            </Form>
        </Nav.Item>
            </Nav>
            <Nav className="gap-2">
              {logged ? (
                <NavDropdown
                  id="user-dropdown"
                  title={<VscAccount style={{fontSize:'30px', color: '#4b6cb7'}}/>}
                  align="end"
                  menuVariant="light"
                >
                  <NavDropdown.Item href='/profile'>Edit Profile</NavDropdown.Item>
                    <NavDropdown.Item onClick={function(){
                    setLogged(false);
                  }} >Sign out</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <>
                  <Nav.Link className="btn btn-primary text-light"style={{width: "100px" }} href="/login">Login</Nav.Link>
                  <Nav.Link className="btn btn-primary text-light"style={{width: "100px" }} href="/register">Sign up</Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
}

export default Header;