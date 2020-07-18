import React from "react";
import "./login.css";
import Button from '../UI/Button/Button'
import {signInWithGoogle } from '../../firebase/firebase.utils';

function Login(props) {



  

  return (
    <div className="logins">
      <div className="box">
        <h2 className="login-h2">Login Here</h2>
        <form>
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Enter Username"
            ></input>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
            ></input>
          </div>
          <div className='buttons'>
          <input
            className="submit-btn"
            type="submit"
            name=""
            value="submit"
          ></input>
          <Button btnType="google-signin" clicked={signInWithGoogle}>
            Sign In With Google
          </Button>
          <Button btnType="google-signin" clicked={props.handleClick}>Signup</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
