import {
    PUBLIC_AUTH0_DOMAIN,
    PUBLIC_AUTH0_CLIENT_ID,
    PUBLIC_AUTH0_REDIRECT_URI
} from '$env/static/public';

const config = {
    domain: PUBLIC_AUTH0_DOMAIN,
    clientId: PUBLIC_AUTH0_CLIENT_ID,
    redirectUri: PUBLIC_AUTH0_REDIRECT_URI
};

export default config;
