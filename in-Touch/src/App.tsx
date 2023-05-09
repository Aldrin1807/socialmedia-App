import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import EditProfile from "./pages/Profile/EditProfile";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Search from "./components/Other/Search";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard";
import Loader from "./components/Other/Loader";
import UserList from "./components/Other/UserList";
import { useEffect, useState } from "react";
import axios from "axios";
import { TUser } from "./types/types";
import Editprofilee from "./pages/Profile/Editprofilee";

function App() {
  const [User, setUser] = useState<TUser | null>(null);

  var userID = localStorage.getItem("UserId");
  if (!userID) {
    userID = sessionStorage.getItem("UserId");
  }
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await axios.get(
          `https://localhost:44386/api/Users/${userID}`
        );
        setUser(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchUser();
  }, []);

  const location = useLocation();
  const excluded = [
    "/login",
    "/register",
    "/loader",
    "/dashboard",
    "/editProfile",
  ];
  const notHeader = () => {
    const currentPath = location.pathname;
    return !excluded.includes(currentPath);
  };

  return (
    <div className="App">
      {notHeader() && <Header />}
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/editProfile"
          element={<Editprofilee User={User} setUser={setUser} />}
        />
        <Route path="/search" element={<Search />} />
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
