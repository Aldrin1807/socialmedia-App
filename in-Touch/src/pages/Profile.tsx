import './Profile.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Image, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Post from "../components/Posts";
import PostForm from '../components/PostForm';

function Profile(){
    return(
        <>
        <div className="container">     
            
            <Navbar bg="light" variant="light" expand="lg" className="navi">
            <Image 
            src='https://image-placeholder.com/images/actual-size/75x100.png'
            className='profile-pic'
            />
            <span className='lista-fllw-user'>
                <h3>@Username</h3>
                <h3>followers</h3>
            </span>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className='nav-items'>
          <Nav.Link href="#">
                <h3>Text</h3>
          </Nav.Link>
          <Nav.Link href="#">
                <h3>Text</h3>
          </Nav.Link>
          <Nav.Link href="#">
          <Button variant="primary" className='butoni-edit'>Edit Profile</Button>
          </Nav.Link>
          </Navbar.Collapse>
          </Navbar>
    
          <div className="container" id='content'>
            <div className="row">
                <div className="col-md-4">
                    <div className='left'>
                        <h2>Suggested users</h2>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                </div>
                <div className="col-md-4">
                <div className='profile-posts'>
                    <PostForm />
                <Post />
                <Post />
                </div>
                </div>
                <div className="col-md-4">
                <div className='right'>
                        <h2>Suggested users</h2>
                        <ul>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                            <li>test</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         
         
            
        </div>
        </>
    )
}
export default Profile