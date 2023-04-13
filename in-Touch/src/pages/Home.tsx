import PostForm from "../components/Post/PostForm" ;
import Post from "../components/Post/Posts";
import Footer from "../components/Footer/Footer";
import GoUp from "../components/Other/GoUp";
import {Link} from "react-scroll";
import "./Home.css";
import Suggested from "../components/Other/Suggested";


function Home() {

  return (
    <>
    
    <div className="home-content">
    <div className="row">
        <div className="col-md-3">
        
        </div>
        <div className="col-md-6">
            <div className="container">
            <PostForm />
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
