import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { FormControl, Button ,Image, Modal} from 'react-bootstrap';
import { CiUser } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login(){
  localStorage.clear();
  const navigate = useNavigate();
  const apiUrl = "https://localhost:44386/api/Users/login"
  const [error,setError]=useState(false);
  const [Eerror,setEError]=useState(false);
  const [modal,setModal] = useState(false);
  const [loginError, setLoginError] = useState('');
  const [data,setData]=useState({
    EmailorUsername:'',
    Password:''
  });
  const onChange = (e:any) => {  
    e.persist();  
      setData({ ...data, [e.target.name]: e.target.value });
  } 
  const handleLogin =()=>{
    const uValid = data.EmailorUsername.length>3;
    const pValid = data.Password.length>=8;
    setError(!pValid);
    setEError(!uValid);
    
    if(uValid && pValid){
      axios.post(apiUrl, {
        emailorUsername : data.EmailorUsername,
        password : data.Password
      }).then((response) => {
        if(response.data>0){
          console.log(response.data)
          localStorage.setItem("UserId",response.data);
          navigate('/home');
        }else{
          setLoginError('An error occurred.');
        }
      })
    }else{
      console.log('false');
    }
  }
    return(
      <div className='all-content'>
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
              {loginError && <p className="error">{loginError}</p>}
            <Button variant="outline-primary" className='butoni-post' onClick={handleLogin}>Login</Button>
          </form>
        </div>
      </div>
      </div>
    )
}
export default Login;