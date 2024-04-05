import React from "react"
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"
import catdaddylogo from "../assets/catdaddylogo.png"

const Header = () => {
  return (
    <header className="header-container">
      <NavLink to="/" className="logo-container">
        <img src={catdaddylogo} alt="Cat Daddy's logo" className="catdaddylogo" />
      </NavLink>

      <nav className="header-nav-links">
        <NavLink to="/catindex" className="nav-link">CAT DADDY'S IN YOUR AREA</NavLink>
        <NavLink to="/catnew" className="nav-link">Add a Cat</NavLink>
        <a href="https://catleidoscope.sergethew.com/" target="_blank" rel="noopener noreferrer" className="nav-link">CATLEIDOSCOPE!</a>
      </nav>
    </header>
  );
};

export default Header;