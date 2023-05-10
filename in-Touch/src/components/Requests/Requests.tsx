import { useEffect, useState } from 'react'
import './Requests.css'
import axios from 'axios';

function Requests (props:any){

    const getRequestsUrl = `https://localhost:44386/api/FollowRequests/get-requests?userId=${props.id}`
    const [user,setUser] = useState([]);


    useEffect(()=>{
      axios.get(getRequestsUrl)
      .then((response:any)=>{
        setUser(response.data);
      })
      console.log(user);
    },[props.id])

    
   
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
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-decline">Decline</button>
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