import './Posts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Dropdown, FormControl,Image } from 'react-bootstrap';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import  {useState} from 'react';
import {FaRegComment} from 'react-icons/fa';
import Comment from '../Comments/Comment';

  

function Post(){
    const[liked,setLiked] = useState(false);
    const handleLikeClick = () => {
        setLiked(!liked);
        !liked?setLikes(likes+1):setLikes(likes-1);
      };
    const[likes,setLikes] = useState(10);
    return(
        <div className="post-container">
        <div className="post-header">
          <img src="https://via.placeholder.com/50" alt="User Profile" className="profile-img" />
          <h4 className="username">@yourusername</h4>
          <span className="report-icon">
            <Dropdown>
              <Dropdown.Toggle variant="link" id="dropdown-basic">
                ...
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#">Report Post</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </span>
        </div>
        <img src="https://image-placeholder.com/images/actual-size/320x320.png" className='post-img' style={{width:'675px',height:'300px'}} />
        <p className="post-text">This is my first post on my new blog! I'm excited to share my thoughts and ideas with everyone. Stay tuned for more updates!</p>
        <div className="post-footer">
          <span className="timestamp">3:00 PM - 18 Mar 2023</span>
          <div className='nums-container'>
              <p><b>{likes}</b> Likes</p>
              <p><b>2</b> Comments</p>
          </div>
          <hr />
          <div className="likes-container">
            
            {liked?(<AiFillHeart style={{color:'red'}} onClick={handleLikeClick}/>):(<AiOutlineHeart style={{color:'black'}} onClick={handleLikeClick}/>)}
            
          </div>
          <hr />
        </div>
        <form id='comment'>
                <FormControl type="text" placeholder="Add a comment..."  style={{ width: '70%',height:'50px' }}  />
                <Button variant="outline-primary">Comment</Button>
        </form>
        <div className="comments-section">
          <h5>Comments</h5>
          <hr />
          <Comment />
        </div>
      </div>
      
    )
}
export default Post;