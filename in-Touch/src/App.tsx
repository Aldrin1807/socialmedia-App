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
import jwtDecode from "jwt-decode";
import Confirm from "./pages/Confirm";

function App() {
  const [user, setUser] = useState({
    id:'',
    role:''
  });

  const token = sessionStorage.getItem("token");

  useEffect(() => {
    if(token){
      const decodedToken:any = jwtDecode(token);
     // console.log(decodedToken)
      const id = decodedToken['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];
      const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
      setUser({
        id: id,
        role: role
      });
      }
    
  }, [token]);


  
  const location = useLocation();
  const excluded = ["/login", "/register", "/loader","/dashboard","/confirm"];
  const notHeader = () => {
    const currentPath = location.pathname;
    return !excluded.includes(currentPath);
  };

  
  return (
    <div className="App">
      {notHeader() && <Header />}
    
        {user.role==='1'?(
          <Routes>
          <Route index element={<Navigate to="/dashboard" />} />
          <Route path="/dashboard" element={<Dashboard token={token} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<Navigate to="/dashboard" />} />
          </Routes>
        ):(
          <Routes>
          <Route index element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home id={user.id} token={token}  />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={user.id ? <Profile id={user.id} /> : null} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search id={user.id} />} />
          <Route path="/loader" element={<Loader />} />
          <Route path="/dashboard" element={<Navigate to="/home" />}/>
          <Route path="/confirm" element={<Confirm />} />
          <Route path="*" element={<PageNotFound />} />
          
        </Routes>
        )}
      

    </div>
  );
}

export default App;
