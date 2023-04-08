import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  Badge,
} from "react-bootstrap";
import Post from "../../components/Post/Posts";
import PostForm from "../../components/Post/PostForm";
import Suggested from "../../components/Other/Suggested";
import Followers from "../../components/Other/Followers";


function Profile() {
  return (
    <>
    <div className="container db-social">
    <div className="jumbotron jumbotron-fluid"></div>
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-xl-11">
                <div className="widget head-profile has-shadow">
                    <div className="widget-body pb-0">
                        <div className="row d-flex align-items-center" id="contenti">
                            <div className="col-xl-4 col-md-4 d-flex justify-content-lg-start justify-content-md-start justify-content-center" id='white'>
                                <ul className="lista">
                                    <li>
                                        <div className="counter">246</div>
                                        <div className="heading">Following</div>
                                    </li>
                                    <li>
                                        <div className="counter">246</div>
                                        <div className="heading">Followers</div>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-xl-4 col-md-4 d-flex justify-content-center" id='white'>
                                <div className="image-default">
                                    <img className="rounded-circle" src="https://image-placeholder.com/images/actual-size/57x57.png" alt="..." />
                                </div>
                                <div className="infos">
                                    <h2>Aldrin Islami</h2>
                                    <div >@username</div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 d-flex justify-content-lg-end justify-content-md-end justify-content-center" id='white'>
                                <div className="follow">
                                    <a className="btn btn-shadow" id="follow-butoni" href="#">Follow</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
        <div className="container" id="content">
          <div className="row">
            <div className="col-md-4">
              <div className="left-side"> 
                <h1 className="display-6">Followers</h1>
                  <Followers />
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-posts">
                <Nav
                  fill
                  id="nav-header"
                  variant="tabs"
                  defaultActiveKey="#"
                >
                  <Nav.Item>
                    <Nav.Link href="#">Posts</Nav.Link>
                  </Nav.Item>
                </Nav>
                <PostForm />
                <Post />
                <Post />
              </div>
            </div>
            <div className="col-md-4">
              <div className="right">
                <h1 className="display-6">Suggested users</h1>
                  <Suggested />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
export default Profile;
