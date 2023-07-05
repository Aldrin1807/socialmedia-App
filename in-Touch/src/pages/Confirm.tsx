import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useLocation } from "react-router-dom";

function Confirm(){
    const location = useLocation();
    const [token,setToken] = useState('');

    const [data,setData] = useState('');
    
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const token:any = searchParams.get('token');
    setToken(token);

  }, [location]);

  useEffect(() => {
    axios.get(`https://api-intouch.azurewebsites.net/api/Users/confirm-email?token=${token}`)
        .then((response) => {
            setData(response.data);
        })
}, []);

    return(
        <>
            <div style={{display:'flex',flexDirection:'column',width:'100wv',height:'100vh',alignItems:'center',marginTop:'3rem'}}>
                <AiOutlineMail style={{fontSize:'10rem'}}  />
                <h3>{data}</h3>
            </div>
        </>
    )
}
export default Confirm;