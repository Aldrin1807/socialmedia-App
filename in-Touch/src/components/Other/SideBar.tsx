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
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <MdLineStyle className="sidebarIcon"></MdLineStyle> Home
            </li>
            <li className="sidebarListItem">
              <MdTimeline className="sidebarIcon"> </MdTimeline> Analytics
            </li>
            <li className="sidebarListItem">
              <MdTrendingUp className="sidebarIcon"></MdTrendingUp> Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <BiUser className="sidebarIcon"></BiUser> Users
            </li>
            <li className="sidebarListItem">
              <MdStorefront className="sidebarIcon"> </MdStorefront> Products
            </li>
            <li className="sidebarListItem">
              <AiOutlineTransaction className="sidebarIcon"></AiOutlineTransaction>{" "}
              Transactions
            </li>{" "}
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
        <div className="sidebarMenu">
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
        </div>
      </div>
    </div>
  );
}
export default SideBar;
