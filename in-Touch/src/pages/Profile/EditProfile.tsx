import "./EditProfile.css";
import { TUser } from "../../types/types";
import { useState } from "react";
import axios from "axios";

type Props = {
  User: TUser | null;
  setUser: Function;
};

function EditProfile({ User, setUser }: Props) {
  function Img() {
    if (User === null || User.image === null) {
      return "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg";
    } else {
      return User.image;
    }
  }
  const [newUser, setNewUser] = useState({
   
  });
  // const newUser = {

  //   firstName: string;
  //   lastName: string;
  //   username: string;
  //   email: string;
  //   password: string;

  //   image: string | null;

  // }

  // const handleInputChange = (event: { target: { name: any; value: any } }) => {
  //   setUser({
  //     ...newUser,
  //     [event.target.name]: event.target.value,
  //   });
  // };

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setNewUser(() => ({
      ...User,
      [name]: value,
    }));
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    // Filter out any empty fields from the form data object
    // const filteredFormData = Object.fromEntries(
    //   Object.entries(User).filter(([_, value]) => value !== "")
    // );

    // Make the PUT request with the filtered form data
    axios
      .put(
        `https://localhost:44386/api/Users/Update-user?id=${User?.id}`,
        newUser
      )
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const checkpasword = (e: {
    preventDefault: () => void;
    target: { value: string | undefined };
  }) => {
    e.preventDefault();
    if (User?.password === e.target.value) {
      return true;
    }
  };
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
                            <img className="profile-pic" src={Img()} alt="" />
                            {/* <span
                              style={{
                                color: "rgb(166, 168, 170)",
                                font: "bold 8pt Arial",
                              }}
                            > 

                             </span> */}
                          </div>
                        </div>
                      </div>
                      <div className="col d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div className="text-center text-sm-left mb-2 mb-sm-0">
                          <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">
                            {User?.firstName}
                          </h4>
                          <p className="mb-0">{User?.username}</p>
                          <div className="mt-2">
                            <label
                              className="btn btn-primary"
                              htmlFor="fileInput"
                            >
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
                        <form
                          className="form"
                          style={{ maxWidth: "none" }}
                          onSubmit={handleSubmit}
                        >
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
                                        name="firstname"
                                        value={User}
                                        placeholder="First Name"
                                        onChange={handleInputChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Last Name</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="lastname"
                                        value={newUser.User?.lastName}
                                        placeholder="Last Name"
                                        onChange={handleInputChange}
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
                                        value={newUser.User?.username}
                                        placeholder="username"
                                        onChange={handleInputChange}
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
                                        value={newUser.User?.email}
                                        placeholder="user@example.com"
                                        onChange={handleInputChange}
                                        name="email"
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
                                      value={newUser.User?.password}
                                      onChange={checkpasword}
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
                                      value={newUser.User?.password}
                                      onChange={handleInputChange}
                                    />
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="col">
                                  <div className="form-group">
                                    <label>Confirm Password</label>
                                    <input
                                      className="form-control"
                                      type="password"
                                      placeholder="••••••"
                                      value={newUser.User?.password}
                                      onChange={handleInputChange}
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

export default EditProfile;
