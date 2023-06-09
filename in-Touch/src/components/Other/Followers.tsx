import { useEffect, useState } from "react";
import "../Suggested/Suggested.css"
import axios from "axios";

function Followers(props:any){
  const params = new URLSearchParams(window.location.search);
  const userId =  params.get("user");

  const viewedUser = userId ?? props.id;
    const getUrl = `https://api-intouch.azurewebsites.net/api/Users/user-followers?userId=${viewedUser}`;
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
  
    const [showAll, setShowAll] = useState(false);

    const toggleShowAll = () => {
      setShowAll(!showAll);
    }
    
    return (
      <>
        {userData.length === 0 ? (
          <p style={{textAlign:'center',fontWeight:'bold'}}>No Followers yet.</p>
        ) : (
                    <ul className="friend-list clearfix" id="lista">
                        {userData.map(user => (
                        <li key={user.id} className="list-item">
                              <a href={`/profile?user=${user.id}`} className="suggested">
                            <div className="friend-img"><img src={`https://intouchimages.blob.core.windows.net/user-images/${user.imagePath}`} alt="" />
                                </div>
                                <div className="friend-info">
                                    <h4>{user.firstName + " " + user.lastName}</h4>
                                    <p>@{user.username}</p>
                                </div>
                            </a>
                        </li>
                        ))} 
                    </ul>
                     )}
      </>
    );
            }
export default Followers