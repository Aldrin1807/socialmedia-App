import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, Button ,Image} from 'react-bootstrap';
import { CiUser } from "react-icons/ci";


function Login(){
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
              name="email"
              placeholder="Email or username"
              className="form-control inp_text"
              id="email"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
            />
            <p>Don't have an Account? <a href='/register'>Sign up here!</a></p>
            <Button variant="outline-primary" className='butoni-post'>Login</Button>
          </form>
        </div>
      </div>
      </div>
    )
}
export default Login;