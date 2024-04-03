import React from 'react';
import { useParams } from 'react-router-dom';

const CatShow = ({ cats }) => {
  const { id } = useParams();
  const currentCat = cats.find((cat) => cat.id === +(id));

  return currentCat ? (
    <main className="cat-show-container">
      <h3>{currentCat.name}</h3>
      <img src={currentCat.image} alt={`A cat named ${currentCat.name}`} />
      <p>Age: {currentCat.age}</p>
      <p>Enjoys: {currentCat.enjoys}</p>
    </main>
  ) : (
    <p>Cat not found!</p>
  );
};

export default CatShow;