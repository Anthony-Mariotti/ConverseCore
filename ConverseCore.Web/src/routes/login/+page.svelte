<script lang="ts">
    import { login, logout, isAuthenticated } from '$lib/stores/auth.store';

    const HandleLogin = async () => {
        await login();
    };

    const HandleLogout = async () => {
        await logout();
    };
</script>

<svelte:head>
    <title>Login</title>
</svelte:head>

{#if $isAuthenticated}
    <button
        type="button"
        class="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        on:click={HandleLogout}
    >
        <svg class="-ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path
                fill-rule="evenodd"
                d="M7.5 3.75A1.5 1.5 0 006 5.25v13.5a1.5 1.5 0 001.5 1.5h6a1.5 1.5 0 001.5-1.5V15a.75.75 0 011.5 0v3.75a3 3 0 01-3 3h-6a3 3 0 01-3-3V5.25a3 3 0 013-3h6a3 3 0 013 3V9A.75.75 0 0115 9V5.25a1.5 1.5 0 00-1.5-1.5h-6zm5.03 4.72a.75.75 0 010 1.06l-1.72 1.72h10.94a.75.75 0 010 1.5H10.81l1.72 1.72a.75.75 0 11-1.06 1.06l-3-3a.75.75 0 010-1.06l3-3a.75.75 0 011.06 0z"
                clip-rule="evenodd"
            />
        </svg>
        Logout
    </button>
{:else}
    <button
        type="button"
        class="relative inline-flex items-center gap-x-1.5 rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        on:click={HandleLogin}
    >
        <svg class="-ml-0.5 h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
            <path
                fill-rule="evenodd"
                d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                clip-rule="evenodd"
            />
        </svg>
        Login
    </button>
{/if}
