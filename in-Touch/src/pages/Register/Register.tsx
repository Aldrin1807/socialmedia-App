import '../Login/Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, Button ,Image} from 'react-bootstrap';
import './Register.css';
import { CiUser } from 'react-icons/ci';

function Register(){
    return(
        <div className="container">
        <div className="sign-up">
        <div className="form">
          <form noValidate>
            <CiUser className='login-icon'/>
            <span>Sign up</span>
            <p className='paragraph'>Please provide us some information about you</p>
            <div className='two-inputs'>
            <input
              type="text"
              name="first-name"
              placeholder="First name"
              className="form-control inp_text"
              id="first-name"
            />
            <input
              type="last-name"
              name="last-name"
              placeholder="Last name"
              className="form-control inp_text"
              id="last-name"
            />
            </div>
             <input
              type="user-name"
              name="user-name"
              placeholder="User name"
              className="form-control inp_text"
              id="user-name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control inp_text"
              id="email"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="form-control"
            />
            <p>Already have an account? <a href='/login'>Sign in here!</a></p>
            <Button variant="outline-primary" className='butoni-post'>Sign up</Button>
          </form>
        </div>
      </div>
        </div>
    )
}
export default Register;