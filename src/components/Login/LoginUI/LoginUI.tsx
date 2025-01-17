import React, { useState } from "react";
import "../../../assets/styles/Login/login.css";
import { Link } from "react-router-dom";

const logoStyle = {
  width: "80x",
  height: "80px"
};

//UI for logging in.
const LoginUI = (props: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //Submits form, prevents page refresh
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const userInfo = {
      email: email,
      password: password
    };
    props.handleLogin(userInfo);
  };

  const loginFailed = props.loginStatus ? (
    <div className="alert alert-danger mt-4" role="alert">
      <strong>Login Failed, incorrect info! </strong>
    </div>
  ) : null;

  //Login
  return (
    <body className="bg1">
      <div className="container">
        <div className="row no-gutter">
          <div className="col-4 offset-8">
            <div className="card card-signin my-5  border-0 rounded">
              <div className="card-body card-background ">
                <div className="d-flex align-items-center justify-content-center ml-3 mr-3">
                  <img
                    src={require("../../../assets/logo/updog_logo.png")}
                    alt=""
                    className="img-thumbnail-small m-2"
                    style={logoStyle}
                  />
                </div>

                <h5 className="card-title text-center mb-4">Sign In</h5>
                <form className="form-signin" onSubmit={handleSubmit}>
                  <div className="form-label-group input-style">
                    <input
                      type="email"
                      value={email}
                      className="form-control"
                      placeholder="Email address"
                      onChange={e => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-label-group mt-4">
                    <input
                      type="password"
                      id="inputPassword"
                      className="form-control"
                      placeholder="Password"
                      onChange={e => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </div>
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                  </div>
                  <button
                    className="btn btn-md btn-primary btn-block text-uppercase"
                    type="submit"
                  >
                    Sign in
                  </button>
                  {loginFailed}
                  <Link
                    to={"/register"}
                    className="mt-2 new-user justify-content-end"
                  >
                    New User?
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </body>
  );
};

export default LoginUI;
