<script lang="ts">
    import AnnounceBannerDemo from '$lib/components/AnnounceBannerDemo.svelte';
    import HomeGridDemo from '$lib/components/HomeGridDemo.svelte';
</script>

<svelte:head>
    <title>Home</title>
    <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex flex-col gap-y-8">
    <AnnounceBannerDemo />
    <HomeGridDemo />
</div>
