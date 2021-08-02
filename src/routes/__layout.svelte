<script lang="ts">
    import "svelte-carousel/dist/index.css"
    import "tippy.js/dist/tippy.css"
    import "../app.postcss"
    import { Nav } from "$lib/app"
    import { session } from "$app/stores"

    let expand: boolean

    console.log({ session: $session })
</script>

<Nav bind:expand />

<main class="transtion-transform transform duration-500" class:translate-y-36={expand}>
    <slot />
</main>

<style global lang="postcss">
    .lum-lightbox {
        &.lum-open {
            @apply z-50;
        }
        .lum-img {
            @apply mx-auto max-w-full max-h-full;
        }
    }
</style>
