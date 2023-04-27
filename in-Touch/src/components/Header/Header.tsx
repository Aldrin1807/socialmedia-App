import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form, FormControl,Image } from 'react-bootstrap';
import  './Header.css';
import { useState } from 'react';
import { VscAccount } from "react-icons/vsc";

import { useNavigate } from 'react-router-dom';

function Header(){
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/search');
  };
 
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
                id="searchInput"
              />
              <Button variant="outline-primary" onClick={handleClick}>Search</Button>
            </Form>
          </Nav.Item>
            </Nav>
            <Nav className="gap-2">
                <NavDropdown
                id="user-dropdown"
                title={<VscAccount style={{fontSize:'30px', color: '#4b6cb7'}}/>}
                align="end"
                menuVariant="light"
              >
                <NavDropdown.Item href='/profile'>Account</NavDropdown.Item>
                <NavDropdown.Item href='/editprofile'>Edit Profile</NavDropdown.Item>
                <NavDropdown.Item onClick={function(){
                    localStorage.clear();
                    sessionStorage.clear();
                  navigate('/login');
                }} >Sign out</NavDropdown.Item>
                </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
    );
}

export default Header;