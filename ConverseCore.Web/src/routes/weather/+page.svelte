<script lang="ts">
    import type { PageData } from './$types';

    export let data: PageData;

    const { forecasts } = data;

    let errored = false;
    let error: App.Error;
    if (!Array.isArray(forecasts)) {
        errored = true;
        error = forecasts as unknown as App.Error;
    }
</script>

<svelte:head>
    <title>Weather Forecast</title>
    <meta name="description" content="Testing weather forecast data" />
</svelte:head>

<h1>Weather Forecast</h1>

{#if errored}
    <p>ErrorId: {error.errorId}</p>
    <p>Message: {error.message}</p>
{/if}

<table>
    <thead>
        <tr>
            <th>Date</th>
            <th>Celsius</th>
            <th>Fahrenheit</th>
            <th>Summary</th>
        </tr>
    </thead>
    <tbody>
        {#if !errored}
            {#each forecasts as item, i}
                <tr id="forecast-{i}">
                    <td>{item.date}</td>
                    <td>{item.temperature.celsius}</td>
                    <td>{item.temperature.fahrenheit}</td>
                    <td>{item.summary}</td>
                </tr>
            {/each}
        {/if}
    </tbody>
</table>
