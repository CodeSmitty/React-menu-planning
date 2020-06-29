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
      <h1>What We Do</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        pretium eleifend magna, eu luctus tortor tempus in. In rhoncus tempus
        diam, quis eleifend dui congue non. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Etiam viverra
        erat et nibh congue faucibus. Phasellus at ultricies lectus. Morbi
        fermentum, nibh et accumsan mollis, metus mi condimentum arcu, sed
        euismod leo nulla in ex. Interdum et malesuada fames ac ante ipsum
        primis in faucibus. Duis hendrerit, urna suscipit dictum vehicula, neque
        eros luctus velit, nec malesuada massa nibh quis libero. Proin id turpis
        massa. Aenean accumsan augue id lacus lacinia hendrerit. Pellentesque
        dictum massa a auctor auctor. 
      </p>

      <img
        className="Image"
        src={poke}
      />
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
