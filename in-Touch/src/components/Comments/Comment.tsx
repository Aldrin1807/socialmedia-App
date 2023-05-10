import { useEffect, useState } from 'react';
import '../Post/Posts.css';
import axios from 'axios';



function Comment(props:any){
 
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
           <div className="comment-container">
            <div className="comment-image">
              <a className='comment-link' href={`/profile?user=${comment.userId}`}>
                <img src={`https://localhost:44386/User Images/${comment.imagePath}`} alt="" />
              </a>
            </div>
            <div className="comment-details">
              <span className="comment-username">
                <a className='comment-link' href={`/profile?user=${comment.userId}`}>@{comment.username}</a>
              </span>
              <span className="comment-text">{comment.comment}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );

}
export default Comment;