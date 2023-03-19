import PostForm from "../components/PostForm";
import Post from "../components/Posts";

function Home(){
    return(
        <div className='container'>
            <PostForm />
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
           <Post />
        </div>
    )
}
export default Home;