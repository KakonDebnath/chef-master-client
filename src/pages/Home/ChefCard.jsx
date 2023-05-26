import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefCard = ({ chef }) => {

  const { chef_id, chef_picture, chef_name, years_of_experience, number_of_recipes, likes } = chef;

  return (
    <Col>
      <Card className='p-3 shadow-lg'>
        <LazyLoadImage
        style={{height: "300px"}}
          className='img-fluid'
          effect="blur"
          src={chef_picture}
          delayTime={1000}
        />
        <Card.Body>
          <Card.Title>{chef_name}</Card.Title>
          <Card.Text>
            {years_of_experience} Years of Experience
          </Card.Text>
          <div className='d-flex align-items-center justify-content-between'>
            <p className='text-danger'>💖 Likes: {likes}</p>
            <p className='text-danger'> Recipes: {number_of_recipes}</p>
          </div>
          <Link to={`/chef_recipes/${chef_id}`}>
            <Button variant="danger" className='shadow-lg'>View Recipes</Button>
          </Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ChefCard;