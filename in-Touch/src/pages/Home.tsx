import PostForm from "../components/Post/PostForm" ;
import Post from "../components/Post/Posts";
import Footer from "../components/Footer/Footer";
import GoUp from "../components/Other/GoUp";
import {Link} from "react-scroll";
import "./Home.css";
import Suggested from "../components/Other/Suggested";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import Loader from "../components/Other/Loader";
import axios from "axios";

function Home() {
  var user = localStorage.getItem("UserId");
  if(!user){
    user = sessionStorage.getItem("UserId");
  }
  const apiUrl = `https://localhost:44386/api/Posts/get-posts?id=${user}`;
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  type Post = {
    id: number;
    content: string;
    imagePath: string;
    image: string | null;
    postDate: string;
    userID: number;
  };
  
  const [PostData, setPostData] = useState<Post[]>([]);
  
      setTimeout(() => {
        if (!user) {
          navigate("/login");
        }
        setIsLoading(false);
      }, 1000);
    
  if(isLoading) {
    return (
      <Loader />
    );
  }
  


    axios.get(apiUrl)
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
        <div className="col-md-3">
        
        </div>
        <div className="col-md-6">
            <div className="container">
            <PostForm userID={user} />
            {PostData && PostData.map(post => (
            <Post
              postId={post.id}
              content={post.content}
              imagePath={post.imagePath}
              postDate={post.postDate}
            />
          ))}
            </div>
        </div>
        <div className="col-md-3" id="right">
            <h1 className="display-6">Suggested Users</h1>
            <Suggested />
          
        </div>
    </div>
    </div>
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
      <div>
      <Footer />
      </div>
        
      
    </>
  );
}
export default Home;
