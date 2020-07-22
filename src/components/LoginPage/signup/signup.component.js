import React, { useState } from "react";

import "./signup.styles.scss";
import Button from "../../UI/Button/Button";

import { auth, createUserProfileDocument  } from "../../../firebase/firebase.utils";

const Signup = (props) => {
  const [signupForm, setSignup] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { displayName, email, password, confirmPassword } = signupForm;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignup({ ...signupForm, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = signupForm;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
     await   createUserProfileDocument(user, { displayName });

     setSignup({
       displayName: "",
       email: "",
       password: "",
       confirmPassword: "",
     });
        
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="signup-box">
      <h2 className="login-h2">Resgister</h2>
      <form onSubmit={handleSubmit} className="sign-up-form">
        <input
          className="signup-input"
          placeholder="Display Name"
          value={displayName}
          onChange={handleChange}
          name="displayName"
          type="text"
        />
        <input
          className="signup-input"
          placeholder="Email"
          value={email}
          name="email"
          type="text"
          onChange={handleChange}
        />
        <input
          className="signup-input"
          placeholder="Password"
          name="password"
          type="password"
          value={password}
          onChange={handleChange}
        />
        <input
          className="signup-input"
          placeholder="Confirm Passwor"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          onChange={handleChange}
        />
        <div className="register-button">
          <Button clicked={handleSubmit} btnType="google-signin">Register</Button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
