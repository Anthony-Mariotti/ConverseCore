import type { HandleClientError } from '@sveltejs/kit';

export const handleError = (({ error, event }) => {
    const errorId = crypto.randomUUID();

    return {
        errorId,
        message: 'Client Whoops! An error has occurred!'
    };
}) satisfies HandleClientError;
