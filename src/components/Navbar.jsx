import React from "react";
import "./Nav.css";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          {" "}
          <li>Home</li>
        </Link>
        <Link to="/products">
          <li>Products</li>
        </Link>
       
        <Link to="/contact">
          <li>Contact</li>
        </Link>
        <Link to="/registration">
          <li>Login</li>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
