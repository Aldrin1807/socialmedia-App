import "./Posts.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Alert, Button, Dropdown, FormControl, Image } from "react-bootstrap";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useEffect, useRef, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import Comment from "../Comments/Comment";
import { VscComment, VscBookmark } from "react-icons/vsc";
import axios from "axios";
import { DeletePost } from "../Modals/Modals";
import swal from "sweetalert";
function Post(props:any) {
  
 const getUrl = `https://localhost:44386/api/Likes/get-post-likes?id=${props.postId}`;
 const postUrl = `https://localhost:44386/api/Likes/like-post`;
 const delUrl = `https://localhost:44386/api/Likes/unlike-post`;
 const isLikeUrl =`https://localhost:44386/api/Likes/is-liked?userId=${props.id}&postId=${props.postId}`;
 const userUrl = `https://localhost:44386/api/Posts/get-user-post-info?postId=${props.postId}`;
 const commUrl = `https://localhost:44386/api/Comments/make-comment`;
 const reportUrl= `https://localhost:44386/api/Reports/make-report`;
 const commLikeUrl=`https://localhost:44386/api/Comments/get-nr-comments?postId=${props.postId}`;
 const deleteUrl=`https://localhost:44386/api/Posts/delete-post?postId=${props.postId}`;
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
        userId: props.id,
        postId: props.postId
      })
      .then(()=>{
          setLiked(true);
      })
    }else{
      axios.delete(delUrl,{
        data: {
          userId: props.id,
          postId: props.postId
        }
      })
      .then(()=>{
          setLiked(false);
      })
    }
  };

 
  const [commentValue,setCommentValue] = useState('');

  const handleComment=()=>{
    const commentValid = commentValue.length>1;
    if(commentValid){
      axios.post(commUrl,{
        userId: props.id,
        postId: props.postId,
        comment: commentValue
      })
      .then((response:any)=>{
        setCommentValue("");
      })
    }
  }

  const [commentCount,setCommentCount]=useState(0);


  useEffect(()=>{
   axios.get(commLikeUrl)
   .then((response:any)=>{
    setCommentCount(response.data);
   })
  },[commentValue,props.change])
  



 
  const [showReportSuccess, setShowReportSuccess] = useState(false);

  const[reportText,setReportText]=useState({
    status:'',
    message:''
  });
  const handleReport = () => {
    swal({
      title: "Are you sure?",
      text: "Do you want to report this post?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willReport) => {
      if (willReport) {
        axios.post(reportUrl, {
          userId: props.id,
          postId: props.postId
        }).then((response) => {
          if (response.data.status === "Success") {
            swal("Success!", "The post has been reported. Our team will review it shortly.", "success");
          } else {
            swal("Oops! Something went wrong.", response.data.message, "error");
          }
        }).catch((error) => {
          swal("Oops! Something went wrong.", error.message, "error");
        });
      } else {
        swal("Reporting canceled!");
      }
    });
  };


  
  const [userInfo,setUserInfo] = useState({
    id:'',
    username:'',
    image : ''
  })
  
 useEffect(()=>{
    axios.get(isLikeUrl)
      .then((response:any)=>{
        setLiked(response.data);
      })
    },[liked,props.change])
    
  
      useEffect(() => {
        axios.get(userUrl)
        .then((response:any)=>{
        setUserInfo({
          id:response.data.id,
          username:response.data.username,
          image:response.data.imagePath
        })
      })

      }, []); 
   
  


const [likes, setLikes] = useState(0);

useEffect(()=>{
    axios.get(getUrl)
      .then((response:any) => {
        setLikes(response.data);
      })
},[liked,props.change])

      const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCommentValue(event.target.value);
      };

    

     
      const handleDelete = () => {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this post!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        }).then((willDelete) => {
          if (willDelete) {
            axios.delete(deleteUrl)
              .then(() => {
                swal("Poof! Your post has been deleted!", {
                  icon: "success",
                });
              })
              .catch((error) => {
                swal("Oops! Something went wrong.", error.message, "error");
              });
          } else {
            swal("Your post is safe!");
          }
        });
      };

  return (
    <div className="post-container">
      <div className="post-header">
        <a href={`/profile?user=${userInfo.id}`} className="profile-link">
        <img
          src={`https://localhost:44386/User Images/${userInfo.image}`}
          alt="User Profile"
          className="profile-img"
          style={{ width: "70px", height: "70px" }}
        />
        <h4 className="username">@{userInfo.username}</h4>
        </a>
        <span className="report-icon">
          <Dropdown>
            <Dropdown.Toggle variant="link" id="dropdown-basic">
              ...
            </Dropdown.Toggle>
            <Dropdown.Menu>
          
              {props.user?(<Dropdown.Item onClick={handleDelete}>Delete Post</Dropdown.Item>):
              (  <Dropdown.Item onClick={handleReport} >Report Post</Dropdown.Item>)}
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
      <h5 style={{textAlign:'center'}}>Comments</h5>
      <hr />
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
        <Comment 
        postId={props.postId}
        />
      </div>
    </div>
  );
}
export default Post;
