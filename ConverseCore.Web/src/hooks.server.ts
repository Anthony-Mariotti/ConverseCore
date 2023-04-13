import type { HandleFetch, HandleServerError } from '@sveltejs/kit';

export const handleFetch = (({ event, request, fetch }) => {
    process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';

    console.log(`[Server Hook]: fetch ${request.url}`);

    return fetch(request);
}) satisfies HandleFetch;

export const handleError = (({ error, event }) => {
    const errorId = crypto.randomUUID();

    return {
        errorId,
        message: `Server Whoops! An error has occurred! ${JSON.stringify(error)}`
    };
}) satisfies HandleServerError;
