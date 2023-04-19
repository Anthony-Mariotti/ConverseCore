<script lang="ts">
    import { initializeAuth0 } from '$lib/stores/auth.store';
    import { onMount } from 'svelte';
    import Header from '../lib/components/Header/Header.svelte';
    import '../app.css';
    import Footer from '$lib/components/Footer/Footer.svelte';

    onMount(async () => {
        await initializeAuth0();
    });
</script>

<div class="app bg-gray-900 grid grid-rows-[auto_1fr_auto] grid-cols-[100%] min-h-screen">
    <Header />

    <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 w-full">
        <slot />
    </main>

    <Footer />
</div>
