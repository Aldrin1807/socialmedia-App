import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FormControl, Button ,Image} from 'react-bootstrap';
import { CiUser } from "react-icons/ci";

function Register(){
    return(
    <div className="login">
            <div className="form">
                <form noValidate>
                    <CiUser className='login-icon' />
                    <span>Sign up</span>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        className="form-control inp_text"
                        id="name" />
                    <input
                        type="text"
                        name="surname"
                        placeholder="Enter your surname"
                        className="form-control inp_text"
                        id="surname" />

                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email"
                        className="form-control inp_text"
                        id="email" />
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        className="form-control" />

                    <Button variant="outline-primary" className='butoni-post'>Register</Button>
                    <p>If you already have an Account?<a href='/login'>Login here!</a></p>
                </form>
             
            </div>
        

            </div>
           
        
    )
}
export default Register;