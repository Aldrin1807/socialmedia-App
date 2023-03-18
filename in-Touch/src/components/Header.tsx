import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button,Form } from 'react-bootstrap';
import style from './Header.css';
import Image from 'react-bootstrap/Image'
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

function Header(){
     return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">IN-TOUCH</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="justify-content-center" >
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search Users"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav className="ml-auto d-flex">
              <Link to="/profile">
                My profile
              <Image src={logo} roundedCircle height={30} className="d-inline-block align-top me-2"/>
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}

export default Header;