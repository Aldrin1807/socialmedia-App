import './Requests.css'

function Requests (){
    return(
        <>
        <ul className="friend-requests">
              <h5 style={{textAlign:'center'}}>Requests</h5>
              <li className="request">
                <div className="info">
                  <div className="profile-photo">
                    <img
                      src="https://images.pexels.com/photos/8451490/pexels-photo-8451490.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>aid maliqi</h5>
                    <p className="text-bold">@username</p>
                  </div>
                </div>
                <div className="action">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-decline">Decline</button>
                </div>
              </li>
              <li className="request">
                <div className="info">
                  <div className="profile-photo">
                    <img
                      src="https://images.pexels.com/photos/8451490/pexels-photo-8451490.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>aid maliqi</h5>
                    <p className="text-bold">@username</p>
                  </div>
                </div>
                <div className="action">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-decline">Decline</button>
                </div>
              </li>
              <li className="request">
                <div className="info">
                  <div className="profile-photo">
                    <img
                      src="https://images.pexels.com/photos/8451490/pexels-photo-8451490.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
                      alt=""
                    />
                  </div>
                  <div>
                    <h5>aid maliqi</h5>
                    <p className="text-bold">@username</p>
                  </div>
                </div>
                <div className="action">
                  <button className="btn btn-primary">Accept</button>
                  <button className="btn btn-decline">Decline</button>
                </div>
              </li>
            </ul>
        </>
    )
}
export default Requests