import React, { useState } from "react";
import Login from "./Login";
import Signup from "./signup/signup.component";
import "./LoginPage.styles.scss";

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);

  const handleClick = () => {
    setIsSignup(true);
  };

  return (
    <div className="logins">
      {!isSignup ? <Login handleClick={handleClick} /> : <Signup />}
    </div>
  );
};

export default LoginPage;
