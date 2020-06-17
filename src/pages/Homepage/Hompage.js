import React from 'react';
import {Link} from 'react-router-dom'
import './Homepage.scss'

const HomePage = () =>(
    <div className='homepage'>
       <h1 className='homepage-title'>Welcome to Bs & Cs Menu planning</h1>
       <div>
           <p>Please Click link to log in</p>
           <Link className='login' to='/login'>Log In</Link>
       </div>
    </div>
);

export default HomePage;