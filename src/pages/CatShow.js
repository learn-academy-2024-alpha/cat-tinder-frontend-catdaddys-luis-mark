import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const CatShow = ({ cats, deleteCat }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const currentCat = cats.find((catObject) => catObject.id === +id);
 

  const handleDeleteCat = () => {
    deleteCat(currentCat.id);
    navigate("/catindex");
  };

  return currentCat ? (
    <main className="cat-show-container">
    <h3 className="cat-show-name">{currentCat.name}</h3>
    <img src={currentCat.image} alt={`A cat named ${currentCat.name}`} className="cat-show-image" />
    
    <div className="cat-show-actions">
      <NavLink to="/catindex" className="btn btn-back-all-cats">Back to All the Cats</NavLink>
      <NavLink to={`/catedit/${currentCat.id}`} className="btn btn-edit-cat">Edit {currentCat.name}</NavLink>
      <button onClick={handleDeleteCat} className="btn btn-delete-cat">Delete {currentCat.name}</button>
    </div>
    
    <div className="cat-show-details">
      <p>Age: {currentCat.age}</p>
      <p>Enjoys: {currentCat.enjoys}</p>
    </div>
  </main>
  ) : (
    <p>Cat Show Page</p>
  );
};

export default CatShow;
