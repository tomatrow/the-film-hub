<script lang="ts">
    import { gallery as luminous } from "$lib/luminous-svelte"
    import "luminous-lightbox/dist/luminous-basic.css"
    import { Button } from "../../lib/components"
    import { gallery } from "../../lib/common/data"
    import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "../../lib/icons"

    let indicies = gallery.map((_, i) => i)
    function previous() {
        const [first, ...rest] = indicies
        indicies = [...rest, first]
    }
    function next() {
        const [last, ...rest] = indicies.reverse()
        indicies = [...rest, last].reverse()
    }
</script>

<Button class="flex items-center justify-center" on:click={previous}
    ><ArrowLeftCircleIcon class="w-12 h-12" /></Button
>
<div class="gallery grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-2" use:luminous>
    {#each indicies.map(i => gallery[i]) as href (href)}
        <a {href}>
            <img src={href} class="h-36 w-full object-cover" alt="" />
        </a>
    {/each}
</div>
<Button class="flex items-center justify-center" on:click={next}
    ><ArrowRightCircleIcon class="w-12 h-12" /></Button
>

<style lang="postcss">
    .gallery > a {
        display: none;
        &:nth-child(-n + 1) {
            @apply block;
        }

        @screen sm {
            &:nth-child(-n + 3) {
                @apply block;
            }
        }
        @screen md {
            &:nth-child(-n + 5) {
                @apply block;
            }
        }
    }
</style>
