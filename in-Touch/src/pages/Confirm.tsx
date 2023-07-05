import axios from "axios";
import { useEffect, useState } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { useLocation } from "react-router-dom";

function Confirm(){
    const location = useLocation();
    const [token,setToken] = useState('');

    const [data,setData] = useState({
        status:'',
        message:''
    });
    
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
}, [token]);

    return(
        <>
            <div style={{display:'flex',flexDirection:'column',width:'100wv',height:'100vh',alignItems:'center',marginTop:'3rem'}}>
                <AiOutlineMail style={{fontSize:'10rem'}}  />
                <h3>{data.message}</h3>
                {data.status==='Success'&& <h3>You can now login  <a href="/login" style={{color:'black'}}>Click here</a></h3>}
                {data.status==='Error' && <h3>Something went wrong.</h3>}
            </div>
        </>
    )
}
export default Confirm;