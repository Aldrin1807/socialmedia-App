import { useEffect, useState } from 'react';
import './Search.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

function Search (props:any){
    const user = localStorage.getItem("UserId") ?? sessionStorage.getItem("UserId");
    const params = new URLSearchParams(window.location.search);
    const query =  params.get("query");
    const token = sessionStorage.getItem("token")

    const getUrl = `https://localhost:44386/api/Users/search?userId=${props.id}&query=${query}`;

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
        axios.get(getUrl,{
            headers: { 'Authorization': `Bearer ${token}` }
      })
        .then((response:any)=>{
            setUserData(response.data);
        })
    },[userData])
    
    return(
        <div className='container' id='search-container'>
                        <p className='lead'>Showing results for " {query} "</p>
                        <ul className="friend-list clearfix" id='lista'>
                        {userData.length === 0 ? (
                            <p>No users found.</p>
                        ) : (
                            userData.map((user) => (
                            <li key={user.id}>
                                <a href={`/profile?user=${user.id}`}>
                                <div className="friend-img">
                                    <img src={`https://localhost:44386/User Images/${user.imagePath}`} alt="" />
                                </div>
                                <div className="friend-info">
                                    <h4>{user.firstName + " " + user.lastName}</h4>
                                    <p>@{user.username}</p>
                                </div>
                                </a>
                            </li>
                            ))
                        )}
                        </ul>
                    </div>
    

    )
}

export default Search