import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button,  Nav} from "react-bootstrap";
import Post from "../../components/Post/Posts";
import PostForm from "../../components/Post/PostForm";

import { useEffect, useState } from "react";
import axios from "axios";

import PrivateAcc from "../../components/Private Account/PrivateAcc";

import {

  ChangePersonalInfo,
} from "../../components/Modals/Modals";
import PersonalInfo from "../../components/Personal-Info/Personal-Info";

import FFCard from "../../components/FF_Card/FF_Card";


function Profile(props: any) {
  const params = new URLSearchParams(window.location.search);
  const userId = params.get("user");
  const [postChanged, setPostChanged] = useState(true);
  const [savedpostChanged, setsavedPostChanged] = useState(true);
  const token = sessionStorage.getItem("token");
  const [active, setActive] = useState(0);

  const [viewedUser, setViewedUser] = useState(userId ?? props.id);
  const isCurrentUser = viewedUser == props.id;

  const [apiUrls, setApiUrls] = useState({
    apiUrl: `https://api-intouch.azurewebsites.net/api/Posts/get-user-post?userId=${viewedUser}`,
    followsUrl: `https://api-intouch.azurewebsites.net/api/Users/get-user-followers-follows?userId=${viewedUser}`,
    userUrl: `https://api-intouch.azurewebsites.net/api/Users/get-user-info?id=${viewedUser}`,
    followedUrl: `https://api-intouch.azurewebsites.net/api/Users/is-following?userOne=${props.id}&userTwo=${userId}`,
    requestedUrl: `https://api-intouch.azurewebsites.net/api/FollowRequests/is-requested?userOne=${props.id}&userTwo=${userId}`,
    savedPostsUrl: `https://api-intouch.azurewebsites.net/api/SavedPosts/get-saved-posts?userId=${viewedUser}`,

  });

  const [expiredModal, setExpiredModal] = useState(false);

  const [userData, setUserData] = useState({
    id: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    isPrivate: false,
    image: "",
  });

  //change pastaj shperndahet te modali per editim te prf dhe modali per ndryshim te fotos, ne menyre qe fotoja te updatohet pa reload
  const [change,setChange] = useState(false);
  const [pInfoModal, setPInfoModal] = useState(false);

  useEffect(() => {
    axios
      .get(apiUrls.userUrl, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response: any) => {
        console.log(response.status);
        setUserData({
          id: response.data.id,
          username: response.data.username,
          firstname: response.data.firstName,
          lastname: response.data.lastName,
          email: response.data.email,
          isPrivate: response.data.isPrivate,
          image: response.data.imagePath,
        });
      });
  }, [pInfoModal,change]);

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
          "https://api-intouch.azurewebsites.net/api/Follows/follow-user",
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
        .delete("https://api-intouch.azurewebsites.net/api/Follows/unfollow-user", {
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
          "https://api-intouch.azurewebsites.net/api/FollowRequests/request-follow",
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
        .delete("https://api-intouch.azurewebsites.net/api/FollowRequests/unrequest-follow", {
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
  
  const handleInfoModal = () => {
    setPInfoModal(!pInfoModal);
  };

  const [content, setContent] = useState(0);
  const handleNavClick = (index: any) => {
    setContent(index);
  };

  const [SavedPostData, setSavedPostData] = useState<Post[]>([]);


  if(isCurrentUser){
    useEffect(() => {
      axios
        .get(apiUrls.savedPostsUrl, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response: any) => {
          setSavedPostData(response.data);
          setPostChanged(!savedpostChanged);
        });
    }, [SavedPostData]);
  }

  return (
    <>
      <ChangePersonalInfo
        showModal={pInfoModal}
        setShowModal={setPInfoModal}
        userData={userData}
        token={token}
      />
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
                          src={`https://intouchimages.blob.core.windows.net/user-images/${userData.image}`}
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
                            onClick={handleInfoModal}
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

      <div className="container" id="content">
        {isCurrentUser || isFollowed || !userData.isPrivate ? (
          <div className="row">
            <div className="col-md-4">
              <div className="left-side">
                <PersonalInfo
                  userData={userData}
                  currentUser={isCurrentUser}
                  token={token}
                  change={change}
                  setChange={setChange}
                />
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-posts">
                <Nav fill id="nav-header" variant="tabs" defaultActiveKey="#">
                  {isCurrentUser ? (
                    <>
                      <Nav.Link
                        href=""
                        onClick={() => handleNavClick(0)}
                        className={`text ${content === 0 ? "active" : ""}`}
                      >
                        Posts
                      </Nav.Link>
                      <Nav.Link
                        href=""
                        onClick={() => handleNavClick(1)}
                        className={`text ${content === 1 ? "active" : ""}`}
                      >
                        Saved Posts
                      </Nav.Link>
                    </>
                  ) : (
                    <Nav.Link
                      href=""
                      className={"active"}
                    >
                      Posts
                    </Nav.Link>
                  )}
                </Nav>
                {isCurrentUser&&content===0 ? <PostForm userID={props.id} token={token} /> : null}
                {content === 0 && PostData.length===0?(
                  <p
                      style={{
                        textAlign: "center",
                        marginTop: "40px",
                        fontWeight: "bold",
                      }}
                    >
                      No posts yet.
                    </p>
                ):(null)}
                {content === 1 && SavedPostData.length===0?(
                  <p
                      style={{
                        textAlign: "center",
                        marginTop: "40px",
                        fontWeight: "bold",
                      }}
                    >
                      No saved posts yet.
                    </p>
                ):(null)}
                {content === 0
                  ? 
                    
                    PostData.map((post) => (
                      <Post
                        key={post.id}
                        postId={post.id}
                        content={post.content}
                        imagePath={post.imagePath}
                        postDate={post.postDate}
                        user={isCurrentUser}
                        id={props.id}
                        change={postChanged}
                        token={token}
                      />
                    ))
                  : SavedPostData.map((post) => (
                      <Post
                        key={post.id}
                        postId={post.id}
                        content={post.content}
                        imagePath={post.imagePath}
                        postDate={post.postDate}
                        user={false}
                        id={props.id}
                        change={postChanged}
                        token={token}
                      />
                    ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="right">
                {/* <Suggested id={props.id} /> */}
                {/* <Following id={props.id} /> */}
                <FFCard id={props.id} />
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