import React, {useState, useContext} from "react";
import {AuthContext} from "../../AuthContext/AuthContext";
import "./login.css";

function Login(props) {



  const authContext  = useContext(AuthContext)
  const [isAuthenticated, setIsAuthenticated] = useState({
    username:'', password:''
  })



  const handleChange = (e) => {
    const {name, value} = e.target;
    setIsAuthenticated((preLunchState) => {
      return {
        ...preLunchState,
        [name]: value
      };
    });
  };
  function submitMeal(e, newMeal) {
e.preventDefault()
authContext.login(newPas =>{
  setIsAuthenticated(prevMeals => {
     return {
       ...prevMeals,
       newMeal}

   });
})


    loginHandler()
    setIsAuthenticated({username:'', password:''})


  }

  const loginHandler = () => {
    authContext.login();
  };

  return (<div className='logins'>
    <div >
      <h1 className="beans">
        Beans &
        <br/>
        Cornbread
      </h1>
    </div>
    <div className="box">
      <h2 className="login-h2">Login Here</h2>
      <form onSubmit={submitMeal}>
        <div className="input-box">
          <input type="text" name="username" placeholder="Enter Username" value={isAuthenticated.username} onChange={handleChange}  required=""></input>
        </div>
        <div className="input-box">
          <input type="password" name="password" placeholder="Enter Password" value={isAuthenticated.password} onChange={handleChange} required=""></input>
        </div>
        <input className="submit-btn" onSubmit={loginHandler} type="submit" name="" value="submit"></input>
      </form>
    </div>
  </div>);
}

export default Login;
