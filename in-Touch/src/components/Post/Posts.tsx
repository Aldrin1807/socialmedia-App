import "./Posts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button, Dropdown, FormControl, Image } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import Comment from "../Comments/Comment";
import { VscComment, VscBookmark } from "react-icons/vsc";
import axios from "axios";

function Post(props:any) {
  var user = localStorage.getItem("UserId");
  if(!user){
    user = sessionStorage.getItem("UserId");
  }
 const getUrl = `https://localhost:44386/api/Likes/get-post-likes?id=${props.postId}`;
 const postUrl = `https://localhost:44386/api/Likes/like-post`;
 const delUrl = `https://localhost:44386/api/Likes/unlike-post`;
 const isLikeUrl =`https://localhost:44386/api/Likes/is-liked?userId=${user}&postId=${props.postId}`;
 const userUrl = `https://localhost:44386/api/Posts/get-user-post-info?postId=${props.postId}`;
 const commUrl = `https://localhost:44386/api/Comments/make-comment`;
 const reportUrl= `https://localhost:44386/api/Reports/make-report`;
 const commLikeUrl=`https://localhost:44386/api/Comments/get-nr-comments?postId=${props.postId}`;
  const inputRef = useRef<HTMLInputElement>(null);
  function handleClick() {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const [liked, setLiked] = useState(false);
  
  const handleLikeClick = () => {
    if(!liked){
      axios.post(postUrl,{
        userId: user,
        postId: props.postId
      })
      .then(()=>{
          setLiked(true);
      })
    }else{
      axios.delete(delUrl,{
        data: {
          userId: user,
          postId: props.postId
        }
      })
      .then(()=>{
          setLiked(false);
      })
    }
  };

  const [commentCount,setCommentCount]=useState(0);

 axios.get(commLikeUrl)
 .then((response:any)=>{
  setCommentCount(response.data);
  console.log(response.data);
 })

  
  const [commentValue,setCommentValue] = useState('');

  const handleComment=()=>{
    const commentValid = commentValue.length>1;
    if(commentValid){
      axios.post(commUrl,{
        userId: user,
        postId: props.postId,
        comment: commentValue
      })
      .then((response:any)=>{
        setCommentValue("");
      })
    }
  }



 
  const [showReportSuccess, setShowReportSuccess] = useState(false);

  const[reportText,setReportText]=useState({
    status:'',
    message:''
  });

  const handleReport = () => {
    axios.post(reportUrl,{
      userId: user,
      postId: props.postId
    }).then((response:any)=>{
      setReportText(response.data);
      setShowReportSuccess(true);
    })
    
  };
  const handleClose = () => {
    setShowReportSuccess(false);
  };
  
  const [userInfo,setUserInfo] = useState({
    username:'',
    image : ''
  })
  

    axios.get(isLikeUrl)
      .then((response:any)=>{
        setLiked(response.data);
      })

    
  
      useEffect(() => {
        axios.get(userUrl)
      .then((response:any)=>{
        setUserInfo({
          username:response.data.username,
          image:response.data.imagePath
        })
      })

      }, []); 
   
  


const [likes, setLikes] = useState(0);

    axios.get(getUrl)
      .then((response:any) => {
        setLikes(response.data);
      })


      const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentValue(event.target.value);
      };

  return (
    <div className="post-container">
        {showReportSuccess && (
        <Alert
        variant={reportText.status=="Success" ? "success" : "danger"}
          dismissible
          onClose={handleClose}
          className="fixed-bottom"
          id="alerti"
        >
          {reportText.message}
        </Alert>
      )}
      <div className="post-header">
        <img
          src={`https://localhost:44386/User Images/${userInfo.image}`}
          alt="User Profile"
          className="profile-img"
          style={{ width: "70px", height: "70px" }}
        />
        <h4 className="username">@{userInfo.username}</h4>
        <span className="report-icon">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              ...
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item onClick={handleReport} >Report Post</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </span>
      </div>
      {props.imagePath ? (
        <img
          src={`https://localhost:44386/Post Images/${props.imagePath}`}
          className="post-img"
          style={{ width: "675px", height: "300px" }}
        />
      ) : null}
      <p className="post-text">
       {props.content}
      </p>
      <div className="post-footer">
        <span className="timestamp">{props.postDate}</span>
        <div className="nums-container">
          <p>
            <b>{likes}</b> Likes
          </p>
          <p>
            <b>{commentCount}</b> Comments
          </p>
        </div>
        <hr />
        <div className="likes-container">
          {liked ? (
            <AiFillHeart style={{ color: "red" }} onClick={handleLikeClick} />
          ) : (
            <AiOutlineHeart
              style={{ color: "black" }}
              onClick={handleLikeClick}
            />
          )}
          <VscComment onClick={handleClick} />
        </div>
        <hr />
      </div>
      <form id="comment">
        <FormControl
          type="text"
          placeholder="Add a comment..."
          style={{ width: "70%", height: "50px" }}
          ref={inputRef}
          value={commentValue}
          onChange={onChange}
        />
        <Button variant="outline-primary" onClick={handleComment} >Comment</Button>
      </form>
      <div className="comments-section">
        <h5>Comments</h5>
        <hr />
        <Comment 
        postId={props.postId}
        />
      </div>
    </div>
  );
}
export default Post;
