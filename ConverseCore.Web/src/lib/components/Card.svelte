<script lang="ts">
    import { classbuilder } from '$lib/utils';

    export let divide: boolean = false;

    let classes: string;
    $: classes = classbuilder.applyClasses(
        divide ? 'divide-y divide-gray-500' : '',
        'overflow-hidden rounded-lg bg-gray-800 shadow'
    );
</script>

<div {...$$restProps} class={classes}>
    <slot />
</div>
