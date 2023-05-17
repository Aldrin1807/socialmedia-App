
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../../components/Header/Header';
import './Dashboard.css'
import { Container, Nav } from 'react-bootstrap';

export const Dashboard = () => {
  return (
    <>
    <Header />
    <div className="d-flex" id="wrapper">
      {/* Sidebar */}
      <div className="border-end bg-white" id="sidebar-wrapper">
        <Nav variant="pills" defaultActiveKey="#" className="flex-column">
          <Nav.Link href="#">Dashboard</Nav.Link>
          <Nav.Link href="#manage-users">Manage Users</Nav.Link>
          <Nav.Link href="#manage-posts">Manage Posts</Nav.Link>
          <Nav.Link href="#manage-reports">Manage Reports</Nav.Link>
          <Nav.Link href="#suspicious-posts">Suspicious Posts</Nav.Link>
        </Nav>
      </div>
      <div id="page-content-wrapper">
        <div className="container-fluid">
          <h1 className="mt-4">CONTENT</h1>
        </div>
      </div>
    </div>

</>
  )
}
