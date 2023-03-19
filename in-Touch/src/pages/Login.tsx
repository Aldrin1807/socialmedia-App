import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, Button ,Image} from 'react-bootstrap';
import { CiUser } from "react-icons/ci";
import '../../public/wlp.png';
import { MDBInput } from 'mdb-react-ui-kit';

function Login(){
    return(
        <div className="login">
        <div className="form">
          <form noValidate>

            <span>Login</span>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="form-control inp_text"
              id="email"
            />
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="form-control"
            />
            <p>Don't have an Account? <a href='/register'>Sign up here!</a></p>
            <Button variant="outline-primary" className='butoni-post'>Login</Button>
          </form>
        </div>
      </div>
        
    )
}
export default Login;