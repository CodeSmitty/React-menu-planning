import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import Week from "./Month/Week/Week";
import Login from "./LoginPage/Login";

function App() {
  return (
    <div>
      <Header />
      <Week />
    </div>
  );
}

export default App;
