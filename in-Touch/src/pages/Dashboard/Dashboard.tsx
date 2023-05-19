
import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../../components/Header/Header';
import './Dashboard.css'
import { Container, Nav } from 'react-bootstrap';
import HomeDashboard from './Dashboard Components/HomeDashboard';
import {ReportedPosts} from './Dashboard Components/ReportedPosts';
import {Users} from './Dashboard Components/Users'
import { Suspicious } from './Dashboard Components/Suspicious';

export const Dashboard = () => {
  const [content,setContent] = useState(0);
  const handleNavClick = (index:any) => {
    setContent(index);
  };
  return (
    <>
    <div className="d-flex" id="wrapper">
      <div className="border-end" id="sidebar-wrapper">
        <Nav variant="pills" className="flex-column">
          <Nav.Link className={`${content === 0 ? "active" : ""}`} onClick={() => handleNavClick(0)}>Dashboard</Nav.Link>
          <Nav.Link className={`${content === 1 ? "active" : ""}`} onClick={() => handleNavClick(1)}>Manage Users</Nav.Link>
          <Nav.Link className={`${content === 2 ? "active" : ""}`} onClick={() => handleNavClick(2)}>Manage Reports</Nav.Link>
          <Nav.Link className={`${content === 3 ? "active" : ""}`} onClick={() => handleNavClick(3)}>Suspicious Posts</Nav.Link>
        </Nav>
      </div>
      <div id="page-content-wrapper">
        <div className="container-fluid">
            {content === 0 && <HomeDashboard />}
            {content === 1 && <Users />}
            {content === 2 && <ReportedPosts />}
            {content === 3 && <Suspicious />}
        </div>
      </div>
    </div>

</>
  )
}
