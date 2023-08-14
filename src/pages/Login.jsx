import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { validateEmail, validatePassword } from "../utils/validation";

import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlePasswordShows = () => setShowPassword((prevValue) => !prevValue);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userInfo;
    // if (!validateEmail(email)) alert("Invalid email");

    // if (!validatePassword(password)) alert("Invalid password");

    if (validateEmail(email)) {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { user } = userCredential;
          // console.log(user);
          localStorage.setItem("user_token", user.accessToken);
          navigate("/social");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          alert(errorMessage);
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user_token")) navigate("/social");
  }, []);

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign In</h3>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                placeholder="Enter password"
                onChange={handleChange}
              />
              <div
                className="position-absolute top-50 translate-middle-y"
                style={{ right: "12px" }}
                onClick={handlePasswordShows}
                aria-hidden="true"
              >
                {showPassword ? (
                  <i className="fa fa-eye" />
                ) : (
                  <i className="fas fa-eye-slash" />
                )}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right">
            Forgot <Link to="/login">password?</Link>
          </p>

          <p className="forgot-password text-right">
            Create a new account <Link to="/registration">registration</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
