import { useEffect, useState } from 'react'
import './Requests.css'
import axios from 'axios';
import swal from "sweetalert";

function Requests (props:any){

    const getRequestsUrl = `https://localhost:44386/api/FollowRequests/get-requests?userId=${props.id}`
    const handleAcceptUrl = `https://localhost:44386/api/FollowRequests/handle-accept`;
    const handleDeclineUrl =`https://localhost:44386/api/FollowRequests/handle-decline`;
    const [user,setUser] = useState([]);

    const [change,setChange] = useState(false);


    useEffect(()=>{
      axios.get(getRequestsUrl,{
        headers: { Authorization: `Bearer ${props.token}` },
      })
      .then((response:any)=>{
        setUser(response.data);
      })
      console.log(user);
    },[props.id,change])

    const handleAccept = (userTwo: number) => {

      axios.post(handleAcceptUrl,{
        followRequestId:userTwo,
        followRequestedId:props.id
      },{
        headers: { Authorization: `Bearer ${props.token}` },
      })
        .then((response: any) => {
          console.log('Accept request successful');
          swal(`Request succesfully accepted`,"You can now interact with each other", "success")
          setChange(!change);
        })
        .catch((error: any) => {
          console.error('Error accepting request:', error);
        });
    };

    const handleDecline = (userTwo: number) => {
     
      axios.delete(handleDeclineUrl,{
        data:{
        followRequestId:userTwo,
        followRequestedId:props.id
        },
          headers: { Authorization: `Bearer ${props.token}` },
      })
        .then((response: any) => {
          console.log(response.data);
          swal(`Request not accepted`,"The follow request has been declined.", "success")
          setChange(!change);
        })
        .catch((error: any) => {
          console.error('Error declining request:', error);
        });
    };
    
    const [showAllRequests,setShowAllRequests] =useState(false)
   
    return (
      <>
        <ul className="friend-requests">
          <h5 style={{ textAlign: 'center' }}>Requests</h5>
          {user.length > 0 ? (
            user.slice(0, showAllRequests ? user.length : 3).map((userData: any) => (
              <li className="request" key={userData.id}>
                <div className="info">
                  <div className="profile-photo">
                  <a href={`/profile?user=${userData.id}`} >
                    <img
                     src={`https://localhost:44386/User Images/${userData.imagePath}`}
                      alt=""
                    />
                    </a>
                  </div>
                  <div>
                    <h5>{userData.firstName}</h5>
                    <p className="text-bold">@{userData.username}</p>
                  </div>
                </div>
                <div className="action">
                  <button className="btn btn-primary" onClick={() => handleAccept(userData.id)}>Accept</button>
                  <button className="btn btn-decline" onClick={() => handleDecline(userData.id)}>Decline</button>
                </div>
              </li>
            ))
          ) : (
            <li className="no-requests" style={{textAlign:'center'}}>No requests atm.</li>
          )}
          {user.length > 3 && (
          <button className='butoni-less-all' onClick={() => setShowAllRequests(!showAllRequests)}>
            {showAllRequests ? 'See less Requests' : 'See all Requests'}
          </button>  )}
        </ul>
        
      </>
    );
  }
export default Requests