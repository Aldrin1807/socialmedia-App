import "../../pages/AdminDashboard/AdminDashboard.css";

import {
  MdLineStyle,
  MdTimeline,
  MdTrendingUp,
  MdStorefront,
  MdReportGmailerrorred,
  MdOutlineFeedback,
  MdOutlinePostAdd
  
} from "react-icons/md";
import { BiUser, BiMessageDetail } from "react-icons/bi";
import { AiOutlineTransaction, AiOutlineMail } from "react-icons/ai";
import { GiSuspicious } from "react-icons/gi";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdLineStyle className="sidebarIcon"></MdLineStyle> Home
            </li>
            <li className="sidebarListItem">
              <GiSuspicious className="sidebarIcon"> </GiSuspicious> Suspicious
            </li>
            <li className="sidebarListItem">
              <MdOutlinePostAdd className="sidebarIcon"></MdOutlinePostAdd> Posts
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <a href="/users">

              <BiUser className="sidebarIcon"></BiUser> Users 
              </a>
            </li>
            <li className="sidebarListItem">
              <MdStorefront className="sidebarIcon"> </MdStorefront> Products
            </li>
            
            <li className="sidebarListItem">
              <MdReportGmailerrorred className="sidebarIcon"></MdReportGmailerrorred>{" "}
              Reports
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <AiOutlineMail className="sidebarIcon"></AiOutlineMail> Mail
            </li>
            <li className="sidebarListItem">
              <MdOutlineFeedback className="sidebarIcon"> </MdOutlineFeedback>{" "}
              Feedback
            </li>
            <li className="sidebarListItem">
              <BiMessageDetail className="sidebarIcon"></BiMessageDetail>{" "}
              Messages
            </li>
          </ul>
        </div>{" "}
        
      </div>
    </div>
  );
}
export default SideBar;
