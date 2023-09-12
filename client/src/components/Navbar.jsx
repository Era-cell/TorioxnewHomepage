import React from "react";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="navbar-block">
        <ul className="navbar-list">
          <li className="list-item">
            <a>Solutions</a>
          </li>
          <li className="list-item">
            <a>Features</a>
          </li>
          <li className="list-item">
            <a>Pricing</a>
          </li>
          <li className="list-item">
            <a>Testimonials</a>
          </li>
          <li className="list-item">
            <a className="get-started">Get Started</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
