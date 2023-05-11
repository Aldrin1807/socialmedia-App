import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Image, Nav, Navbar, Badge } from "react-bootstrap";
import Post from "../../components/Post/Posts";
import PostForm from "../../components/Post/PostForm";
import Suggested from "../../components/Suggested/Suggested";
import Followers from "../../components/Other/Followers";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import ExpiredModal from "../../components/Modals/ExpiredModal";
import PrivateAcc from "../../components/Private Account/PrivateAcc";
import { BiEditAlt } from "react-icons/bi";
import { Modal } from "../../components/Modals/Modals";

function Profile(props: any) {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("user");
  const [postChanged, setPostChanged] = useState(true);
  const token = localStorage.getItem("token");
  const [active, setActive] = useState(0);

  const [viewedUser, setViewedUser] = useState(userId ?? props.id);
  const isCurrentUser = viewedUser == props.id;

  const [apiUrls, setApiUrls] = useState({
    apiUrl: `https://localhost:44386/api/Posts/get-user-post?userId=${viewedUser}`,
    followsUrl: `https://localhost:44386/api/Users/get-user-followers-follows?userId=${viewedUser}`,
    userUrl: `https://localhost:44386/api/Users/get-user-info?id=${viewedUser}`,
    followedUrl: `https://localhost:44386/api/Users/is-following?userOne=${props.id}&userTwo=${userId}`,
    requestedUrl: `https://localhost:44386/api/FollowRequests/is-requested?userOne=${props.id}&userTwo=${userId}`,
  });

  const [expiredModal, setExpiredModal] = useState(false);

  const [userData, setUserData] = useState({
    username: "",
    firstname: "",
    lastname: "",
    isPrivate: false,
    image: "",
  });

  useEffect(() => {
    axios
      .get(apiUrls.userUrl, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: any) => {
        console.log(response.status);
        setUserData({
          username: response.data.username,
          firstname: response.data.firstName,
          lastname: response.data.lastName,
          isPrivate: response.data.isPrivate,
          image: response.data.imagePath,
        });
      });
  }, []);

  const [isFollowed, setIsFollowed] = useState(true);

  const [userFollow, setUserFollow] = useState({
    follows: 0,
    followers: 0,
  });
  useEffect(() => {
    axios
      .get(apiUrls.followsUrl, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: any) => {
        let container = response.data;
        setUserFollow({
          follows: container[0],
          followers: container[1],
        });
      });
    axios
      .get(apiUrls.followedUrl, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: any) => {
        setIsFollowed(response.data);
      });
  }, [isFollowed]);

  type Post = {
    id: number;
    content: string;
    imagePath: string;
    image: string | null;
    postDate: string;
    userID: number;
  };
  const [PostData, setPostData] = useState<Post[]>([]);

  useEffect(() => {
    axios
      .get(apiUrls.apiUrl, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: any) => {
        setPostData(response.data);
        setPostChanged(!postChanged);
      });
  }, [PostData]);

  const handleFollow = () => {
    if (!isFollowed) {
      axios
        .post(
          "https://localhost:44386/api/Follows/follow-user",
          {
            followerId: props.id,
            followingId: userId,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => {
          setIsFollowed(true);
        });
    } else {
      axios
        .delete("https://localhost:44386/api/Follows/unfollow-user", {
          headers: { Authorization: `Bearer ${token}` },
          data: {
            followerId: props.id,
            followingId: userId,
          },
        })
        .then(() => {
          setIsFollowed(false);
        });
    }
  };

  const [followRequest, setFollowRequest] = useState(false);

  useEffect(() => {
    axios
      .get(apiUrls.requestedUrl, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: any) => {
        setFollowRequest(response.data);
      });
  }, []);

  const handleFollowRequest = () => {
    if (!followRequest) {
      axios
        .post(
          "https://localhost:44386/api/FollowRequests/request-follow",
          {
            followRequestId: props.id,
            followRequestedId: userId,
          },
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        )
        .then(() => {
          setFollowRequest(true);
        });
    } else {
      axios
        .delete("https://localhost:44386/api/FollowRequests/unrequest-follow", {
          headers: { Authorization: `Bearer ${token}` },
          data: {
            followRequestId: props.id,
            followRequestedId: userId,
          },
        })
        .then(() => {
          setFollowRequest(false);
        });
    }
  };
  const [centredModal, setCentredModal] = useState(false);

  const toggleShow = (data) => setCentredModal(!centredModal);
  return (
    <>
      <ExpiredModal show={expiredModal} />
      <div className="container db-social">
        <div className="jumbotron jumbotron-fluid"></div>
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-xl-11">
              <div className="widget head-profile has-shadow">
                <div className="widget-body pb-0">
                  <div className="row d-flex align-items-center" id="contenti">
                    <div
                      className="col-xl-4 col-md-4 d-flex justify-content-lg-start justify-content-md-start justify-content-center"
                      id="white"
                    >
                      <ul className="lista">
                        <li>
                          <div className="counter">{userFollow.follows}</div>
                          <div className="heading">Following</div>
                        </li>
                        <li>
                          <div className="counter">{userFollow.followers}</div>
                          <div className="heading">Followers</div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="col-xl-4 col-md-4 d-flex justify-content-center"
                      id="white"
                    >
                      <div className="image-default">
                        <img
                          className="rounded-circle"
                          src={`https://localhost:44386/User Images/${userData.image}`}
                          alt="..."
                          style={{ width: "150px", height: "150px" }}
                        />
                      </div>
                      <div className="infos">
                        <h2>{userData.firstname + " " + userData.lastname}</h2>
                        <div>@{userData.username}</div>
                      </div>
                    </div>
                    <div
                      className="col-xl-4 col-md-4 d-flex justify-content-lg-end justify-content-md-end justify-content-center"
                      id="white"
                    >
                      <div className="follow">
                        {isCurrentUser ? (
                          <Button
                            variant="outline-primary"
                            className="butoni-post"
                            href="/editProfile"
                          >
                            Edit
                          </Button>
                        ) : isFollowed ? (
                          <Button
                            variant="primary"
                            className="butoni-post"
                            onClick={handleFollow}
                          >
                            Following
                          </Button>
                        ) : !userData.isPrivate ? (
                          <Button
                            variant="outline-primary"
                            className="butoni-post"
                            onClick={handleFollow}
                          >
                            Follow
                          </Button>
                        ) : !followRequest ? (
                          <Button
                            variant="outline-primary"
                            className="butoni-post"
                            style={{ padding: "5%" }}
                            onClick={handleFollowRequest}
                          >
                            Request Follow
                          </Button>
                        ) : (
                          <Button
                            variant="primary"
                            className="butoni-post"
                            style={{ padding: "5%" }}
                            onClick={handleFollowRequest}
                          >
                            Follow Requested
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        centredModal={centredModal}
        setCentredModal={setCentredModal}
      ></Modal>
      <div className="container" id="content">
        {isCurrentUser || isFollowed || !userData.isPrivate ? (
          <div className="row">
            <div className="col-md-4">
              <div className="left-side">
                <div className="button-container">
                  <button
                    className={active === 0 ? "btn1 active" : "btn1"}
                    onClick={() => {
                      setActive(0);
                    }}
                  >
                    Edit Profile
                  </button>
                  <button
                    className={active === 1 ? "btn1 active" : "btn1"}
                    onClick={() => {
                      setActive(1);
                    }}
                  >
                    Change Password
                  </button>
                </div>
                {active == 0 ? (
                  <div className="update-section">
                    <h1>Manage your Personal Information.</h1>
                    <h3>
                      Below are the name and email addresses on file for your
                      account.
                    </h3>
                    <aside>
                      <div>
                        {" "}
                        <h3 className="update-type">Firstname:</h3>{" "}
                        <span className="user-data">{userData.firstname}</span>{" "}
                        <BiEditAlt
                          id="edit-icon"
                          onClick={() => {
                            toggleShow({
                              name: "Firstname",
                              type: "text",
                              value: userData.firstname,
                            });
                          }}
                        ></BiEditAlt>
                        {/* <Modal ></Modal> */}
                      </div>
                      <div>
                        {" "}
                        <h3 className="update-type">Lastname:</h3>{" "}
                        <span className="user-data">{userData.lastname}</span>{" "}
                        <BiEditAlt
                          id="edit-icon"
                          onClick={() => {
                            toggleShow({
                              name: "Lastname",
                              type: "text",
                              value: userData.firstname,
                            });
                          }}
                        ></BiEditAlt>
                      </div>
                      <div>
                        {" "}
                        <h3 className="update-type">Username:</h3>{" "}
                        <span className="user-data">{userData.username}</span>{" "}
                        <BiEditAlt
                          id="edit-icon"
                          onClick={() => {
                            toggleShow({
                              name: "Username",
                              type: "text",
                              value: userData.firstname,
                            });
                          }}
                        ></BiEditAlt>
                      </div>
                    </aside>
                  </div>
                ) : (
                  <div className="update-section1">
                    <h1>Manage your Security Settings</h1>
                    <h3>Change your password.</h3>
                    <aside>
                      <form action="">
                        <div>
                          {" "}
                          <h3 className="update-type">Email</h3>{" "}
                          <input
                            type="email"
                            placeholder="Email address"
                            name="email"
                          />
                        </div>
                        <div>
                          {" "}
                          <h3 className="update-type">Password</h3>{" "}
                          <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Password"
                          />
                        </div>
                        <div>
                          {" "}
                          <h3 className="update-type">Confirm Password</h3>{" "}
                          <input
                            type="password"
                            id="Cpassword"
                            name="Cpassword"
                            placeholder="Confirm Password"
                          />
                        </div>
                      </form>
                    </aside>
                  </div>
                )}
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-posts">
                <Nav fill id="nav-header" variant="tabs" defaultActiveKey="#">
                  <Nav.Item>
                    <Nav.Link href="#">Posts</Nav.Link>
                  </Nav.Item>
                </Nav>
                {isCurrentUser ? <PostForm userID={props.id} /> : null}
                {PostData &&
                  PostData.map((post) => (
                    <Post
                      postId={post.id}
                      content={post.content}
                      imagePath={post.imagePath}
                      postDate={post.postDate}
                      user={isCurrentUser}
                      id={props.id}
                      change={postChanged}
                    />
                  ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="right">
                <Suggested id={props.id} />
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <PrivateAcc />
          </div>
        )}
      </div>
    </>
  );
}
export default Profile;
