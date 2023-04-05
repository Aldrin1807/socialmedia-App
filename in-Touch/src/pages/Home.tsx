import PostForm from "../components/Post/PostForm";
import Post from "../components/Post/Posts";
import Footer from "../components/Footer/Footer";
import GoUp from "../components/Other/GoUp";
import {Link} from "react-scroll";
function Home() {
  return (
    <>
      <div className="container">
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
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
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Home;
