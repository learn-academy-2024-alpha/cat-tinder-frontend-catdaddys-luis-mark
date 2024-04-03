import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const CatIndex = ({ cats }) => {
  return (
    <main className="cat-index-cards">
      {cats.map((cat, index) => (
        <Card key={index} style={{ width: '18rem' }}>
          <img alt={`profile of a cat named ${cat.name}`} src={cat.image} />
          <CardBody>
            <CardTitle tag="h5">{cat.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Age: {cat.age}
            </CardSubtitle>
            <NavLink to={`/catshow/${cat.id}`} className="btn btn-primary">
              See More Details
            </NavLink>
          </CardBody>
        </Card>
      ))}
    </main>
  );
};

export default CatIndex;