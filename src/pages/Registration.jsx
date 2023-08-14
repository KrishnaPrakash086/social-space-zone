import React, { useState } from "react";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";

import { validateEmail, validatePassword } from "../utils/validation";
import { auth, db } from "../firebase";
import "./Login.css";

function Registration() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    city: "",
    password: "",
    confirmPassword: "",
  });
  const [image, setImage] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserDetails({ ...userDetails, [name]: value });
  };

  const handlePasswordShows = () => setShowPassword((prevValue) => !prevValue);
  const handleConfirmPasswordShows = () =>
    setShowConfirmPassword((prevValue) => !prevValue);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file.size > 1024 * 1024 * 1024) {
      alert("Image size should be less than 2 MB");
    } else if (!["image/jpeg", "image/png", "image/jpg"].includes(file.type)) {
      alert("Invalid file format. Only JPEG, PNG, and JPG are allowed.");
    } else {
      setImage(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, city, password, confirmPassword } =
      userDetails;
    if (
      !firstName ||
      !lastName ||
      !email ||
      !city ||
      !password ||
      !confirmPassword
    ) {
      alert("All fields are required");
    } else if (!validateEmail(email)) {
      alert("Invalid email");
    } else if (!validatePassword(password)) {
      alert(
        "Invalid password. Password must contain at least 8 character, one capital letter, one numeric character, and one special character"
      );
    } else if (password !== confirmPassword) {
      alert("Passwords do not match");
    } else {
      alert("Success");
      createUserWithEmailAndPassword(auth, email, password)
        .then(async (userCredential) => {
          // eslint-disable-next-line no-shadow
          const { user } = userCredential;
          console.log(user);
          await addDoc(collection(db, "users"), {
            firstName,
            lastName,
            email,
            city,
            uid: user.uid,
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-inner">
        <form onSubmit={handleSubmit}>
          <h3>Sign Up </h3>
          <div className="mb-3">
            <label>Full name</label>
            <div className="d-flex">
              <input
                type="text"
                className="form-control me-2"
                name="firstName"
                onChange={handleChange}
                placeholder="First name"
              />
              <input
                type="text"
                className="form-control"
                name="lastName"
                onChange={handleChange}
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="mb-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              name="email"
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>
          <div className="mb-3">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              onChange={handleChange}
              placeholder="Enter city"
            />
          </div>
          <div className="mb-3">
            <label>Password</label>
            <div className="position-relative">
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                name="password"
                onChange={handleChange}
                placeholder="Strong password recommended"
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
            <label>Confirm Password</label>
            <div className="position-relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                className="form-control"
                name="confirmPassword"
                onChange={handleChange}
                placeholder="Confirm password"
              />

              <div
                className="position-absolute top-50 translate-middle-y"
                style={{ right: "12px" }}
                onClick={handleConfirmPasswordShows}
                aria-hidden="true"
              >
                {showConfirmPassword ? (
                  <i className="fa fa-eye" />
                ) : (
                  <i className="fas fa-eye-slash" />
                )}
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label>Upload Image (max size 1MB)</label>
            <input
              type="file"
              className="form-control"
              name="image"
              onChange={handleImageChange}
              accept="image/*"
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Sign Up
            </button>
          </div>
          <p className="forgot-password text-right">
            Already Registered ? <a href="/login">log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Registration;
