import React from "react";
import catnotfound from "../assets/catnotfound.png"
import { NavLink } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="not-found-container">
      <NavLink to="/" className = "not-found">
      <img src={catnotfound} alt="Cat Not Found" />
      </NavLink>
      <h1>Meow! No, Cat Daddy in site!</h1>
      <p>Seems like your Mr. Right Meow! Has already been snatched Up!.</p>
      <p>Try swiping right for other Cat Daddy's!</p>
    </div>
  );
};

export default NotFound;