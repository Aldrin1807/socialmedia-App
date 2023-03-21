import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css';

function Footer(){
    return(
        <footer className="text-white bg-dark">
    <div className="container py-4 py-lg-5">
        <div className="row justify-content-center">
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
                <h3 className="fs-6 text-white">Contact us</h3>
                <ul className="list-unstyled">
                    <li><a className="link-light" href="#">Tel: 01234 567890</a></li>
                    <li><a className="link-light" href="#">Email: intouch@intouch.com</a></li>
                </ul>
            </div>
           
            <div className="col-sm-4 col-md-3 text-center text-lg-start d-flex flex-column">
                <h3 className="fs-6 text-white">Useful Links</h3>
                <ul className="list-unstyled">
                    <li><a className="link-light" href="/login">Sign in</a></li>
                    <li><a className="link-light" href="/register">Create an account</a></li>
                </ul>
            </div>
            <div className="col-lg-3 text-center text-lg-start d-flex flex-column align-items-center order-first align-items-lg-start order-lg-last">
                <div className="fw-bold d-flex align-items-center mb-2"><span>In-Touch</span></div>
                <p className="text-muted">Connecting people since 2010</p>
            </div>
        </div>
        <hr />
        <div className="d-flex justify-content-between align-items-center pt-3">
            <p className="mb-0">Copyright © 2023 In-Touch</p>
        
        </div>
    </div>
</footer>
    )
}
export default Footer;