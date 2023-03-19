import './Posts.css';

const comm = [
    { user: '@user1', text: 'Pershendetje' },
    { user: '@user2', text: 'Great job!' },
    { user: '@user3', text: 'Thanks for sharing' }
  ];

function Comment(){
   
    return(
        <ul>
        {comm.map((comment) => (
          <li>
            <span className="comment-username">{comment.user}</span>
            <span className="comment-text">{comment.text}</span>
          </li>
        ))}
      </ul>
    )
}
export default Comment;