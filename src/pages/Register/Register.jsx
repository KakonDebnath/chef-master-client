import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import { toast } from 'react-toastify';

const Register = () => {
    const { createUser, errorMessage, setErrorMessage, updateUserProfile } = useContext(AuthContext);
    const [isAccepted, setIsAccepted] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const from = location.state?.from?.pathname || "/";
    const navigate = useNavigate();
    // handle registration
    const handleRegister = (e) => {
        e.preventDefault();
        setErrorMessage("");
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        console.log(name, email, photo, password);
        if (password.length < 6) {
            setErrorMessage("The Password is less than 6 characters");
        } else {
            createUser(email, password)
                .then((result) => {
                    const createdUser = result.user;
                    console.log(createdUser);
                    navigate(from, { replace: true });
                    toast("✅ Account Created Successfully!", {
                        autoClose: 1000,
                        pauseOnHover: true,
                    });
                    
                    if(createdUser){
                        updateUserProfile(name, photo);
                    }
                })
                .catch((error) => {
                    console.log(error.message);
                    setErrorMessage(error.message);
                });

            //   Empty form after successful
            form.reset();
        }


    }

    const handleEmailChange = (e) => {
        e.preventDefault();
        setEmail(e.target.value);
    }
    const handlePwdChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value);
    }

    return (
        <div className='py-3 row col-md-6 mx-auto'>
            <div style={{ backgroundColor: "#F3F3F3" }} className='p-5 mt-5 col-sm-12 mx-auto'>
                <h3 className='text-center pb-5'>Create An Account</h3>
                {
                    errorMessage &&
                    <div className='alert alert-danger' role='alert'>
                        {errorMessage}
                    </div>
                }
                <Form onSubmit={handleRegister}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" name="name" placeholder="Enter Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control onChange={handleEmailChange} type="email" name="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group onChange={handlePwdChange} className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhoto">
                        <Form.Label>Photo Url</Form.Label>
                        <Form.Control type="text" name="photo" placeholder="Your Photo URL" />
                    </Form.Group>
                    <Button variant="danger" type="submit" className='w-100' disabled={!(email && password)}>
                        Register
                    </Button>
                </Form>
                <p className='text-center mt-4'>Please Login to your account <Link to="/login" className='text-decoration-none' style={{ color: "#FF8C47" }}>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;