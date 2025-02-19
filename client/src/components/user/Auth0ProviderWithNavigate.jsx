import React from 'react';
import { Auth0Provider } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from 'react-router-dom'

const Auth0ProviderWithNavigate = (props) => {
    const navigate = useNavigate(); // Initialize useNavigate here

    const domain = import.meta.env.VITE_AUTH0_DOMAIN;
    const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;
    const redirectUri = import.meta.env.VITE_AUTH0_CALLBACK_URL;
    const audience=import.meta.env.VITE_AUTH0_AUDIENCE

    if (!domain || !clientId || !redirectUri || !audience) {
        throw new Error('Missing Auth0 configuration');
    }

    const onRedirectCallback = async () => {
        navigate('/auth-callback');
    };

    return (
        <Auth0Provider
            domain={domain}
            clientId={clientId}
            authorizationParams={{
                redirect_uri: redirectUri,
                audience
            }}
            onRedirectCallback={onRedirectCallback}
        >
            {props.children}
        </Auth0Provider>
    );
};

export default Auth0ProviderWithNavigate;
