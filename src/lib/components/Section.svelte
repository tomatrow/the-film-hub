<script lang="ts">
    import { objectFilter } from "../common/utility"

    let clazz = ""
    export { clazz as class }
    export let full = false
    export let rootProps: {
        class?: string
    } = {}
</script>

<section
    class:full
    class:px-4={!full}
    class:py-8={!full}
    class="{full ? clazz : ''} w-full {rootProps?.class ?? ''}"
    {...full ? $$restProps : {}}
    {...objectFilter(rootProps, key => key !== "class")}
>
    {#if full}
        <slot />
    {:else}
        <div class="{clazz} max-w-screen-xl mx-auto" {...$$restProps}>
            <slot />
        </div>
    {/if}
</section>
