import "./Suggested.css"
import '../Search/Search.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import axios from "axios";

 
function Suggested(props:any){
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

    useEffect(() => {
        axios
          .get(`https://api-intouch.azurewebsites.net/api/Users/suggested-users?userId=${props.id}`,{
                headers: { 'Authorization': `Bearer ${token}` }
          })
          .then((response: any) => {
            setUserData(response.data);
          });
      }, [props.id]);
    return(
        <div className="suggested-card">
        <h5 style={{textAlign:'center'}}>Suggested for you</h5>
        <ul className="friend-list clearfix" id='lista'>
                    {userData.map((user) => (
                <li key={user.id} className="list-item">
                    <a href={`/profile?user=${user.id}`} className="suggested">
                    <div className="friend-img">
                        <img src={`https://intouchimages.blob.core.windows.net/user-images/${user.imagePath}`} alt="" />
                    </div>
                    <div className="friend-info">
                        <h4>{user.firstName+" "+user.lastName}</h4>
                        <p>@{user.username}</p>
                    </div>
                    </a>
                </li>
                ))}
    </ul>
    </div>

    )
}

export default Suggested;