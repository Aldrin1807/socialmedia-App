import "./AdminDashboardMain.css";
import { MdVisibility } from "react-icons/md";
function WidgetSm() {
  return (
    <>
      <div className="widgetSm">
        <span className="widgetSmTitle">New Joined Members</span>
        <ul className="widgetSmList">
          <li className="widgetSmListItem">
            <img
              className="widgetSmImg"
              src="https://images.pexels.com/photos/15791536/pexels-photo-15791536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Aid Maliqi</span>{" "}
              <span className="widgetSmUsername">Architect</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" /> Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              className="widgetSmImg"
              src="https://images.pexels.com/photos/15791536/pexels-photo-15791536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Aid Maliqi</span>{" "}
              <span className="widgetSmUsername">Architect</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" /> Display
            </button>
          </li>
          <li className="widgetSmListItem">
            <img
              className="widgetSmImg"
              src="https://images.pexels.com/photos/15791536/pexels-photo-15791536.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Aid Maliqi</span>{" "}
              <span className="widgetSmUsername">Architect</span>
            </div>
            <button className="widgetSmButton">
              <MdVisibility className="widgetSmIcon" /> Display
            </button>
          </li>
        </ul>{" "}
      </div>
    </>
  );
}
export default WidgetSm;
