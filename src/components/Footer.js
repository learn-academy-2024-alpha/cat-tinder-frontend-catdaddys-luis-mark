import React from "react"
import catdaddylogo from "../assets/catdaddylogo.png"

const Footer = () =>{
  return (
    <>
      <h1 className= "footer-text">Footer</h1>
      <img
        src={catdaddylogo}
        alt="outline of a cat profile and cat tinder in capitalized letters"
        className="catlogosmall"
      />
    </>
  )
}


export default Footer