import { FiChevronsUp } from "react-icons/fi";
import { Link } from "react-scroll";
import './GoUp.css';

function GoUp(){
    return(
        <div className="go-up-icon">
            <p>Oops! You reached the end.</p>
            <p>Go to top.</p>
            <FiChevronsUp className="icon" />
        </div>
    )
}

export default GoUp;