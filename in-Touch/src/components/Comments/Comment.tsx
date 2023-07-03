import { useEffect, useState } from 'react';
import '../Post/Posts.css';
import axios from 'axios';
import { Dropdown } from 'react-bootstrap';
import swal from "sweetalert";


function Comment(props:any){
 
  const getUrl = `https://localhost:44386/api/Comments/get-post-comments?postId=${props.postId}`;

  const [comments, setComments] = useState([]);

  useEffect(() => {
  axios.get(getUrl,{
    headers: { Authorization: `Bearer ${props.token}` },
  })
  .then((response:any)=>{
    setComments(response.data);
  })
},[comments])
  const [showAllComments, setShowAllComments] = useState(false);


  const handleDelete = (id:number) => {
  swal({
    title: "Are you sure?",
    text: "Once deleted, you will not be able to recover this comment!",
    icon: "warning",
    buttons: true,
    dangerMode: true,
  }).then((willDelete) => {
    if (willDelete) {
      axios.delete(`https://localhost:44386/api/Comments/delete-comment?id=${id}`,{
        headers: { Authorization: `Bearer ${props.token}` }
      })
        .then((response:any) => {
          if(response.data.status=="Success"){
          swal("Poof! Your comment has been deleted!", {
            icon: "success",
          });}else{
            swal(`${response.data.message}`, {
              icon: "error",
            })
          }
        })
    } else {
      swal("Your comment is safe!");
    }
  });
};

  
  return (
    <ul>
      {comments.slice(0, showAllComments ? comments.length : 3).map((comment: any) => (
        <li key={comment.id}>
           <div className="comment-container">
            <div className="comment-image">
              <a className='comment-link' href={`/profile?user=${comment.userId}`}>
                <img src={`https://intouchimages.blob.core.windows.net/user-images/${comment.imagePath}`} alt="" />
              </a>
            </div>
            <div className="comment-details">
              <span className="comment-username">
                <a className='comment-link' href={`/profile?user=${comment.userId}`}>@{comment.username}</a>
              </span>
              <span className="comment-text">{comment.comment}</span>
            </div>
            {props.user==comment.userId||props.del?(<div>
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                ...
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={()=>handleDelete(comment.id)}>Delete Comment</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </div>):null}
          </div>
        </li>
      ))}
     {comments.length > 3 && (
      <button className='butoni-less-all' onClick={() => setShowAllComments(!showAllComments)}>
        {showAllComments ? 'See less' : 'See all comments'}
      </button>
    )}
    </ul>
  );

}
export default Comment;