import PostForm from "../components/Post/PostForm";
import Post from "../components/Post/Posts";
import Footer from "../components/Footer/Footer";
import GoUp from "../components/Other/GoUp";
import { Link } from "react-scroll";
import "./Home.css";
import Suggested from "../components/Suggested/Suggested";
import { useState, useEffect } from "react";
import axios from "axios";
import { AiOutlineHome } from "react-icons/ai";

import swal from "sweetalert";
import {
  MdOutlineExplore,
  
} from "react-icons/md";

import Requests from "../components/Requests/Requests";

function Home(props: any) {

  const apiUrl = `https://api-intouch.azurewebsites.net/api/Posts/get-posts?id=${props.id}`;

  type Post = {
    id: number;
    content: string;
    imagePath: string;
    image: string | null;
    postDate: string;
    userID: number;
  };
  const [userData, setUserData] = useState({
    id:"",
    username: "",
    firstname: "",
    lastname: "",
    email:"",
    isPrivate: false,
    image: "",
  });
  const userUrl =`https://api-intouch.azurewebsites.net/api/Users/get-user-info?id=${props.id}`;
  const [PostData, setPostData] = useState<Post[]>([]);
  const [postChanged,setPostChanged] = useState(true)
  useEffect(() => {
    axios
      .get(apiUrl, {
        headers: { Authorization: `Bearer ${props.token}` }
      })
      .then((response: any) => {
        setPostData(response.data);
        setPostChanged(!postChanged);
      })
      .catch((error) => {
        console.error(error);
      });

      axios.get(userUrl,{
        headers: { Authorization: `Bearer ${props.token}` }
      }).then((response:any)=>{
        setUserData({
          id:response.data.id,
          username: response.data.username,
          firstname: response.data.firstName,
          lastname: response.data.lastName,
          email:response.data.email,
          isPrivate: response.data.isPrivate,
          image: response.data.imagePath,
        });
      })

      
    
  }, [props.id,PostData]);

  useEffect(()=>{
    axios.get(`https://api-intouch.azurewebsites.net/api/Posts/check-deleted-post?userId=${props.id}`,{
      headers: { Authorization: `Bearer ${props.token}` },
    })
    .then((response:any)=>{
      if(response.data.status=="Error"){
        swal("One or more of your posts has been deleted", response.data.message, "error");
      }
    })
  },[props.id])



  return (
    <>
      <div className="home-content">
        <div className="row">
          <div className="col-sm-2 col-md-3 ">
            <div className="left">
              <a href={`/profile`} className="profile">
                <div className="profile-photo">
                  <img
                    src={`https://intouchimages.blob.core.windows.net/user-images/${userData.image}`}
                    alt=""
                  />
                </div>
                <div className="handle">
                  <h4>{userData.firstname} {userData.lastname}</h4>
                  <p className="text-muted">@{userData.username}</p>
                </div>
              </a>
              <div className="sidebar">
                <a href="" className="menu-item">
                  <AiOutlineHome id="Icons"></AiOutlineHome>
                  <h3>Home</h3>
                </a>
                <a href="" className="menu-item">
                  <MdOutlineExplore id="Icons"></MdOutlineExplore>
                  <h3>Lorem</h3>
                </a>
               
              </div>         
            </div>
          </div>
          <div className="col-md-6 col-sm-10 ">
            <div className="container" id="postet" >
          {props.id?(<PostForm userID={props.id} token={props.token} />):null} 
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
                      change={postChanged}
                      token={props.token}
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
            <Requests id={props.id} token={props.token} />
            <Suggested id={props.id} token={props.token} className="sugg" />
            
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
