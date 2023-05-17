import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Login from "./pages/Login/Login";
import PageNotFound from "./pages/PageNotFound";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Search from "./components/Search/Search";
import { AdminDashboard } from "./pages/AdminDashboard/AdminDashboard";
import Loader from "./components/Other/Loader";

import { useEffect, useState } from "react";
import axios from "axios";
import { TUser } from "./types/types";


import { Dashboard } from "./pages/Dashboard/Dashboard";

function App() {
  const [id, setId] = useState(null);

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    axios
      .get(`https://localhost:44386/api/Users/get-user-id?token=${token}`)
      .then((response: any) => {
        setId(response.data);
      });

    
    
  }, [token]);

  const location = useLocation();
  const excluded = ["/login", "/register", "/loader"];
  const notHeader = () => {
    const currentPath = location.pathname;
    return !excluded.includes(currentPath);
  };

  return (
    <div className="App">
      {notHeader() && <Header />}
      
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home id={id} token={token} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={id ? <Profile id={id} /> : null} />
        <Route path="/register" element={<Register />} />
        <Route path="/search" element={<Search id={id} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/loader" element={<Loader />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}

export default App;
