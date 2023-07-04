import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import {  Button} from 'react-bootstrap';
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from "sweetalert";
import { ContactTeam } from '../../components/Modals/Modals';
import jwtDecode from 'jwt-decode';
import Swal from 'sweetalert2';



function Login(){
  localStorage.clear();
  const navigate = useNavigate();
  const apiUrl = "https://localhost:44386/api/Auth/login"
  const [error,setError]=useState(false);
  const [Eerror,setEError]=useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const [data,setData]=useState({
    EmailorUsername:'',
    Password:''
  });
  const onChange = (e:any) => {  
    e.persist();  
      setData({ ...data, [e.target.name]: e.target.value });
  } 
  const [contactModal,setContactModal]= useState(false);
  const handleToggleModal = () => {
    setContactModal(!contactModal);
    };

  const handleLogin =()=>{
    
    const uValid = data.EmailorUsername.length>3;
    const pValid = data.Password.length>=8;
    setError(!pValid);
    setEError(!uValid);
    
    if(uValid && pValid){
      setIsLoading(true);
      axios.post(apiUrl, {
        EmailorUsername : data.EmailorUsername,
        Password : data.Password
      }).then((response:any) => {
        if(response.data.status=="Success"){
          console.log(response.data.status)
          sessionStorage.setItem("token",response.data.message);
          const decoded:any = jwtDecode(response.data.message);
          const role = decoded['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];
          if(role==='1'){
            navigate('/dashboard');
          }else{
            navigate('/home');
          }
        //  console.log(decoded);
;
        }else if(response.data.status=="Locked"){
          const el = document.createElement('div');
          const a = document.createElement('a');
          a.innerText = `${response.data.message}`;
          a.onclick = () => {
            handleToggleModal();
            Swal.close(); // Close the swal dialog when the button is clicked
          };
          el.appendChild(a);
    
          Swal.fire({
            title: 'Account Locked!',
            html: el,
            icon: 'error',
          });
          setIsLoading(false);
        }else{
          swal("Login Failed", response.data.message, "error");
          setIsLoading(false);
        }
      })
    }else{
      console.log('false');
      
    }
  }
 
    return(
      
      <div className='all-content'>
        <ContactTeam
         showModal={contactModal}
         setShowModal={setContactModal}
         EmailorUsername={data.EmailorUsername}
        //  userData={userData}
        //  token={token}
       />
        <div className='login-text'>
            <h1>Sign in or create an account</h1>
            <p className='lead'>Connect with friends and the world around you on InTouch</p>
        </div>
       
        <div className="login">
        <div className="form">
          <form noValidate>
            <CiUser className='login-icon'/>
            <span>Login</span>
            <input
              type="text"
              name="EmailorUsername"
              placeholder="Email or username"
              className="form-control inp_text"
              id="email"
              style={Eerror ? { borderColor: 'red' } : undefined}
              value={data.EmailorUsername}
              onChange={onChange}
            />
            <input
              type="password"
              name="Password"
              placeholder="Password"
              className="form-control"
              style={error ? { borderColor: 'red' } : undefined}
              value={data.Password}
              onChange={onChange}
            />
            
            <p>Don't have an Account? <a href='/register'>Sign up here!</a></p>
            <Button variant="outline-primary" className='butoni-post' onClick={handleLogin} disabled={isLoading}>
              {isLoading ? 'Loading...' : 'Login'} 
            </Button>
          </form>
        </div>
      </div>
      </div>
    )
}
export default Login;