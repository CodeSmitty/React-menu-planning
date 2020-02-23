import React, {useState} from 'react';
import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Table from './Table';
import Login from "./LoginPage/Login"

function App() {

  return (<div>
    <Header/>
    <Nav/>
    <Login/>
    <Footer/>
  </div>)

};

export default App;
