import SideBar from "../../components/Other/SideBar";
import AdminDashboardMain from "../../components/Other/AdminDashboardMain";
import "./AdminDashboard.css";
import { Router } from "react-router-dom";
import UserList from"../../components/Other/UserList";


export function AdminDashboard() {
  return (
    <div className="admin-container">
      <SideBar></SideBar>
      <Router>
        <AdminDashboardMain></AdminDashboardMain>
       <UserList></UserList>
      </Router>
    </div>
  );
}
