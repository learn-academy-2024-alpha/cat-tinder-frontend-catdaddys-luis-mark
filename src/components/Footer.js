import React from "react"
import catdaddylogo from "../assets/catdaddylogo.png"

const Footer = () =>{
  return (
    <>
      <h1 className= "footer-text">Footer</h1>
      <img
        src={catdaddylogo}
        alt="small neon cat daddy logo"
        className="catlogosmall"
      />
    </>
  )
}


export default Footer