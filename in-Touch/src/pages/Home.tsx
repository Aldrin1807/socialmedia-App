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

function Home() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  var user = localStorage.getItem("UserId");
  if(!user){
    user = sessionStorage.getItem("UserId");
  }
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
  return (
    <>
    
    <div className="home-content">
    <div className="row">
        <div className="col-md-3">
        
        </div>
        <div className="col-md-6">
            <div className="container">
            <PostForm Uid={user} />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
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
