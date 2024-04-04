
import React, { useState } from 'react';

const CatNew = ({ addNewCat }) => {
  const [newCat, setNewCat] = useState({
    name: '',
    age: '',
    enjoys: '',
    image: '',
  });

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewCat(newCat);
  };

  return (
    <>
      <div className="svgContainer">
        {/* SVG code here */}
        <svg className="cat-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" width="100" height="100">
          <circle cx="100" cy="100" r="80" fill="#f890e7" />
          <path d="M70,80 Q65,60 50,80" fill="#0bd3d3" /> {/* Left ear */}
          <path d="M130,80 Q135,60 150,80" fill="#0bd3d3" /> {/* Right ear */}
          <circle cx="80" cy="120" r="10" fill="#ffffff" /> {/* Left eye */}
          <circle cx="120" cy="120" r="10" fill="#ffffff" /> {/* Right eye */}
          <path d="M90,150 Q100,160 110,150" stroke="#d0d0d0" stroke-width="5" fill="none" /> {/* Mouth */}
        </svg>
      </div>
     </>
  );
};

export default CatNew;
