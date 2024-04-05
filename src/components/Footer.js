import React from "react"
import catdaddylogo from "../assets/catdaddylogo.png"

const Footer = () =>{
  return (
    <>
    <div className="footer-content">
      <p className= "footer-text">© 2024 Cat Daddy's. All rights reserved.</p>
      <img
        src={catdaddylogo}
        alt="small neon cat daddy logo"
        className="catlogosmall"
      />
      </div>
    </>
  )
}


export default Footer