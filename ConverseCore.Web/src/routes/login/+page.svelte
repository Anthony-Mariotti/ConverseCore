<script lang="ts">
    import { login, logout, isAuthenticated } from '$lib/stores/auth.store';

    const handleLogin = async () => {
        await login();
    };

    const HandeLogout = async () => {
        await logout();
    };
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

{#if $isAuthenticated}
    <button id="login" type="button" on:click={HandeLogout}> Logout </button>
{:else}
    <button id="login" type="button" on:click={handleLogin}> Login </button>
{/if}
