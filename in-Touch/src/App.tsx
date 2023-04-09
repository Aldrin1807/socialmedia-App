
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import EditProfile from "./pages/Profile/EditProfile";
import Home from "./pages/Register/Home";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Search from "./components/Other/Search";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
