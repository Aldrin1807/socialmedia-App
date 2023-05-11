import { useEffect, useState } from 'react'
import './Requests.css'
import axios from 'axios';

function Requests (props:any){

    const getRequestsUrl = `https://localhost:44386/api/FollowRequests/get-requests?userId=${props.id}`
    const handleAcceptUrl = `https://localhost:44386/api/FollowRequests/handle-accept`;
    const handleDeclineUrl =`https://localhost:44386/api/FollowRequests/handle-decline`;
    const [user,setUser] = useState([]);
    const [accepted,setAccepted] = useState(false);
    const [declined,setDeclined] = useState(true);

    useEffect(()=>{
      axios.get(getRequestsUrl)
      .then((response:any)=>{
        setUser(response.data);
      })
      console.log(user);
    },[])

    const handleAccept = (userTwo: number) => {
      const userOne = props.id;
      const acceptUrl = `${handleAcceptUrl}?userOne=${userOne}&userTwo=${userTwo}`;
  
      axios.post(acceptUrl)
        .then((response: any) => {
          console.log('Accept request successful');
          setAccepted(!accepted);
        })
        .catch((error: any) => {
          console.error('Error accepting request:', error);
        });
    };

    const handleDecline = (userTwo: number) => {
      const userOne = props.id;
      const declineUrl = `${handleDeclineUrl}?userOne=${userOne}&userTwo=${userTwo}`;
  
      axios.delete(declineUrl)
        .then((response: any) => {
          console.log('Accept request successful');
          setDeclined(!declined);
        })
        .catch((error: any) => {
          console.error('Error accepting request:', error);
        });
    };
    
   
    return (
      <>
        <ul className="friend-requests">
          <h5 style={{ textAlign: 'center' }}>Requests</h5>
          {user.length > 0 ? (
            user.map((userData: any) => (
              <li className="request" key={userData.id}>
                <div className="info">
                  <div className="profile-photo">
                    <img
                     src={`https://localhost:44386/User Images/${userData.imagePath}`}
                      alt=""
                    />
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
            <li className="no-requests">No requests available.</li>
          )}
        </ul>
      </>
    );
  }
export default Requests