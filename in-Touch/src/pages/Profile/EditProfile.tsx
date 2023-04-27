import "./EditProfile.css";

 function EditProfile() {
  return (
    <div className="container">
      <div className="row flex-lg-nowrap">
        

        <div className="col">
          <div className="row">
            <div className="col mb-3">
              <div className="card">
                <div className="card-body">
                  <div className="e-profile">
                    <div className="row">
                      <div className="col-12 col-sm-auto mb-3">
                        <div className="mx-auto" style={{ width: "140px" }}>
                          <div
                            className="d-flex justify-content-center align-items-center rounded"
                            style={{
                              height: "140px",
                              backgroundColor: "rgb(233, 236, 239)",
                            }}
                          >
                            <span
                              style={{
                                color: "rgb(166, 168, 170)",
                                font: "bold 8pt Arial",
                              }}
                            >
                              140x140
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                            Aldrin Islami
                          </h4>
                          <p className="mb-0">@username</p>
                          <div className="mt-2">
                          <label className='btn btn-primary' htmlFor="fileInput">
                            <input type="file" id="fileInput" hidden />
                            <i className="fa fa-fw fa-camera"></i> Upload
                          </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <ul className="nav nav-tabs">
                      <li className="nav-item">
                        <a href="" className="active nav-link">
                          Settings
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content pt-3">
                      <div className="tab-pane active">
                        <form className="form" style={{ maxWidth: "none" }}>
                          <div className="row">
                            <div className="col">
                              <div id="first-form">
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>First Name</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="name"
                                      placeholder="First Name"
                                     
                                    />
                                  </div>
                                </div>
                                <div className="col">
                                  <div className="form-group">
                                    <label>Last Name</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      name="lname"
                                      placeholder="Last Name"
                                  
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>Username</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="username"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>Email</label>
                                    <input
                                      className="form-control"
                                      type="text"
                                      placeholder="user@example.com"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          </div>
                          <div className="row" id="formes">
                            <div className="col-12 col-sm-6 mb-3">
                              <div className="mb-2">
                                <b>Change Password</b>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>Current Password</label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      placeholder="••••••"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>New Password</label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      placeholder="••••••"
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>
                                      Confirm Password
                                    </label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      placeholder="••••••"
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col d-flex justify-content-center">
                              <button className="btn btn-primary" type="submit">
                                Save Changes
                              </button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditProfile