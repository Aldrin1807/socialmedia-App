import { useEffect, useState } from 'react';
import '../Post/Posts.css';
import axios from 'axios';



function Comment(props:any){
  var user = localStorage.getItem("UserId");
  if(!user){
    user = sessionStorage.getItem("UserId");
  }
  const getUrl = `https://localhost:44386/api/Comments/get-post-comments?postId=${props.postId}`;

  const [comments, setComments] = useState([]);

  axios.get(getUrl)
  .then((response:any)=>{
    setComments(response.data);
  })
  

  return (
    <ul>
      {comments.map((comment: any) => (
        <li key={comment.id}>
          <span className="comment-username">@{comment.username}</span>
          <span className="comment-text">{comment.comment}</span>
        </li>
      ))}
    </ul>
  );

}
export default Comment;