import React from 'react';
import { FaArrowRight, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='text-center border-top pt-5 mt-5'>
            <div className='row pt-0'>
                <div className='col-md-8'>
                    <span className='fs-3 mb-4 d-inline-block text-danger'>Submit Your Email For Our New Recipe</span>
                    <div className='d-flex'>

                        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Enter Your Email " />
                        <button type="button" className="btn btn-danger">Submit</button>
                    </div>
                </div>
                <div className='col-md-4 mt-md-0 mt-5'>
                    <p className='fs-4 mb-0 mb-md-4 mb-lg-4 d-inline-block text-danger'>👍 Fallow Us on</p>
                    <br />
                    <Link className='text-danger'><FaFacebook className='mx-3 my-3 fs-4' /></Link>
                    <Link className='text-danger'><FaInstagram className='mx-3 my-3 fs-4' /></Link>
                    <Link className='text-danger'><FaTwitter className='mx-3 my-3 fs-4' /></Link>
                </div>
            </div>
            <p className='py-4'>
                &copy;All Right reserved by Food Corner 2023
            </p>
        </div>
    );
};

export default Footer;