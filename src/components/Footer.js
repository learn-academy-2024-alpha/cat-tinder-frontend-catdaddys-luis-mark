import React, { useState } from "react";
import catdaddylogo from "../assets/catdaddylogo.png";

const Footer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSrc = '/Katzen-Techno.mp3';

  const togglePlayPause = () => {
    const audio = document.getElementById("audio-player");
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <footer>
      <div className="footer-content">
        <div className="audio-player-container">
          <audio
            id="audio-player"
            src={audioSrc}
            loop // This makes the audio loop
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}>
            Your browser does not support the audio element.
          </audio>
          <button onClick={togglePlayPause}>
            {isPlaying ? 'Pause' : 'Play'}
          </button>
        </div>
        <p className="footer-text">© 2024 Cat Daddy's. Mark-Luis | LEARN Academy</p>
        <img src={catdaddylogo} alt="small neon cat daddy logo" className="catlogosmall" />
      </div>
    </footer>
  );
};

export default Footer;