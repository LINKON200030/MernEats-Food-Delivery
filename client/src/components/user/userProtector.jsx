import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { Outlet, useNavigate } from 'react-router-dom';

const UserProtector = () => {
    const { isAuthenticated } = useAuth0();

    const navigate = useNavigate();

    if (!isAuthenticated) {
        // Perform navigation to the home page if the user is not authenticated
        navigate('/');
        return null; // Return null to avoid rendering anything in this case
    }

    return <Outlet />;
};

export default UserProtector;
