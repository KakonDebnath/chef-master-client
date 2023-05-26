import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({ children }) => {
    const { user, loading} = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='d-flex justify-content-center my-5'>
            <Spinner animation="border" variant="danger" />
        </div>
    }
    if (user) {
        return children;
    }else{
        return <Navigate to="/login" state={{ from: location }} replace={true}></Navigate>
    }
};

export default PrivateRoute;