import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle, FaGithub, FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Login = () => {
    const {loginUser, signInWithGoogle, signInWithGithub, errorMessage, setErrorMessage } = useContext(AuthContext);
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    // handle login user email and password
    const handleLoginUser = (e) => {
        e.preventDefault();
        setErrorMessage("");
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        loginUser(email, password)
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                navigate(from, { replace: true });
                toast("✅Log in Successfully!", {
                    autoClose: 2000,
                    pauseOnHover: true,
                });
            })
            .catch((error) => {
                console.log(error.message);
                setErrorMessage(error.message);
            })

        // reset form after successful
        form.reset();
    }
    // handle login with google pop up
    const signInWithGooglePopUp = (e) => {
        e.preventDefault();
        signInWithGoogle()
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                toast("✅Log in Successfully!", {
                    autoClose: 2000,
                    pauseOnHover: true,
                });
                navigate(from, { replace: true });

            }).catch((error) => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }
    // handle login with github pop up
    const signInWithGithubPopUp = (e) => {
        e.preventDefault();
        signInWithGithub()
            .then((result) => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                toast("✅Log in Successfully!", {
                    autoClose: 2000,
                    pauseOnHover: true,
                });
                navigate(from, { replace: true });
            }).catch((error) => {
                console.log(error.message);
                setErrorMessage(error.message);
            })
    }
    return (
        <div className='py-3 row col-md-6 mx-auto'>

            <div style={{ backgroundColor: "#F3F3F3" }} className='p-5 mt-5 col-sm-12 mx-auto'>
                <h3 className='text-center pb-5'>Login your account</h3>
                {
                    errorMessage &&
                    <div className='alert alert-danger' role='alert'>
                        {errorMessage}
                    </div>
                }
                <Form onSubmit={handleLoginUser}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="danger" type="submit" className='w-100'>
                        Login
                    </Button>
                </Form>
                <p className='text-center mt-4'>Dont’t Have An Account ? <Link to="/register" className='text-decoration-none' style={{ color: "#FF8C47" }}>Register</Link></p>
            </div>
            <div className='col-sm-12 mx-auto border px-md-5 py-3 mt-3'>
                <Button onClick={signInWithGooglePopUp} className='px-5 mb-2 w-100' variant="outline-danger"> <FaGoogle /> Login With Google</Button>
                <Button onClick={signInWithGithubPopUp} className='px-5 w-100' variant="outline-secondary"> <FaGithub /> Login With Github</Button>
            </div>
        </div>
    );
};

export default Login;