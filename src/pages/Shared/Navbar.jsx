import React, { useContext } from 'react';
import { Button, Col, Container, Form, Nav, NavDropdown, Row } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';


const NavbarHeader = () => {
    const { user, logOut, setLoading } = useContext(AuthContext);
    // handle log out button
    const handleLogOut = () => {
        logOut()
            .then()
            .catch(err => console.log(err.message));
        setLoading(false);
    }
    return (
        <Navbar className='shadow-lg sticky-top' expand="lg" style={{backgroundColor: "#ededed"}} >
            <Container fluid>
                <Navbar.Brand><Link to="/" className='text-decoration-none text-black'>🍄 Food Corner</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/" className={({ isActive }) => isActive ? "text-danger text-decoration-none px-3" : "text-decoration-none px-3 text-black"}>Home
                        </NavLink>
                        <NavLink to="/blog" className={({ isActive }) => isActive ? "text-danger text-decoration-none px-3" : "text-decoration-none px-3 text-black"}>Blog
                        </NavLink>
                    </Nav>

                    <div className='d-flex'>
                        {user &&
                            <div>
                                <img style={{ width: "40px", borderRadius: "50%" }} src={user.photoURL ? user.photoURL : "https://i.ibb.co/5Rcst90/proile.png"} title={user.displayName ? user.displayName : "Display name not found"} alt="" />
                            </div>}
                        {
                            user ? <Button onClick={handleLogOut} variant='danger' className='rounded-0 ms-3 px-4'>Sign Out</Button>
                                : <Button variant='danger' className='rounded-0 ms-3 px-4'><Link to="/login" className='text-decoration-none text-white'>Login</Link></Button>
                        }
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavbarHeader;