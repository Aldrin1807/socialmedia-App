import "./Profile.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Image,
  Nav,
  Navbar,
  Badge,
} from "react-bootstrap";
import Post from "../../components/Post/Posts";
import PostForm from "../../components/Post/PostForm";
import Suggested from "../../components/Other/Suggested";
import Followers from "../../components/Other/Followers";
import { useEffect, useState } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";


function Profile(props:any) {
  const params = new URLSearchParams(window.location.search);
  const userId =  params.get("user");
  
  const user = localStorage.getItem("UserId") ?? sessionStorage.getItem("UserId");
  const [viewedUser, setViewedUser] = useState(userId ?? user);
  const isCurrentUser = viewedUser === user;

  const [apiUrls,setApiUrls]=useState({
    apiUrl:`https://localhost:44386/api/Posts/get-user-post?userId=${viewedUser}`,
    followsUrl:`https://localhost:44386/api/Users/get-user-followers-follows?userId=${viewedUser}`,
    userUrl:`https://localhost:44386/api/Users/get-user-info?id=${viewedUser}`,
    followedUrl:`https://localhost:44386/api/Users/is-following?userOne=${user}&userTwo=${userId}`
  });


  const[userFollow,setUserFollow]=useState({
    follows: 0,
    followers:0
  })

  const[userData,setUserData]= useState({
    username:'',
    firstname:'',
    lastname:'',
    image:''
  })
  const [isFollowed,setIsFollowed] = useState(true)

  useEffect(() => {
  axios.get(apiUrls.userUrl)
  .then((response:any)=>{
    setUserData({
      username:response.data.username,  
      firstname:response.data.firstName,
      lastname:response.data.lastName,
      image:response.data.imagePath
    })
  })
},[])
useEffect(() => {
  axios.get(apiUrls.followsUrl)
  .then((response:any)=>{
    let container = response.data;
    setUserFollow({
      follows:container[0],
      followers:container[1]
    })
  })
  axios.get(apiUrls.followedUrl)
  .then((response:any)=>{
      setIsFollowed(response.data);
  })

},[isFollowed])

  type Post = {
    id: number;
    content: string;
    imagePath: string;
    image: string | null;
    postDate: string;
    userID: number;
  };
  const [PostData, setPostData] = useState<Post[]>([]);

  useEffect(()=>{
  axios.get(apiUrls.apiUrl)
  .then((response:any)=>{
    setPostData(response.data);
  })
},[PostData])




const handleFollow = () =>{
  if(!isFollowed){
    axios.post('https://localhost:44386/api/Follows/follow-user',{
      followerId:user,
      followingId:userId
    }).then(()=>{
      setIsFollowed(true);
    })
  }else{
    axios.delete("https://localhost:44386/api/Follows/unfollow-user",{
      data :{
        followerId : user,
        followingId : userId
      }
    }).then(()=>{
      setIsFollowed(false);
    })
  }
}

  return (
    <>
    <div className="container db-social">
    <div className="jumbotron jumbotron-fluid"></div>
    <div className="container-fluid">
        <div className="row justify-content-center">
            <div className="col-xl-11">
                <div className="widget head-profile has-shadow">
                    <div className="widget-body pb-0">
                        <div className="row d-flex align-items-center" id="contenti">
                            <div className="col-xl-4 col-md-4 d-flex justify-content-lg-start justify-content-md-start justify-content-center" id='white'>
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
                            <div className="col-xl-4 col-md-4 d-flex justify-content-center" id='white'>
                                <div className="image-default">
                                    <img className="rounded-circle" src={`https://localhost:44386/User Images/${userData.image}`} alt="..."
                                       style={{ width: "150px", height: "150px" }}
                                    />
                                </div>
                                <div className="infos">
                                    <h2>{userData.firstname + ' ' +userData.lastname}</h2>
                                    <div >@{userData.username}</div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-md-4 d-flex justify-content-lg-end justify-content-md-end justify-content-center" id='white'>
                                <div className="follow">
                                    {isCurrentUser?(<Button variant="outline-primary" className="butoni-post" href="/editProfile">Edit</Button>)
                                    :
                                    (isFollowed?(<Button variant="outline-primary" className="butoni-post" onClick={handleFollow}>Following</Button>)
                                    :
                                    (<Button variant="outline-primary" className="butoni-post" onClick={handleFollow}>Follow</Button>)
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
          <div className="row">
            <div className="col-md-4">
              <div className="left-side"> 
                <h1 className="display-6">Followers</h1>
                  <Followers />
              </div>
            </div>
            <div className="col-md-4">
              <div className="profile-posts">
                <Nav
                  fill
                  id="nav-header"
                  variant="tabs"
                  defaultActiveKey="#"
                >
                  <Nav.Item>
                    <Nav.Link href="#">Posts</Nav.Link>
                  </Nav.Item>
                </Nav>
                {isCurrentUser?(<PostForm userID={user} />):null}
                {PostData &&
                PostData.map((post) => (
                  <Post
                    postId={post.id}
                    content={post.content}
                    imagePath={post.imagePath}
                    postDate={post.postDate}
                    user={isCurrentUser}
                  />
                ))}
              </div>
            </div>
            <div className="col-md-4">
              <div className="right">
                <h1 className="display-6">Suggested users</h1>
                  <Suggested />
              </div>
            </div>
          </div>
        </div>
    </>
  )
}
export default Profile;
