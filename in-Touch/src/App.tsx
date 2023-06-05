import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Search from "./components/Search/Search";
import Loader from "./components/Other/Loader";

import { useEffect, useState } from "react";
import axios from "axios";
import { TUser } from "./types/types";

import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  const [user, setUser] = useState({
    id:'',
    role:''
  });

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://localhost:44386/api/Users/get-user-from-token?token=${token}`)
      .then((response: any) => {
        setUser({
          id:response.data.id,
          role:response.data.role
        });
      });
  }, [token]);

  const location = useLocation();
  const excluded = ["/login", "/register", "/loader","/dashboard"];
  const notHeader = () => {
    const currentPath = location.pathname;
    return !excluded.includes(currentPath);
  };


  return (
    <div className="App">
      {notHeader() && <Header id={user.id} role={user.role} />}

      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home id={user.id} token={token} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={user.id ? <Profile id={user.id} /> : null} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search id={user.id} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
