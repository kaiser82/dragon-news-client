import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import Spinner from 'react-bootstrap/Spinner';



/*
Private Route do the following--
1. only allow authenticated user to visit the route
2. create loading stare and use it
3. Navigate to specific route

*/

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {

        return <Spinner animation="border" role="status"></Spinner>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
    return children

};

export default PrivateRoute;