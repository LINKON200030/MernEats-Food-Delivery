import React, {useEffect,useRef} from 'react';
import {useAuth0} from '@auth0/auth0-react';
import { useUserStore } from '../../../store/UserStore.js';
import {useNavigate} from "react-router-dom";

const AuthCallback = () => {
    const { CreateUserRequest } = useUserStore();
    const {user,getAccessTokenSilently} = useAuth0();
    const navigate = useNavigate();

    const hasUserCreated = useRef(false);

    useEffect(() => {


        (async () => {
            const accessToken = await getAccessTokenSilently();
            if (user && user.sub && user.email && !hasUserCreated.current) {
                await CreateUserRequest({
                    Auth0Id: user.sub,
                    email: user.email,
                },accessToken);
                navigate('/');
                hasUserCreated.current = true;
            }
        })()
    }, [user, CreateUserRequest, navigate, hasUserCreated]);

    return (


        <div>
            Loading...
        </div>
    );
};

export default AuthCallback;
