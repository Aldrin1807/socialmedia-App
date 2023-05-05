import { useEffect, useState } from "react";
import "./Suggested.css"
import axios from "axios";
function Followers(){
  const params = new URLSearchParams(window.location.search);
  const userId =  params.get("user");
  
  const user = localStorage.getItem("UserId") ?? sessionStorage.getItem("UserId");
  const viewedUser = userId ?? user;
    const getUrl = `https://localhost:44386/api/Users/user-followers?userId=${viewedUser}`;
    
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
        axios.get(getUrl)
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
                    <ul className="friend-list clearfix" id="lista">
                    {userData.slice(0, 5).map(user => (
                        <li key={user.id}>
                        <a href="#">
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
                    {!showAll && (
                    <button onClick={toggleShowAll}>See All</button>
                    )}
                    {showAll && (
                    <ul className="friend-list clearfix" id="lista">
                        {userData.slice(5).map(user => (
                        <li key={user.id}>
                            <a href="#">
                            <div className="friend-img"><img src={`https://localhost:44386/User Images/${user.imagePath}`} alt="" />
                                </div>
                                <div className="friend-info">
                                    <h4>{user.firstName + " " + user.lastName}</h4>
                                    <p>@{user.username}</p>
                                </div>
                            </a>
                        </li>
                        ))}
                          <button onClick={toggleShowAll}>See less</button>
                    </ul>
                    )}
      </>
    );
            }
export default Followers