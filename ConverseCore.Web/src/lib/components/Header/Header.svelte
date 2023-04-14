<script lang="ts">
    import { page } from '$app/stores';
    import logo from '$lib/images/svelte-logo.svg';
    import github from '$lib/images/github.svg';
    import Navbar from './Navbar.svelte';
    import Breadcrumb from '../Breadcrumb/Breadcrumb.svelte';
</script>

<header>
    <div class="image-header hidden sm:block">
        <div
            class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 py-2 sm:py-4 lg:py-8 flex items-center space-x-4"
        >
            <img
                class="hidden h-8 w-auto sm:block"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                alt="Your Company"
            />
            <h1 class="font-bold text-3xl">TraxMC Network</h1>
        </div>
    </div>
    <Navbar />
    <Breadcrumb />
</header>

<style>
    header > div.image-header {
        background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
            url('$lib/images/1200x300.svg');
        background-position: center;
    }
</style>
