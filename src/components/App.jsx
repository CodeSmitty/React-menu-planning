import React from "react";
import Header from "./Header/Header";
import { Route, Switch } from 'react-router-dom';
//import Week from "./Month/Week/Week";
import Login from "./LoginPage/Login";
//import {AuthContext} from '../AuthContext/AuthContext'
//import Weekly from "./Month/Weekly/Weekly";
import NewWeek from '../containers/newWeek/newWeek';
import HomePage from '../pages/Homepage/Hompage';

function App() {


  return (
  <div>
    <Header />
    <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/create' component={NewWeek}/>
          <Route path='/login' component={Login} />
        </Switch>
  </div>
  )

}

export default App;
