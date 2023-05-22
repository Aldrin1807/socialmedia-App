import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { FormControl, Button ,Image, Modal} from 'react-bootstrap';
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import swal from "sweetalert";
import { MdOutlineSupportAgent } from 'react-icons/md';
import { ContactTeam } from '../../components/Modals/Modals';

function Login(){
  localStorage.clear();
  const navigate = useNavigate();
  const apiUrl = "https://localhost:44386/api/Users/login"
  const [error,setError]=useState(false);
  const [Eerror,setEError]=useState(false);
  const [isLoading,setIsLoading] = useState(false);

  const [remember,setRemember] = useState(false);
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
    swal.close();
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
          navigate('/home');
        }else if(response.data.status=="Locked"){
          const el = document.createElement('div');
          const a = document.createElement('a');
          a.innerText = `${response.data.message}`;
          a.onclick = handleToggleModal;
          el.appendChild(a);
    
          swal({
            title: 'Account Locked!',
            content: el,
            icon: 'error' 
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