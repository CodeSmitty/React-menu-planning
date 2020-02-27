import React from 'react';
import Footer from '../Footer';
import Table from '../Table';


function Login() {

const LoginStyle = {

    position:'auto',
    width: '100%',
    height:'703px',
    backgroundImage: `url('../Images/burgerImg.jpg')`,
    backgroundSize: "cover"
  }

function handleClick(e){
return(<div>
  <Table />
  <Footer />
</div>
)
e.preventDefault();
};

  return (<div style={LoginStyle}>

    <div className='box'>
      <h2 className='login-h2'>Login Here</h2>
      <form >
        <div className="input-box">
          <input type='text' placeholder="Enter Username" required=""></input>

        </div>
        <div className="input-box">
          <input type="password" placeholder="Enter Password" required=""></input>

        </div>
        <input onClick={handleClick} className='submit-btn' type="submit" name="" value="submit"></input>
      </form>

    </div>

  </div>)
};

export default Login;
