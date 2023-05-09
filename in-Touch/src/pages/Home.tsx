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

function Home(props:any) {

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
    axios.get(apiUrl,{
      headers: { 'Authorization': `Bearer ${props.token}` }})
      .then((response:any) => {
        setPostData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    
   
    

  return (
    <>
      <div className="home-content">
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-6">
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
              <div style={{ width: '100%', height: '35vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <p className="lead" >No posts available. See suggested users or search for users and follow to see posts.</p>
              </div>
            )}
            </div>
          </div>
          <div className="col-md-3" id="right">
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
