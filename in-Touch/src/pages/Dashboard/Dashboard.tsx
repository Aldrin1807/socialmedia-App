import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Dashboard.css";
import { Nav } from "react-bootstrap";
import HomeDashboard from "./Dashboard Components/HomeDashboard";
import { ReportedPosts } from "./Dashboard Components/ReportedPosts";
import { ActiveUsers } from "./Dashboard Components/Users";
import { Messages } from "./Dashboard Components/Messages";
import { MessagesFromUsers } from "./Dashboard Components/MessagesFromUsers";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiMessageRoundedDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { MdReportGmailerrorred } from "react-icons/md";

export const Dashboard = () => {
  const [content, setContent] = useState(0);
  const handleNavClick = (index: any) => {
    setContent(index);
  };
  return (
    <>
      <div className="d-flex" id="wrapper">
        <div className="border-end" id="sidebar-wrapper">
          <Nav variant="pills" className="flex-column" id="side-nav">
            <Nav.Link
              className={`${content === 0 ? "active" : ""}`}
              onClick={() => handleNavClick(0)}
            >
              <AiOutlineDashboard className="ikonat" />
              Dashboard
            </Nav.Link>
            <Nav.Link
              className={`${content === 1 ? "active" : ""}`}
              onClick={() => handleNavClick(1)}
            >
              <FiUsers className="ikonat" />
              Active Users
            </Nav.Link>
            <Nav.Link
              className={`${content === 2 ? "active" : ""}`}
              onClick={() => handleNavClick(2)}
            >
              <BiMessageRoundedDetail className="ikonat" />
              Messages
            </Nav.Link>
            <Nav.Link
              className={`${content === 3 ? "active" : ""}`}
              onClick={() => handleNavClick(3)}
            >
              <MdReportGmailerrorred className="ikonat" />
              Reports
            </Nav.Link>
          </Nav>
        </div>
        <div id="page-content-wrapper">
          <div className="container-fluid">
            {content === 0 && <HomeDashboard />}
            {content === 1 && <ActiveUsers />}
            {content === 2 && <MessagesFromUsers />}
            {content === 3 && <ReportedPosts />}
            
          </div>
        </div>
      </div>
    </>
  );
};
