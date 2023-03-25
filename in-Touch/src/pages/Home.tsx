import PostForm from "../components/PostForm";
import Post from "../components/Posts";
import Footer from '../components/Footer';
import GoUp from "../components/GoUp";
import {Link} from "react-scroll";


function Home(){
    return(
        <>
        <div className='container'>
           <PostForm />
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
           <Link activeClass="active"
                to="container"
                spy={true}
                smooth={true}
                offset={-70}
                duration={900}
            ><GoUp /></Link>
        </div>
        <div>
            <Footer />
        </div>
        </>
    )
}
export default Home;