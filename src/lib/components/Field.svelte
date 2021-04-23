<script lang="ts">
    import { autoResizeTextArea } from "../common/actions"
    export let required = false
    export let name: string = undefined
    export let type: string = undefined
    export let checked = undefined
    export let inputProps = {}
</script>

<!-- svelte-ignore a11y-label-has-associated-control -->
<label {...$$restProps}>
    <slot />
    {#if type === "textarea"}
        <textarea use:autoResizeTextArea {required} {name} {...inputProps} />
    {:else if type === "checkbox"}
        <input bind:checked {required} {name} type="checkbox" {...inputProps} />
    {:else}
        <input {required} {name} {type} {...inputProps} />
    {/if}
</label>
