<script lang="ts" context="module">
    import { writable } from "svelte/store"
    import type { AcfLink, AcfImage } from "$lib/index.type"

    export const brandImage = writable<AcfImage | null>(null)
    export const navLinks = writable<AcfLink[]>([])
</script>

<script lang="ts">
    import { Link } from "$lib/components"

    export let expand: boolean

    let scrollY: number
    $: expand = scrollY < 1
</script>

<svelte:window bind:scrollY />

<header class="fixed top-0 right-0 left-0 z-20 px-4 bg-white">
    <nav
        class="max-w-screen-lg sm:space-x-4 transition-all duration-100 flex items-center flex-col sm:flex-row mx-auto"
        class:py-8={expand}
    >
        {#if $brandImage}
            <Link href="/" class="mr-auto w-full"
                ><img
                    {...$brandImage}
                    class="h-14 w-auto sm:p-4 pt-2 sm:h-20 object-contain"
                /></Link
            >
        {/if}
        <div class="space-x-2 flex items-center flex-shrink-0 ml-auto pb-2">
            {#each $navLinks as link}
                <Link {...link} />
            {/each}
        </div>
    </nav>
</header>
