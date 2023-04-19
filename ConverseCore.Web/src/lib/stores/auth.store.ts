import {
    PUBLIC_AUTH0_CLIENT_ID,
    PUBLIC_AUTH0_DOMAIN,
    PUBLIC_AUTH0_REDIRECT_URI
} from '$env/static/public';
import {
    createAuth0Client,
    type Auth0Client,
    type LogoutOptions,
    type RedirectLoginOptions,
    type User,
    type RedirectLoginResult
} from '@auth0/auth0-spa-js';
import { get, writable, type Writable } from 'svelte/store';

export const client: Writable<Auth0Client | undefined> = writable(undefined);
export const isAuthenticated: Writable<boolean> = writable(false);
export const isLoading: Writable<boolean> = writable(true);
export const user: Writable<User | undefined> = writable(undefined);
export const popupOpen: Writable<boolean> = writable(false);
export const error = writable();

export const initializeAuth0 = async () => {
    client.set(
        await createAuth0Client({
            domain: PUBLIC_AUTH0_DOMAIN,
            clientId: PUBLIC_AUTH0_CLIENT_ID,
            authorizationParams: {
                redirect_uri: PUBLIC_AUTH0_REDIRECT_URI
            }
        })
    );

    const onRedirectCallback = (state?: RedirectLoginResult) => {
        window.history.replaceState({}, document.title, window.location.pathname);

        if (state?.appState.previous_url) {
            window.location.replace(state.appState.previous_url);
        }

        console.log(state);
    };

    try {
        const search = window.location.search;

        if ((search.includes('code=') || search.includes('error=')) && search.includes('state=')) {
            const appState = await get(client)?.handleRedirectCallback();
            onRedirectCallback(appState);
        }
    } catch (err) {
        error.set(err);
    } finally {
        onRedirectCallback();
        isAuthenticated.set((await get(client)?.isAuthenticated()) ?? false);
        user.set(await get(client)?.getUser());
        isLoading.set(false);
    }
};

export const login = async (options?: RedirectLoginOptions): Promise<void> => {
    if (!options) {
        options = {
            appState: {
                previous_url: window.location.href
            }
        };
    }

    return await get(client)?.loginWithRedirect(options);
};

export const logout = async (options?: LogoutOptions): Promise<void> => {
    return get(client)?.logout(options);
};
