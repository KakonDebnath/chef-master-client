import React, { useEffect, useState } from 'react';
import { Button, Card, Row, Spinner } from 'react-bootstrap';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefTotalRecipe from './ChefTotalRecipe';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefRecipes = () => {
    const [allRecipe, setAllRecipe] = useState([]);
    const selectedChef = useLoaderData();

    useEffect(() => {
        fetch(`https://chef-server-side-nine.vercel.app/recipe/${selectedChef.chef_id}`)
            .then(response => response.json())
            .then(data => setAllRecipe(data))
    }, [])
    return (
        <div>
            <div className="card mb-3 p-4 mt-5">
                <h3 className='text-center mb-5 text-danger'>Chef Description</h3>
                <div className="row g-3 align-items-center">
                    <div className="col-md-5">
                        <LazyLoadImage
                            className='img-fluid rounded-start'
                            effect="blur"
                            src={selectedChef?.chef_picture}
                            delayTime={1000}
                        />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h3 className="card-title border-5 border-start border-danger rounded-start ps-4 mb-4">{selectedChef?.chef_name}</h3>
                            <p className="card-text fs-5">{selectedChef?.description}</p>
                            <p className="card-text mb-0 text-body-secondary fs-5">Total Likes: <span className='text-danger'>{selectedChef?.likes} ❤️❤️</span></p>
                            <p className="card-text mb-0 text-body-secondary fs-5">Total Recipe: <span className='text-danger'>{selectedChef?.number_of_recipes}</span></p>
                            <p className="card-text mb-0 text-body-secondary fs-5">Experience: <span className='text-danger'>{selectedChef?.years_of_experience}</span></p>
                        </div>
                    </div>
                </div>
            </div>
            <h4 className='border-4 rounded-start border-start border-danger ps-4 mb-4'>{selectedChef?.chef_name}'s Total recipe is: <span className='text-danger'>{allRecipe?.length}</span></h4>
            <Row xs={1} md={2} lg={3} className="g-2">
                {
                    allRecipe &&
                    allRecipe.map((recipe) => <ChefTotalRecipe recipe={recipe} key={recipe.recipe_id} />)
                }
                {
                    allRecipe?.length <= 0 && <div className='d-flex justify-content-center my-5'>
                        <Spinner animation="border" variant="danger" />
                    </div>
                }
            </Row>
        </div>
    );
};

export default ChefRecipes;