import React from "react"
import homeimage from "../assets/homeimage.png"

const Home = () => {
  return (
    <div className="home-container"> {/* Added a wrapper for better control */}
      <h1 className="home-header">WELCOME TO CATDADDY'S</h1>
      <p className="homepage-phrase">Cat Daddy's: Where female felines don't swipe right for Mr. Right—they swipe right for Mr. Right Meow!</p>
      <div className="homeimagelogo">
        <img src={homeimage} alt="Hero image happy cat couple" />
      </div>
    </div>
  )
}

export default Home