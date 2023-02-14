import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="logo">
          {/* <Link to="/"> */}
          <span className="text">Freelancer</span>
          {/* </Link> */}
          <span className="dot">.</span>
        </div>
        <div className="links">
          <span>BusIness</span>
          <span>Explore</span>
          <span>Korean</span>
          <span>SIgn In</span>
          <span>Seller</span>
          <button>JoIn</button>
        </div>
      </div>
      <hr />
      <div className="menu">
        <span>Test</span>
        <span>Test2</span>
      </div>
    </div>
  );
};

export default Navbar;
