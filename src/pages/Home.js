import React from "react"
import homeimage from "../assets/homeimage.png"

const Home = () =>{
  return (
    <div>
      <p className="homepage-phrase">Cat Daddy's: Where female felines don't swipe right for Mr. Right—they swipe right for Mr. Right Meow!</p>
      <div className="homeimagelogo" >
        <img
            src={homeimage}
            alt="Heroimage happy cat couple"
            />
      </div>
    </div>
  )
}

export default Home