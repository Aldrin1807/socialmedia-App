import SideBar from "../../components/Other/SideBar";
import AdminDashboardMain from "../../components/Other/AdminDashboardMain";
import "./AdminDashboard.css";
export function AdminDashboard() {
  return (
    <div className="admin-container">
      <SideBar></SideBar>
      <AdminDashboardMain></AdminDashboardMain>
    </div>
  );
}
