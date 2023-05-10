import "./Suggested.css"
import '../Search/Search.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import axios from "axios";

 
function Suggested(props:any){
    const token = localStorage.getItem("token")??sessionStorage.getItem("token");
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
          .get(`https://localhost:44386/api/Users/suggested-users?userId=${props.id}`,{
                headers: { 'Authorization': `Bearer ${token}` }
          })
          .then((response: any) => {
            setUserData(response.data);
          });
      }, [props.id]);
    return(
        <>
        <ul className="friend-list clearfix" id='lista'>
                    {userData.map((user) => (
                <li key={user.id}>
                    <a href={`/profile?user=${user.id}`}>
                    <div className="friend-img">
                        <img src={`https://localhost:44386/User Images/${user.imagePath}`} alt="" />
                    </div>
                    <div className="friend-info">
                        <h4>{user.firstName+" "+user.lastName}</h4>
                        <p>@{user.username}</p>
                    </div>
                    </a>
                </li>
                ))}
    </ul>
    </>

    )
}

export default Suggested;