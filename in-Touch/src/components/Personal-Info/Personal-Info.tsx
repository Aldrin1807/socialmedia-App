import { BiEditAlt } from 'react-icons/bi'
import './Personal-Info.css'
import { useState } from 'react';
import { ChangePassword } from '../Modals/Modals';
function PersonalInfo(props: any) {
    const [showModal, setShowModal] = useState(false);
  
    const handleToggleModal = () => {
      setShowModal(!showModal);
    };
  
    return (
      <div className="personal-info">
        <h1 style={{ textAlign: 'center' }}>
          Personal Information {props.currentUser ? <BiEditAlt /> : null}
        </h1>
        <div className="items">
          <p className="content">
            First Name: <b>{props.userData.firstname}</b>
          </p>
          <p className="content">
            Last Name: <b>{props.userData.lastname}</b>
          </p>
          <p className="content">
            Username: <b>{props.userData.username}</b>
          </p>
          <p className="content">
            Email: <b>{props.userData.email}</b>
          </p>
          {props.currentUser ? (
            <a className="change-pw" onClick={handleToggleModal}>
              Change Password { <BiEditAlt />}
            </a>
          ) : null}
        </div>
        <ChangePassword showModal={showModal} setShowModal={setShowModal} />
      </div>
    );
  }
export default PersonalInfo
