import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='container'>
            <Row className='py-5 text-center align-items-center'>
                <Col>
                    <h2>Opps Page not found</h2>
                    <p className='display-6 font-bold text-danger'>404</p>
                    <Link to="/"><Button variant="danger">Back To Homepage</Button></Link>
                </Col>
                <Col>
                    <img className='img-fluid' src="https://i.ibb.co/McgNZFM/404.png" alt="" />
                </Col>
            </Row>
        </div>
    );
};

export default ErrorPage;