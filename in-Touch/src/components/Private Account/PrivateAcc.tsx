import { AiFillLock } from "react-icons/ai";
import './PrivateAcc.css'

function PrivateAcc(){
    return(
        <div className="private-acc">
            <AiFillLock className="icon" />
            <p>This account is private.</p>
            <p>Follow to see their posts</p>
        </div>
    )
}
export default PrivateAcc