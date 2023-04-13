import type { IWeatherForecast } from '$lib/weatherforecast.model';
import type { PageServerLoad } from './$types';

export const load = (async ({ fetch }) => {
    const reqId = crypto.randomUUID();

    const request = await fetch('/api/weatherforecast?count=10');
    const response = (await request.json()) as IWeatherForecast[];

    return {
        forecasts: response
    };
}) satisfies PageServerLoad;
