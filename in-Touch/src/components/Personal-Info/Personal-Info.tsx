import { BiEditAlt } from 'react-icons/bi'
import './Personal-Info.css'
function PersonalInfo (props:any){
  

    return(
     
        <div className="personal-info">
                    <h1 style={{textAlign:'center'}}>Personal Information {props.currentUser?(<BiEditAlt />):null}</h1>
                    <div className='items'>

                    <p className="content">First Name: <b>{props.userData.firstname}</b></p>
        
                    <p className="content">Last Name: <b>{props.userData.lastname}</b></p>
                
                    <p className="content">Username: <b>{props.userData.username}</b></p>
                 
                    <p className="content">Email: <b>{props.userData.email}</b></p>
                
                    {props.currentUser?(
                        <a href="" className='change-pw'>Change Password</a>
                    ):null}
                    </div>
        </div>

    )
}
export default PersonalInfo
