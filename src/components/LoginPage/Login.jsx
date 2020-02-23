import React from 'react';

function Login() {

  return (<div>
    <div className='box'>
      <h2 className='login-h2'>Login Here</h2>
      <form >
        <div className="input-box">
          <input type='text' placeholder="Enter Username" required=""></input>

        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Password" required=""></input>

        </div>
        <input className='submit-btn' type="submit" name="" value="submit"></input>
      </form>

    </div>

  </div>)
};

export default Login;
