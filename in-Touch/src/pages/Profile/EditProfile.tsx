import "./EditProfile.css";
import { TUser } from "../../types/types";
import { useState } from "react";
import axios from "axios";

type Props = {
  User: TUser | null;
  setUser: Function;
};

function EditProfile({ User, setUser }: Props) {
  const [updatedUser, setUpdatedUser] = useState({});
  console.log(updatedUser);
  function Img() {
    if (User === null || User.image === null) {
      return "https://icon-library.com/images/default-profile-icon/default-profile-icon-24.jpg";
    } else {
      return User.image;
    }
  }

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    let newuser = {
      id: User?.id,
      firstName: name === "firstName" ? value : User?.firstName,
      lastName: name === "lastName" ? value : User?.lastName,
      username: name === "username" ? value : User?.username,
      email: name === "email" ? value : User?.email,
      password: name === "password" ? value : User?.password,
      imagePath: User?.imagePath,
      image: User?.image,
      role: User?.role,
    };
    setUpdatedUser(newuser);
  };
  const handleInputChange1 = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;

    let newuser = {
      id: User?.id,
      firstName: name === "firstName" ? value : User?.firstName,
      lastName: name === "lastName" ? value : User?.lastName,
      username: name === "username" ? value : User?.username,
      email: name === "email" ? value : User?.email,
      password: name === "password" ? value : User?.password,
      imagePath: User?.imagePath,
      image: User?.image,
      role: User?.role,
    };
    setUpdatedUser(newuser);
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    axios
      .put(
        `https://localhost:44386/api/Users/Update-user${User?.id}`,
        updatedUser
      )
      .then((response) => console.log(response))
      .then(setUser(updatedUser))
      .catch((error) => console.log(error));
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
                          onSubmit={(e) => {
                            e.preventDefault();
                            let newuser = new FormData();

                            newuser.append(
                              "firstName",
                              e.target.firstName.value
                            );
                            newuser.append("lastName", e.target.lastName.value);
                            newuser.append("username", e.target.username.value);
                            newuser.append("email", e.target.email.value);
                            newuser.append("password", e.target.password.value);
                            //{
                            //   id: User?.id,
                            //   firstName: e.target.firstName.value
                            //     ? e.target.firstName.value
                            //     : User?.firstName,
                            //   lastName: e.target.lastName.value
                            //     ? e.target.lastName.value
                            //     : User?.lastName,
                            //   username: e.target.username.value
                            //     ? e.target.username.value
                            //     : User?.username,
                            //   email: e.target.email.value
                            //     ? e.target.email.value
                            //     : User?.email,
                            //   password: e.target.password.value
                            //     ? e.target.password.value
                            //     : User?.password,
                            //   imagePath: User?.imagePath,
                            //   image: User?.image,
                            //   role: User?.role,
                            // };
                            let new2 = {
                              firstName: e.target.firstName.value,
                            };
                            axios
                              .put(
                                `https://localhost:44386/api/Users/Update-user${User?.id}`,
                                newuser
                              )
                              .then((response) => console.log(response))
                              .then(setUser(newuser))
                              .catch((error) => console.log(error));
                          }}
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
                                        name="firstName"
                                        placeholder="First Name"
                                        // onBlur={handleInputChange}
                                      />
                                    </div>
                                  </div>
                                  <div className="col">
                                    <div className="form-group">
                                      <label>Last Name</label>
                                      <input
                                        className="form-control"
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        // onBlur={handleInputChange}
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
                                        name="username"
                                        placeholder="username"
                                        // onBlur={handleInputChange}
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
                                        // onBlur={handleInputChange}
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
                                      name="password"
                                      // onBlur={handleInputChange}
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
                                      // onBlur={handleInputChange}
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
