import React from 'react';
import { Link } from 'react-router-dom';
import logo from './planet.png';
import './Nav.css';

const Nav = () => (
  <header>
    <div className="logo-title-wrapper">
      <img src={logo} alt="Logo" className="logo" />
      <h1 className="nav-title">Space Travelers&#39;s Hub</h1>
    </div>
    <nav>
      <ul className="nav-list">
        <li className="nav-rockets">
          <Link className="link" to="/">
            Rockets
          </Link>
        </li>
        <li>
          <Link className="link" to="/missions">
            Missions
          </Link>
        </li>
        <li className="nav-my-profile">
          <Link className="link" to="/profile">
            My profile
          </Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Nav;
