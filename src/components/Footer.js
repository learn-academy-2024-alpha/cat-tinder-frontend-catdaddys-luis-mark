import React from "react"
import catdaddylogo from "../assets/catdaddylogo.png"

const Footer = () =>{
  return (
    <footer>
    <div className="footer-content">
      <p className= "footer-text">© 2024 Cat Daddy's. Mark-Luis |LEARN Academy</p>
      <img
        src={catdaddylogo}
        alt="small neon cat daddy logo"
        className="catlogosmall"
      />
      </div>
    </footer>
  )
}


export default Footer