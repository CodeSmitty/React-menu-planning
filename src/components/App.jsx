import React, { Component } from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect';

import Header from "./Header/Header";
import { Route, Switch, Redirect } from "react-router-dom";
import Footer from "./Footer/Footer";
import LoginPage from "./LoginPage/LoginPage.component";

import NewWeek from "../containers/newWeek/newWeek";
import HomePage from "../pages/Homepage/Hompage";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";
import { setCurrentUser } from "../store/actions/user.actions";
import {selectCurrentUser } from "../store/selectors/user.selectors";

class App extends Component {
  
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      }
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header  />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={NewWeek} />
          <Route exact path="/login" render={()=> this.props.currentUser ? (<Redirect to="/" />): (<LoginPage />)} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
