import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.scss";
import poke from '../../Images/poke.png'


const HomePage = () => (
  <div>
    <div className="homepage">
      <header>
        <h1 className="homepage-title">Welcome to Bs & Cs Menu planning</h1>
      </header>
    </div>
    <div className="content flex">
      <div className='image'>
      <img
        
        src={poke}
      />
      </div>
  <div className='content-text'>
    <h1>What We Do</h1>
      <p className='text-one' > Easy Meal Planner </p>
      <p className='text-two'>Upload Your Favorite Cuisine Photos </p>
    </div>          
    <span className='line-bottom'></span>
    </div>
    
    <div className="login">
      <p>Please Click link to log in</p>
      <Link className="login" to="/login">
        Log In
      </Link>
    </div>
  </div>
);

export default HomePage;
