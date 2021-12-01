import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import Alamo from "../AlamoIcon";

function Nav() {
  function showNavigation() {
    if (Auth.loggedIn()) {
      return (
        <ul className="flex-row">
          <li className="mx-1">
            <Link to="/orderHistory">Order History</Link>
          </li>
          <li className="mx-1">
            {/* this is not using the Link component to logout or user and then refresh the application to the start */}
            <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
          </li>
        </ul>
      );
    } else {
      return (
          <ul className="flex-row">
            <li>
              <Link to="/signup" className="signup-login">
                Signup
              </Link>
            </li>
            <li className="mx-4">
              <Link to="/login" className="signup-login">
                Login
              </Link>
            </li>
          </ul>
      );
    }
  }

  return (
    <header className="flex-row px-1">
      <Alamo/>
      <h1 className="home-banner-font">
        <Link to="/">ALAMO TOOLS</Link>
      </h1>

      <nav className="nav-links">{showNavigation()}</nav>
    </header>
  );
}

export default Nav;
