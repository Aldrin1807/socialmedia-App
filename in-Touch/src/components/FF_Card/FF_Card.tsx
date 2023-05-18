import { Nav } from "react-bootstrap"
import { useEffect, useState } from "react";
import './FF_Card.css'
import Followers from "../Other/Followers";
import Following from "../Other/Following";
function FFCard (props:any) {
    const [content,setContent] = useState(0);
    const handleNavClick = (index:any) => {
        setContent(index);
      };

    return(
        <>
            <Nav variant="tabs" defaultActiveKey="" className="nav">
            <Nav.Item >
                <Nav.Link href="" onClick={() => handleNavClick(0)} className={`text ${content === 0 ? 'active' : ''}`}>Following</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="" onClick={() => handleNavClick(1)} className={`text ${content === 1 ? 'active' : ''}`}>Followers</Nav.Link>
            </Nav.Item>
            </Nav>
        <div className="wrapper">
        {content === 0 && <Following id={props.id} />}
        {content === 1 && <Followers id={props.id}/>}
        
        </div>
        </>
    )
}

export default FFCard