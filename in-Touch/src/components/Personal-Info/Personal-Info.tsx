import { BiEditAlt } from 'react-icons/bi'
import './Personal-Info.css'
import { useState } from 'react';
import { ChangePassword, ChangePersonalInfo } from '../Modals/Modals';
function PersonalInfo(props: any) {
    const [passModal, setPassModal] = useState(false);
  
    const handleToggleModal = () => {
        setPassModal(!passModal);
    };
  
  
    return (
      <div className="personal-info">
        <h1 style={{ textAlign: 'center' }}>
          Personal Information
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
          <p className="content">
            Account type: <b>{props.userData.isPrivate?("Private"):("Public")}</b>
          </p>
          {props.currentUser ? (
            <a className="change-pw" onClick={handleToggleModal}>
              Change Password { <BiEditAlt />}
            </a>
          ) : null}
        </div>
        <ChangePassword userId={props.userData.id} showModal={passModal} setShowModal={setPassModal} />
      </div>
    );
  }
export default PersonalInfo
