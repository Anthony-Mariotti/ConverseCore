<script lang="ts">
    export let href: string | undefined = undefined;
    export let type: 'button' | 'submit' | 'reset' = 'button';
    export let label: string | undefined = undefined;
    export let size: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

    const sizes = {
        xs: '',
        sm: '',
        md: '',
        lg: '',
        xl: ''
    };

    let fullClassList: string;
    $: fullClassList = sizes[size];
</script>

<svelte:element
    this={href ? 'a' : 'button'}
    type={href ? undefined : type}
    {href}
    {...$$restProps}
    class={fullClassList}
>
    <slot>
        <span>{label}</span>
    </slot>
</svelte:element>
