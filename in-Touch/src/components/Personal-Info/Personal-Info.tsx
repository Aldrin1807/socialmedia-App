import { BiEditAlt } from 'react-icons/bi'
import { AiOutlineCamera } from "react-icons/ai";
import './Personal-Info.css'
import { useState } from 'react';
import { ChangePassword, ChangePersonalInfo, ChangeProfilePicture } from '../Modals/Modals';
import { Nav } from 'react-bootstrap';
function PersonalInfo(props: any) {
    const [passModal, setPassModal] = useState(false);
    const [prfModal,setPrfModal] =useState(false);

    const handlePassModal = () => {
        setPassModal(!passModal);
    };
  
    const handlePrfModal = ()=>{
      setPrfModal(!prfModal);
    }
  
    return (
      <>
       <h5>Personal Information</h5>
       <hr />
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
            <div className='change'>
            <a className="change-pw" onClick={handlePrfModal}>Change Profile Picture {<AiOutlineCamera />} </a>
            <a className="change-pw" onClick={handlePassModal}>
              Change Password { <BiEditAlt />}
            </a>
            </div>
          ) : null}
        </div>
        <ChangeProfilePicture userId={props.userData.id} showModal={prfModal} setShowModal={setPrfModal} token={props.token} />
        <ChangePassword userId={props.userData.id} showModal={passModal} setShowModal={setPassModal} token={props.token} />
    
      </>
    );
  }
export default PersonalInfo
