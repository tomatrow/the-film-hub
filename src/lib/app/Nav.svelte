<script lang="ts">
    import { filmHubLogo } from "../common/data"
    import { links } from "../common/stores"
    import { Link } from "../components"

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
        <Link href="/" rel="external" class="mr-auto w-full"
            ><img
                class="h-14 w-auto sm:p-4 pt-2 sm:h-20 object-contain"
                src={filmHubLogo.color}
                alt="Film Hub Logo"
            /></Link
        >
        <div class="space-x-2 flex items-center flex-shrink-0 ml-auto pb-2">
            {#each $links as { title, href, rel }}
                <Link class="text-center uppercase font-bold text-xs" {rel} {href}>{title}</Link>
            {/each}

            <Link
                rel="external"
                primary
                blob
                class="text-center uppercase text-xs"
                href="/book-a-tour/">Book A Tour</Link
            >
        </div>
    </nav>
</header>
