import React from 'react';
import { NavLink } from 'react-router-dom';
import backbutton from "../assets/backbutton.png"

const CatIndex = ({ cats }) => {
  return (
    <div className='main-content'>
    <main className="cat-index-cards">
      {cats.map((cat) => (
        <div className="profile-card" key={cat.id}>
          <img alt={`profile of a cat named ${cat.name}`} src={cat.image} />
          <h5 className="cat-index-name">{cat.name}</h5>
          <h6 className="cat-index-age">Age: {cat.age}</h6>
          <NavLink to={`/catshow/${cat.id}`} className="btn btn-primary custom-btn">
            See More Details
          </NavLink>
            <div className="back-button-container">
              <div className="back-button">
          <NavLink to="/catmodel">
            <img src={backbutton} alt="Back Button Cat Image" />
          </NavLink>
        </div>
      </div>
        </div>
      ))}
    </main>
    </div>
  );
};

export default CatIndex;