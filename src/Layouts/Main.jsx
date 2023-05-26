import React from 'react';
import { Outlet } from 'react-router-dom';
import NavbarHeader from '../pages/Shared/Navbar';
import Footer from '../pages/Shared/Footer';

const Main = () => {
    return (
        <div className='container'>
            <NavbarHeader />
            <Outlet></Outlet>
            <Footer />
        </div>
    );
};

export default Main;