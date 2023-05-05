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

  useEffect(() => {
  axios.get(getUrl)
  .then((response:any)=>{
    setComments(response.data);
  })
},[comments])
  
  return (
    <ul>
      {comments.map((comment: any) => (
        <li key={comment.id}>
          <span className="comment-username"><a className='comment-link' href={`/profile?user=${comment.userId}`}>@{comment.username}</a></span>
          <span className="comment-text">{comment.comment}</span>
        </li>
      ))}
    </ul>
  );

}
export default Comment;