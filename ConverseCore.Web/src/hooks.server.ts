import { redirect } from '@sveltejs/kit';
import type { HandleFetch, HandleServerError, Handle } from '@sveltejs/kit';

export const handle = (async ({ event, resolve }) => {
    console.log(JSON.stringify(event.url));

    // if (!event.locals.user) {
    //     console.log('No User');
    //     if (event.url.pathname.startsWith('/weather')) {
    //         console.log('Access Denied');
    //         //throw redirect(302, '/login');
    //     }
    // }

    return await resolve(event);
}) satisfies Handle;

export const handleFetch = (({ event, request, fetch }) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

    return fetch(request);
}) satisfies HandleFetch;

export const handleError = (({ error, event }) => {
    const errorId = crypto.randomUUID();

    return {
        errorId,
        message: `Server Whoops! An error has occurred! ${JSON.stringify(error)}`
    };
}) satisfies HandleServerError;
