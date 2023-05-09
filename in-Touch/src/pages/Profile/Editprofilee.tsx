import "./EditProfile.css";
// import "../../css/animate.css"
// import "../../css/app.css"

// import "../../css/bootstrap.min.css"
// import "../../css/default.css"
// import "../../css/footer-v1.css"
// import "../../css/header-default.css"
// import "../../css/jquery.mCustomScrollbar.css"
// import "../../css/style.css"
// import "../../css/sky-forms.css"
// import "../../css/style-switcher.css"
// import "../../css/line-icons.css"

import { TUser } from "../../types/types";
import { useState } from "react";
import axios from "axios";

type Props = {
  User: TUser | null;
  setUser: Function;
};

function Editprofilee({ User, setUser }: Props) {
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
  /*className="form"
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
                          }}*/

  return (
    <div className="profile-body margin-bottom-20">
      <div className="tab-v1">
        <ul className="nav nav-justified nav-tabs">
          <li className="active">
            <a data-toggle="tab" href="#profile">
              Edit Profile
            </a>
          </li>
          <li>
            <a data-toggle="tab" href="#passwordTab">
              Change Password
            </a>
          </li>
        </ul>
        <div className="tab-content">
          <div id="profile" className="profile-edit tab-pane fade in active">
            <h2 className="heading-md">
              Manage your Name, ID and Email Addresses.
            </h2>
            <p>
              Below are the name and email addresses on file for your account.
            </p>
            <br />
            <dl className="dl-horizontal">
              <dt>
                <strong>Your name </strong>
              </dt>
              <dd>
                Edward Rooster
                <span>
                  <a className="pull-right" href="#">
                    <i className="fa fa-pencil"></i>
                  </a>
                </span>
              </dd>
              <hr />
              <dt>
                <strong>Your ID </strong>
              </dt>
              <dd>
                FKJ-032440
                <span>
                  <a className="pull-right" href="#">
                    <i className="fa fa-pencil"></i>
                  </a>
                </span>
              </dd>
              <hr />
              <dt>
                <strong>Company name </strong>
              </dt>
              <dd>
                Htmlstream
                <span>
                  <a className="pull-right" href="#">
                    <i className="fa fa-pencil"></i>
                  </a>
                </span>
              </dd>
              <hr />
              <dt>
                <strong>Primary Email Address </strong>
              </dt>
              <dd>
                edward-rooster@gmail.com
                <span>
                  <a className="pull-right" href="#">
                    <i className="fa fa-pencil"></i>
                  </a>
                </span>
              </dd>
              <hr />
              <dt>
                <strong>Phone Number </strong>
              </dt>
              <dd>
                (304) 33-2867-499
                <span>
                  <a className="pull-right" href="#">
                    <i className="fa fa-pencil"></i>
                  </a>
                </span>
              </dd>
              <hr />
              <dt>
                <strong>Office Number </strong>
              </dt>
              <dd>
                (304) 44-9810-296
                <span>
                  <a className="pull-right" href="#">
                    <i className="fa fa-pencil"></i>
                  </a>
                </span>
              </dd>
              <hr />
              <dt>
                <strong>Address </strong>
              </dt>
              <dd>
                California, US
                <span>
                  <a className="pull-right" href="#">
                    <i className="fa fa-pencil"></i>
                  </a>
                </span>
              </dd>
              <hr />
            </dl>
            <button type="button" className="btn-u btn-u-default">
              Cancel
            </button>
            <button type="button" className="btn-u">
              Save Changes
            </button>
          </div>

          <div id="passwordTab" className="profile-edit tab-pane fade">
            <h2 className="heading-md">Manage your Security Settings</h2>
            <p>Change your password.</p>
            <br />
            <form className="sky-form" id="sky-form4" action="#">
              <dl className="dl-horizontal">
                <dt>Username</dt>
                <dd>
                  <section>
                    <label className="input">
                      <i className="icon-append fa fa-user"></i>
                      <input
                        type="text"
                        placeholder="Username"
                        name="username"
                      />
                      <b className="tooltip tooltip-bottom-right">
                        Needed to enter the website
                      </b>
                    </label>
                  </section>
                </dd>
                <dt>Email address</dt>
                <dd>
                  <section>
                    <label className="input">
                      <i className="icon-append fa fa-envelope"></i>
                      <input
                        type="email"
                        placeholder="Email address"
                        name="email"
                      />
                      <b className="tooltip tooltip-bottom-right">
                        Needed to verify your account
                      </b>
                    </label>
                  </section>
                </dd>
                <dt>Enter your password</dt>
                <dd>
                  <section>
                    <label className="input">
                      <i className="icon-append fa fa-lock"></i>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        placeholder="Password"
                      />
                      <b className="tooltip tooltip-bottom-right">
                        Don't forget your password
                      </b>
                    </label>
                  </section>
                </dd>
                <dt>Confirm Password</dt>
                <dd>
                  <section>
                    <label className="input">
                      <i className="icon-append fa fa-lock"></i>
                      <input
                        type="password"
                        name="passwordConfirm"
                        placeholder="Confirm password"
                      />
                      <b className="tooltip tooltip-bottom-right">
                        Don't forget your password
                      </b>
                    </label>
                  </section>
                </dd>
                ~
              </dl>
              <label className="toggle toggle-change">
                <input type="checkbox" checked name="checkbox-toggle-1" />
                <i className="no-rounded"></i>
                Remember password
              </label>
              <br />
              <section>
                <label className="checkbox">
                  <input type="checkbox" id="terms" name="terms" />
                  <i></i>
                  <a href="#">I agree with the Terms and Conditions</a>
                </label>
              </section>

              <button type="button" className="btn-u btn-u-default">
                Cancel
              </button>
              <button className="btn-u" type="submit">
                Save Changes
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Editprofilee;
