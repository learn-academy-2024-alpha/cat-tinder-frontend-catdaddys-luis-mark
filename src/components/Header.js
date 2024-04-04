import React from "react"
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"
import catdaddylogo from "../assets/catdaddylogo.png"

const Header = () => {
  return (

    <Nav className="me-auto">
      <div>
        <div className="header-content">
      <h1 className="home-header">WELCOME TO CATDADDY'S</h1>
        </div>
        <NavLink to="/">
          <img
            src={catdaddylogo}
            alt="outline of a cat profile and cat tinder in capitalized letters"
            className="catdaddylogo"
          />
        </NavLink>
      </div>
      <div className="header-nav-links">
        <NavLink to="/catindex" className="nav-link">
          Meet All the Cats
        </NavLink>
        <NavLink to="/cat-new" className="nav-link">
          Add a Cat
        </NavLink>
        <a
          href="https://catleidoscope.sergethew.com/"
          target="blank"
          className="nav-link"
        >
          CATLEIDOSCOPE!
        </a>
      </div>
    </Nav>
  )
}

export default Header