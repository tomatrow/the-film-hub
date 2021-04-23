<script lang="ts">
    import Button from "./Button.svelte"
    import { ArrowLeftCircleIcon, ArrowRightCircleIcon } from "../icons"
    import { noop } from "svelte/internal"

    export let gallery: string[]
    export let select: (index: number) => void = noop
    export let arrowClass = ""
    export let index: number = 0
    export let showSingular = false

    let clazz = ""
    export { clazz as class }
    let innerWidth: number

    let span: number
    $: span = getSpan(innerWidth)

    function indexes(index: number, span: number) {
        const seq = new Array(span).fill(0).map((_, i) => i + 1)
        return [
            ...seq.map(i => (index - i + gallery.length) % gallery.length),
            index,
            ...seq.map(i => (index + i) % gallery.length)
        ]
    }

    function getSpan(innerWidth: number) {
        if (innerWidth < 550) return 0
        else if (innerWidth < 1000) return 1
        else return 2
    }

    $: getSpan(innerWidth), console.log(innerWidth)
</script>

<svelte:window bind:innerWidth />

<Carousel items={gallery} loop bind:currentIndex={index} let:controls>
    <div class="{clazz} space-x-2 flex items-center justify-between" {...$$restProps}>
        <Button class="flex items-center justify-center" on:click={controls.previous}
            ><ArrowLeftCircleIcon class="{arrowClass} w-12 h-12" /></Button
        >
        {#if indexes(index, span).length > 1 || showSingular}
            {#each indexes(index, span) as i (i)}
                <img
                    on:click={() => select(i)}
                    src={gallery[i]}
                    class="overflow-hidden w-full h-full cursor-pointer object-cover"
                    alt="gallery image"
                />
            {/each}
        {/if}
        <Button class="flex items-center justify-center" on:click={controls.next}
            ><ArrowRightCircleIcon class="{arrowClass} w-12 h-12" /></Button
        >
    </div>
</Carousel>
