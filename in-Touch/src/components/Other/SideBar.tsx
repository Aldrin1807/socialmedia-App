import "../../pages/AdminDashboard/AdminDashboard.css";

import {
  MdLineStyle,
  MdTimeline,
  MdTrendingUp,
  MdStorefront,
  MdReportGmailerrorred,
  MdOutlineFeedback,
  MdManageAccounts,
  MdReport,
} from "react-icons/md";
import { BiUser, BiMessageDetail } from "react-icons/bi";
import { AiOutlineTransaction, AiOutlineMail } from "react-icons/ai";
import { GrAnalytics } from "react-icons/gr";
function SideBar() {
  return (
    <div className="sidebar1">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdLineStyle className="sidebarIcon"></MdLineStyle>{" "}
              <a href="/home"> Home</a>
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <BiUser className="sidebarIcon"> </BiUser>{" "}
              <a href="/users">Users</a>
            </li>

            <li className="sidebarListItem">
              <MdStorefront className="sidebarIcon"> </MdStorefront> Posts
            </li>
            {/* <li className="sidebarListItem">
              <AiOutlineTransaction className="sidebarIcon"></AiOutlineTransaction>{" "}
              Transactions
            </li>{" "} */}
            <li className="sidebarListItem">
              <MdReportGmailerrorred className="sidebarIcon"></MdReportGmailerrorred>{" "}
              Reports
            </li>
            <li className="sidebarListItem">
              <MdReport className="sidebarIcon"></MdReport> Suspicios
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
        {/* <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdManageAccounts className="sidebarIcon"></MdManageAccounts>{" "}
              Manage
            </li>
            <li className="sidebarListItem">
              <GrAnalytics className="sidebarIcon"> </GrAnalytics> Analytics
            </li>
            <li className="sidebarListItem">
              <MdReport className="sidebarIcon"></MdReport> Reports
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}
export default SideBar;
