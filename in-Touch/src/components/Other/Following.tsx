import axios from "axios";
import { useEffect, useState } from "react";
import { FiChevronsDown, FiChevronsUp } from "react-icons/fi";


function Following(props:any){
    const params = new URLSearchParams(window.location.search);
    const userId =  params.get("user");
  
    const viewedUser = userId ?? props.id;
      const getUrl = `https://localhost:44386/api/Users/user-following?userId=${viewedUser}`;
      const token = sessionStorage.getItem("token");
      type User = {
          id: number;
          firstName: string;
          lastName: string;
          username: string;
          email: string;
          password: string;
          imagePath: string;
          image: any; 
          role: number;
      }
      const[userData,setUserData] = useState<User[]>([]);
      useEffect(()=>{
        axios.get(getUrl,
            {
                headers: { 'Authorization': `Bearer ${token}` }
          })
        .then((response:any)=>{
            setUserData(response.data);
        })
    },[userData])
      
    
   
  return (
    <>

    <ul className="friend-list clearfix" id="lista">
        {userData.map(user => (
        <li key={user.id} className="list-item">
              <a href={`/profile?user=${user.id}`} className="following">
            <div className="friend-img"><img src={`https://localhost:44386/User Images/${user.imagePath}`} alt="" />
                </div>
                <div className="friend-info">
                    <h4>{user.firstName + " " + user.lastName}</h4>
                    <p>@{user.username}</p>
                </div>
            </a>
        </li>
        ))}
        
    </ul>
 
    </>
  )
}
export default Following