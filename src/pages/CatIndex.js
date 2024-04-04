import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';

const CatIndex = ({ cats }) => {
  console.log(cats)
  return (
    <main className="cat-index-cards">
      {cats.map((cat) => (
        <Card key={cat.id} style={{ width: '18rem' }}>
          <img alt={`profile of a cat named ${cat.name}`} src={cat.image} />
          <CardBody>
            <CardTitle tag="h5">{cat.name}</CardTitle>
            <CardSubtitle tag="h6" className="mb-2 text-muted">
              Age: {cat.age}
            </CardSubtitle>
            <NavLink to={`/catshow/${cat.id}`} className="btn btn-primary custom-btn">          See More Details
            </NavLink>
          </CardBody>
        </Card>
      ))}
    </main>
  );
};

export default CatIndex;