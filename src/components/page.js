import "../styles/Page.scss";
import FacebookLogo from "../images/Facebook-Logo-2019.png";
import React, { useState } from "react";

export const Page = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setFormErrors(validateForm(formData));
  };

  const validateForm = (values) => {
    const errors = {};
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!values.username) {
      errors.username =
        "The email or mobile number you entered isn't connected to an account. Find your account and log in.";
    }
    return errors;
  };

  return (
    <div>
      <div className="logo-writing">
        <img src={FacebookLogo} alt="facebook" />
        <h2>Connect with friends and the world around you on Facebook.</h2>
      </div>
      <div className="login-form">
        <form className="input-fields" onSubmit={handleSubmit}>
          <input
            type="text"
            id="username"
            name="username"
            placeholder="Email or phone number"
            value={formData.username}
            onChange={handleChange}
          />
          <div className="error-email">
            <p>{formErrors.username}</p>
          </div>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          <div className="error-password">
            <p>{formErrors.password}</p>
          </div>
          <button type="submit" value="submit">
            Log In
          </button>
        </form>
        <div className="forgot-password">
          <a href="https://www.w3schools.com">Forgot password?</a>
        </div>
        <div className="line"></div>
        <div className="create-new">
          <button>Create new account</button>
        </div>
      </div>
    </div>
  );
};

export default Page;
