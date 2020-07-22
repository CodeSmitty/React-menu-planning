import React from "react";
import { useSelector } from 'react-redux';
import classes from "./Header.module.css";
import { auth } from "../../firebase/firebase.utils";
import Nav from "../Navigation/Navigation";
import { Link } from "react-router-dom";
import {selectCurrentUser} from '../../store/selectors/user.selectors';


const Header = () => {
  const currentUser = useSelector(selectCurrentUser)
  
  return (
    <div className={classes.Header}>
      <h1 className={classes.Beans}>
        Beans &
        <br />
        Cornbread
      </h1>

      <div className={classes.Navigations}>
        {currentUser ? (
          <div>
            <Nav />
            <div className={classes.Signout} onClick={() => auth.signOut()}>
              Sign Out
            </div>
          </div>
        ) : (
          <div>
            <Link to="/">Home</Link>
            <Link className={classes.Login} to="/login">
              Log In
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
