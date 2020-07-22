import React, {useState} from "react";
import "./login.css";
import Button from '../UI/Button/Button'
import {signInWithGoogle, auth } from '../../firebase/firebase.utils';

function Login(props) {
  const [signinForm, setSigninForm] = useState({
    email:'',
    password:''
  });

  const {email, password } = signinForm;

  const handleSubmit = async event =>{
    event.preventDefault();
    const { email, password } = signinForm;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      setSigninForm({email:"", password:""});
    } catch(error){
      console.log(error);
    }
  }

  const handleChange = (e) =>{
    const {name, value} = e.target;

    setSigninForm({...signinForm, [name]:value})
  }
  

  return (
    <div className="logins">
      <div className="box">
        <h2 className="login-h2">Login Here</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="text"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={handleChange}
            ></input>
          </div>
          <div className="input-box">
            <input
              placeholder="Enter Password"
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            ></input>
            <Button btnType="google-signin" clicked={handleSubmit}>
              Sign In
            </Button>
            <Button type="button" btnType="google-signin" clicked={signInWithGoogle}>
              Sign In With Google
            </Button>
            <Button btnType="google-signin" clicked={props.handleClick}>
              Signup
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
