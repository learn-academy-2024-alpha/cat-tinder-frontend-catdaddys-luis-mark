import React from "react"
import { Nav } from "reactstrap"
import { NavLink } from "react-router-dom"
import catdaddylogo from "../assets/catdaddylogo.png"

const Header = () => {
  return (
    <Nav className="me-auto">
      <div>
        <h1 className= "header-text">Welcome To CatDaddy's </h1>
        <NavLink to="/">
          <img
            src={catdaddylogo}
            alt="outline of a cat profile and cat tinder in capitalized letters"
            className="catdaddylogo"
          />
        </NavLink>
      </div>
      <div className="header-nav-links">
        <NavLink to="/cat-index" className="nav-link">
          Meet All the Cats
        </NavLink>
        <NavLink to="/cat-new" className="nav-link">
          Add a Cat
        </NavLink>
        <a
          href=""
          target="blank"
          className="nav-link"
        >
          Find a Cat
        </a>
      </div>
    </Nav>
  )
}

export default Header