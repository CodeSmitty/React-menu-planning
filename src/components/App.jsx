import React, { Component } from "react";
import Header from "./Header/Header";
import { Route, Switch } from "react-router-dom";
import Footer from "./Footer/Footer";
import LoginPage from "./LoginPage/LoginPage.component";

import NewWeek from "../containers/newWeek/newWeek";
import HomePage from "../pages/Homepage/Hompage";
import { auth, createUserProfileDocument } from "../firebase/firebase.utils";


class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data(),
            },
          });
          console.log(this.state);
        });
      }
      this.setState({ currentUser: userAuth });
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/create" component={NewWeek} />
          <Route path="/login" component={LoginPage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
