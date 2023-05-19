import { Nav } from "react-bootstrap";
import { useEffect, useState } from "react";
import "./PS_Card.css";
import Followers from "../Other/Followers";
import Following from "../Other/Following";
import Posts from "../Post/Posts";
import SavedPosts from "../Post/SavedPosts";
function PSCard(props: any) {
  const [content, setContent] = useState(0);
  const handleNavClick = (index: any) => {
    setContent(index);
  };

  return (
    <>
      <Nav variant="tabs" defaultActiveKey="" className="nav">
        <Nav.Item>
          <Nav.Link
            href=""
            onClick={() => handleNavClick(0)}
            className={`text ${content === 0 ? "active" : ""}`}
          >
            Posts
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            href=""
            onClick={() => handleNavClick(1)}
            className={`text ${content === 1 ? "active" : ""}`}
          >
            SavedPosts
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div className="wrapper">
        {content === 0 && <Posts id={props.id} />}
        {content === 1 && <SavedPosts id={props.id} />}
      </div>
    </>
  );
}

export default PSCard;
