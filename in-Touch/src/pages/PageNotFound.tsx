import { Button } from "react-bootstrap";

function PageNotFound(){
    return(
      <div className="d-flex justify-content-center align-items-center flex-column" style={{height:'70vh'}}>
        <h1 className="display-1">Error 404</h1>
        <h1 className="display-1">Page not Found</h1>
        <p className='lead'>The page you was looking for does not exist.</p>
        </div>
    )
}

export default PageNotFound;