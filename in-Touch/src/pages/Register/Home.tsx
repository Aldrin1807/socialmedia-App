import PostForm from "../../components/Post/PostForm" ;
import Post from "../../components/Post/Posts";
import Footer from "../../components/Footer/Footer";
import GoUp from "../../components/Other/GoUp";
import {Link} from "react-scroll";
import "../../pages/Register/Home.css";

import { FaRss,
        FaRegCommentAlt,
         FaPlayCircle,
         FaUserFriends,
         FaBookmark,
         FaQuestionCircle,
         FaClipboard,
         FaCalendarDay,
         FaCertificate} from "react-icons/fa";

function Home() {
  return (
    <>
    <div className="home">
    <div className="sidebar">
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListItem">
            <FaRss className="sidebarIcon" />
            <span className="sidebarListItemText">Feed</span>
          </li>
          <li className="sidebarListItem">
            <FaRegCommentAlt className="sidebarIcon" />
            <span className="sidebarListItemText">Chats</span>
          </li>
          <li className="sidebarListItem">
            <FaPlayCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Videos</span>
          </li>
          <li className="sidebarListItem">
            <FaUserFriends className="sidebarIcon" />
            <span className="sidebarListItemText">Groups</span>
          </li>
          <li className="sidebarListItem">
            <FaBookmark className="sidebarIcon" />
            <span className="sidebarListItemText">Bookmarks</span>
          </li>
          <li className="sidebarListItem">
            <FaQuestionCircle className="sidebarIcon" />
            <span className="sidebarListItemText">Questions</span>
          </li>
          <li className="sidebarListItem">
            <FaClipboard className="sidebarIcon" />
            <span className="sidebarListItemText">Jobs</span>
          </li>
          <li className="sidebarListItem">
            <FaCalendarDay className="sidebarIcon" />
            <span className="sidebarListItemText">Events</span>
          </li>
          <li className="sidebarListItem">
            <FaCertificate className="sidebarIcon" />
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sidebarButton">Show More</button>
        <hr className="sidebarHr" />
        <ul className="sidebarFriendList">
        <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            
            </li>  
            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            </li>
            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
           </li> 
           
            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            </li> 
            
            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            </li> 

            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            </li> 

            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            </li> 

            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            </li> 

            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            </li> 

            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            </li> 

            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            </li> 

            <li className="sidebarFriend">
            <img  className="sidebarFriendImg" src="https://scontent.fprn13-1.fna.fbcdn.net/v/t39.30808-6/245439280_2002313759944268_2903570815791595081_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=JyrmZ7iW-1IAX8UGp8-&_nc_ht=scontent.fprn13-1.fna&oh=00_AfAgHHL_wE-rR3-oWlTBBNB76dA_4wKqbhkUBPqSld5YqQ&oe=64362562" alt="" />
            <span className="sidebarFriendName"> Elon Bytyqi </span>
            </li> 
         
        </ul>

        <div className="link">
      <p className="links"><a href="#">Privatesia</a>
       </p>
       <p className="links"><a href="#">Kushtet e përdorimit</a>
       </p>
       <p className="links"><a href="#">Reklamimi</a>
       </p>
      </div>
     
       </div>
    </div>
      <div className="container">
        <PostForm />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        
      
        <Link
          activeClass="active"
          to="container"
          spy={true}
          smooth={true}
          offset={-70}
          duration={900}
        >
          <GoUp />
        </Link>
        </div>
      
      <div className="right">
        dds
      </div>
      <div>
      </div>
        
        </div>
        <Footer />
    </>
  );
}
export default Home;
