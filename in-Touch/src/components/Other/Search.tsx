import './Search.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Search (){
    return(
        <div className='container' id='search-container'>
                        <p className='lead'>Showing results for " mock search "</p>
                        <ul className="friend-list clearfix" id='lista'>
                            <li>
                                <a href="#">
                                    <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" /></div>
                                    <div className="friend-info">
                                        <h4>Sancho Aldo</h4>
                                        <p>@username</p>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <div className="friend-img"><img src="https://bootdey.com/img/Content/avatar/avatar3.png" alt="" /></div>
                                    <div className="friend-info">
                                        <h4>Jonty Augusto</h4>
                                        <p>@username</p>
                                    </div>
                                </a>
                            </li>
                        </ul>
                    </div>
    

    )
}

export default Search