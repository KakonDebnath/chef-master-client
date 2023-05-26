import { useState } from "react";
import { Button, Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const ChefTotalRecipe = ({ recipe }) => {
    const { recipe_id, recipe_img, recipe_name, ingredients, cooking_method, rating } = recipe;

    // handle favorite btn
    const handleFavoriteBtn = (e) => {
        e.preventDefault();
        toast("💝Added To Favorite!💝", {
            autoClose: 2000,
            pauseOnHover: true,
        });
        e.target.setAttribute("disabled", true);
    }

    return (
        <Col>
            <Card className="py-5 px-3 h-100" >
                <LazyLoadImage
                    style={{ objectFit: "contain", height: "250px" }}
                    className='img-fluid'
                    effect="blur"
                    src={recipe_img} 
                    delayTime={1000}
                    />
                <Card.Body>
                    <Card.Title className="border-5 border-start border-danger rounded-start ps-4 mb-4 mb-3">{recipe_name}</Card.Title>
                    <div>
                        <h6 className="mb-1 text-danger">🔥🔥 Cooking Method:</h6>
                        {cooking_method && <>{cooking_method.slice(0, 150)}...<Link className="text-danger text-decoration-none">See Details</Link></>}
                    </div>
                    <div>
                        <h6 className=" mt-2 text-danger">🥗🥗 Ingredients:</h6>
                        {ingredients && <>{ingredients.slice(0, 5).map((ingredient, i) => <li key={i}>{i + 1}) {ingredient}</li>)}</>}
                        <div className="d-flex align-items-center justify-content-between">
                            <Rating
                                style={{ maxWidth: 100 }}
                                value={rating}
                                readOnly
                            />
                            <p className="mb-0 text-danger">{rating}</p>
                        </div>
                    </div>
                    <Button onClick={handleFavoriteBtn} variant="warning" style={{ position: "absolute", bottom: "20px" }}>Add To Favorite</Button>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ChefTotalRecipe;