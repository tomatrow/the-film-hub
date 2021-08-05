<script lang="ts" context="module">
    export interface ButtonClassOptions {
        primary?: boolean
        secondary?: boolean
        light?: boolean
        blob?: boolean
        plain?: boolean
    }

    export function makeClasses({
        primary = false,
        secondary = false,
        light = false,
        blob = false,
        plain = false
    }: ButtonClassOptions = {}) {
        return [
            primary &&
                ((blob && "bg-primary border border-primary hover:text-primary") ||
                    "text-primary hover:opacity-80"),
            secondary &&
                ((blob && "bg-secondary border border-secondary hover:text-secondary") ||
                    "text-secondary hover:opacity-80"),
            light &&
                ((blob && "bg-white border border-light hover:text-light") ||
                    "text-light hover:opacity-80"),
            blob && "px-5 font-semibold py-2 text-white ",
            (blob && (primary || secondary) && "hover:bg-light") ||
                (light && "text-primary bg-white hover:bg-primary"),
            plain && "underline",
            "cursor-pointer transition duration-200"
        ]
            .filter(Boolean)
            .join(" ")
    }
</script>

<script lang="ts">
    export let type: "button" | "submit" | "reset" = "button"

    export let primary = false
    export let secondary = false
    export let light = false
    export let blob = false
    export let plain = false
    let clazz = ""
    export { clazz as class }

    export let title: string = undefined

    $: classes = makeClasses({ primary, secondary, light, blob, plain })
</script>

<button class="{clazz} {classes}" {type} on:click {...$$restProps}>
    {#if title}
        {title}
    {:else}
        <slot />
    {/if}
</button>
