import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import ChefCard from './ChefCard';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Marquee from "react-fast-marquee";


const Home = () => {
    const [customers, setCustomers] = useState([]);
    const allChef = useLoaderData();
    useEffect(() => {
        fetch('https://chef-server-side-nine.vercel.app/customers')
            .then(res => res.json())
            .then(data => setCustomers(data))
    }, [])

    return (
        <div className='text-center'>
            <section className='row align-items-center py-5'>
                <div className='col-md-6'>
                    <h1 className='display-3 fw-bold text-capitalize mb-sm-5'><span className='text-danger'>🍔 Freshness</span> is our secret ingredient!</h1>
                    <Link to="/register" className="text-decoration-none text-white "><button className='btn btn-danger py-2 px-4'>Register Now</button></Link>
                </div>
                <div className='col-md-6'>
                    <LazyLoadImage
                        className='img-fluid'
                        effect="blur"
                        src="https://i.ibb.co/xhYw6kZ/banner.jpg"
                        delayTime={1000}
                    />
                </div>
            </section>
            <div className='row mt-5'>
                <h3 className='mb-5 fs-1 text-danger'>Our Lovely Customer Loves Our Food</h3>
            </div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {
                    customers && customers.map(customer =>
                        <SwiperSlide key={customer?.customer_id}>
                            <div className='row g-md-5' style={{ paddingLeft: "50px", paddingRight: "50px" }}>
                                <div className='col-md-6 mb-sm-5'>
                                    <LazyLoadImage
                                        className='img-fluid'
                                        effect="blur"
                                        src={customer?.customer_img}
                                        delayTime={1000}
                                    />
                                </div>
                                <div className='col-md-6 text-start mb-5'>
                                    <p className='mb-3 fs-5'>{customer?.customer_description}
                                    </p>
                                    <div className='d-flex my-2'>
                                        <Rating
                                            style={{ maxWidth: 100 }}
                                            value={customer?.customer_rating}
                                            readOnly
                                        />
                                        <p className='mb-0 ms-3'>{customer?.customer_rating}</p>
                                    </div>
                                    <h5 className='mb-0 text-danger'>{customer?.customer_name} 💕💕</h5>
                                    <span>{customer?.customer_location} 🏠🏠</span>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
            <section>
                <h3 className='mb-5 fs-1 text-danger'>Meet Our Experienced Chefs</h3>
                <Row xs={1} md={2} lg={3} className="g-3">
                    {
                        allChef && allChef.map((chef) => <ChefCard chef={chef} key={chef.chef_id} />)
                    }
                    {
                        allChef?.length <= 0 && <div className='d-flex justify-content-center my-5'>
                            <Spinner animation="border" variant="danger" />
                        </div>
                    }
                </Row>
            </section>
            <section className='py-5'>
                <h3 className='mb-5 fs-1 text-danger'>Our Special Recipes</h3>
                <Marquee pauseOnHover>
                    <div className="row row-cols-md-4 g-3">
                        <div className="col">
                            <div className="card h-100 p-3">
                                <img src="https://i.ibb.co/Q8FYh28/buna-khiculi.png" className="card-img-top img-fluid" alt="buna-khiculi" style={{ objectFit: "contain", maxHeight: "150px" }} />
                                <div className="card-body">
                                    <h5 className="card-title text-danger border-2 border-bottom pb-2">Kachhi Biriyani</h5>
                                    <p>Price: 420Tk ❤️‍🔥</p>
                                    <button className='btn btn-danger'>View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 p-3">
                                <img src="https://i.ibb.co/ZGM1GNH/Chingri-Malai-Curry.png" className="card-img-top img-fluid" alt="Chingri-Malai-Curry" style={{ objectFit: "contain", maxHeight: "150px" }} />
                                <div className="card-body">
                                    <h5 className="card-title text-danger border-2 border-bottom pb-2">Chingri-Malai-Curry</h5>
                                    <p>Price: 300Tk ❤️‍🔥</p>
                                    <button className='btn btn-danger'>View Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card h-100 p-3">
                                <img src="https://i.ibb.co/pwDr2X6/Shorshe-Ilish.png" className="card-img-top img-fluid" alt="Shorshe-Ilish" style={{ objectFit: "contain", maxHeight: "150px" }} />
                                <div className="card-body">
                                    <h5 className="card-title text-danger border-2 border-bottom pb-2">Shorshe-Ilish</h5>
                                    <p>Price: 350Tk ❤️‍🔥</p>
                                    <button className='btn btn-danger'>View Details</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100 p-3">
                                <img src="https://i.ibb.co/Q8FYh28/buna-khiculi.png" className="card-img-top img-fluid" alt="buna-khiculi" style={{ objectFit: "contain", maxHeight: "150px" }} />
                                <div className="card-body">
                                    <h5 className="card-title text-danger border-2 border-bottom pb-2">Kachhi Biriyani</h5>
                                    <p>Price: 420Tk ❤️‍🔥</p>
                                    <button className='btn btn-danger'>View Details</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </Marquee>

            </section>
        </div>
    );
};

export default Home;