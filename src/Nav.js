import React from "react";
import { Link, NavLink, BrowserRouter as Router } from "react-router-dom";

const Nav = () => (
  <Router>
    <header>
      {/* <NavLink> */}
      <nav>
        <ul>
          {/* <Link path to='/'> */}
          <li>Rockets</li>
          {/* </Link> */}
          {/* <Link path to='/missions'> */}
          <li>Missions</li>
          {/* </Link> */}
          {/* <Link path to='/profile'> */}
          <li>My profile</li>
          {/* </Link> */}
        </ul>
      </nav>
      {/* </NavLink> */}
    </header>
  </Router>
);

export default Nav;
