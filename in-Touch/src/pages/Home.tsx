import PostForm from "../components/Post/PostForm";
import Post from "../components/Post/Posts";
import Footer from "../components/Footer/Footer";
import GoUp from "../components/Other/GoUp";
import { Link } from "react-scroll";
import "./Home.css";
import Suggested from "../components/Other/Suggested";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Loader from "../components/Other/Loader";
import axios from "axios";
import { AiOutlineHome, AiOutlinePieChart } from "react-icons/ai";
import { BiMessageDetail } from "react-icons/bi";
import {
  MdOutlineExplore,
  MdNotificationsNone,
  MdBookmarkBorder,
  MdOutlineColorLens,
  MdOutlineSettings,
} from "react-icons/md";
import Header from "../components/Header/Header";

function Home(props: any) {
  const apiUrl = `https://localhost:44386/api/Posts/get-posts?id=${props.id}`;
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
      .get(apiUrl, {
        headers: { Authorization: `Bearer ${props.token}` },
      })
      .then((response: any) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <div className="home-content">
        <div className="row">
          <div className="col-sm-2 col-md-3 ">
            <div className="left">
              <a href="" className="profile">
                <div className="profile-photo">
                  <img
                    src="https://images.pexels.com/photos/8451490/pexels-photo-8451490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt=""
                  />
                </div>
                <div className="handle">
                  <h4>Diana ayi</h4>
                  <p className="text-muted">@dayi</p>
                </div>
              </a>
              <div className="sidebar">
                <a href="" className="menu-item">
                  <AiOutlineHome id="Icons"></AiOutlineHome>
                  <h3>Home</h3>{" "}
                </a>
                <a href="" className="active menu-item">
                  <MdOutlineExplore id="Icons"></MdOutlineExplore>

                  <h3>Explore</h3>
                </a>
                <a href="" className="menu-item" id="notifications">
                  {" "}
                  <MdNotificationsNone id="Icons"></MdNotificationsNone>{" "}
                  <small className="notification-count">9+</small>
                  <h3>Notifications</h3>
                  <div className="notifications-popup">
                    <div>
                      <div className="profile-photo">
                        <img
                          src="https://images.pexels.com/photos/8451490/pexels-photo-8451490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                        />
                      </div>
                      <div className="notification-body">
                        <b>Mo Salah</b> accepted yur friend request
                        <small className="text-muted">2 days Ago</small>
                      </div>
                    </div>
                    <div>
                      <div className="profile-photo">
                        <img
                          src="https://images.pexels.com/photos/8451490/pexels-photo-8451490.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          alt=""
                        />
                      </div>
                      <div className="notification-body">
                        <b>Mo Salah</b> accepted yur friend request
                        <small className="text-muted">2 days Ago</small>
                      </div>
                    </div>
                  </div>
                </a>
                <a href="" className="menu-item" id="messages-notifications">
                  {" "}
                  <BiMessageDetail id="Icons"></BiMessageDetail>{" "}
                  <small className="notification-count">6</small>
                  <h3>Message</h3>
                </a>{" "}
                <a href="" className="menu-item">
                  {" "}
                  <MdBookmarkBorder id="Icons"></MdBookmarkBorder>
                  <h3>BookMarks</h3>
                </a>{" "}
                <a href="" className="menu-item">
                  {" "}
                  <AiOutlinePieChart id="Icons"></AiOutlinePieChart>
                  <h3>Analytics</h3>
                </a>{" "}
                <a href="" className="menu-item">
                  {" "}
                  <MdOutlineColorLens id="Icons"></MdOutlineColorLens>
                  <h3>Theme</h3>
                </a>{" "}
                <a href="" className="menu-item">
                  {" "}
                  <MdOutlineSettings id="Icons"></MdOutlineSettings>
                  <h3>Settings</h3>
                </a>{" "}
              </div>
              <label htmlFor="create-post" className="btn btn-primary">
                Create
              </label>
            </div>
          </div>
          <div className="col-md-6 col-sm-10 ">
            <div className="container">
              <PostForm userID={props.id} />
              {PostData && PostData.length > 0 ? (
                <div>
                  {PostData.map((post) => (
                    <Post
                      postId={post.id}
                      content={post.content}
                      imagePath={post.imagePath}
                      postDate={post.postDate}
                      user={false}
                      id={props.id}
                    />
                  ))}
                </div>
              ) : (
                <div
                  style={{
                    width: "100%",
                    height: "35vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <p className="lead">
                    No posts available. See suggested users or search for users
                    and follow to see posts.
                  </p>
                </div>
              )}
            </div>
          </div>
          <div className="col-md-3 " id="right">
            <h1 className="display-6">Suggested Users</h1>
            <Suggested id={props.id} />
          </div>
        </div>
      </div>

      {PostData && PostData.length > 0 && (
        <Link
          activeClass="active"
          to="container"
          spy={true}
          smooth={true}
          offset={-70}
          duration={900}
        >
          <GoUp />
        </Link>
      )}
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
