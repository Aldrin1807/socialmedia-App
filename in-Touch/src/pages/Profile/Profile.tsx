import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import Post from "../../components/Post/Posts";
import PostForm from "../../components/Post/PostForm";
import Suggested from "../../components/Other/Suggested";


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
              <nav className="leftSectionNav ">
                <div>
                  <svg
                    className="iconsClass"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M400 255.4V240 208c0-8.8-7.2-16-16-16H352 336 289.5c-50.9 0-93.9 33.5-108.3 79.6c-3.3-9.4-5.2-19.8-5.2-31.6c0-61.9 50.1-112 112-112h48 16 32c8.8 0 16-7.2 16-16V80 64.6L506 160 400 255.4zM336 240h16v48c0 17.7 14.3 32 32 32h3.7c7.9 0 15.5-2.9 21.4-8.2l139-125.1c7.6-6.8 11.9-16.5 11.9-26.7s-4.3-19.9-11.9-26.7L409.9 8.9C403.5 3.2 395.3 0 386.7 0C367.5 0 352 15.5 352 34.7V80H336 304 288c-88.4 0-160 71.6-160 160c0 60.4 34.6 99.1 63.9 120.9c5.9 4.4 11.5 8.1 16.7 11.2c4.4 2.7 8.5 4.9 11.9 6.6c3.4 1.7 6.2 3 8.2 3.9c2.2 1 4.6 1.4 7.1 1.4h2.5c9.8 0 17.8-8 17.8-17.8c0-7.8-5.3-14.7-11.6-19.5l0 0c-.4-.3-.7-.5-1.1-.8c-1.7-1.1-3.4-2.5-5-4.1c-.8-.8-1.7-1.6-2.5-2.6s-1.6-1.9-2.4-2.9c-1.8-2.5-3.5-5.3-5-8.5c-2.6-6-4.3-13.3-4.3-22.4c0-36.1 29.3-65.5 65.5-65.5H304h32zM72 32C32.2 32 0 64.2 0 104V440c0 39.8 32.2 72 72 72H408c39.8 0 72-32.2 72-72V376c0-13.3-10.7-24-24-24s-24 10.7-24 24v64c0 13.3-10.7 24-24 24H72c-13.3 0-24-10.7-24-24V104c0-13.3 10.7-24 24-24span4c13.3 0 24-10.7 24-24s-10.7-24-24-24H72z" />
                  </svg>
                  <span className="iconName">Feed</span>
                </div>
                <div>
                  <svg
                    className="iconsClass"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z" />
                  </svg>
                  <span className="iconName">Friends</span>
                </div>
                <div>
                  <svg
                    className="iconsClass"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm80 64c-8.8 0-16 7.2-16 16v64c0 8.8 7.2 16 16 16H368c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80z" />
                  </svg>
                  <span className="iconName">Event</span>
                </div>
                <div>
                  <svg
                    className="iconsClass"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64span4c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
                  </svg>
                  <span className="iconName">Watch Video</span>
                </div>
                <div>
                  <svg
                    className="iconsClass"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M448 80c8.8 0 16 7.2 16 16V415.8l-5-6.5-136-176c-4.5-5.9-11.6-9.3-19-9.3s-14.4 3.4-19 9.3L202 340.7l-30.5-42.7C167 291.7 159.8 288 152 288s-15 3.7-19.5 10.1l-80 112L48 416.3l0-.3V96c0-8.8 7.2-16 16-16H448zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm80 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" />
                  </svg>
                  <h6 className="iconName">Photos</h6>
                </div>
                <div>
                  <svg
                    className="iconsClass"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
                  </svg>
                  <h6 className="iconName">Files</h6>
                </div>
                <div>
                  <svg
                    className="iconsClass"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path d="M531.6 103.8L474.3 13.1C469.2 5 460.1 0 450.4 0H93.6C83.9 0 74.8 5 69.7 13.1L12.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM483.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H112V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H432c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z" />
                  </svg>
                  <h6 className="iconName">MarketPlace</h6>
                </div>
              </nav>
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
                  <Nav.Item>
                    <Nav.Link eventKey="disabled">Followers</Nav.Link>
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
