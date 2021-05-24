<script>
    import { onMount } from "svelte"
    import { comments } from "../common/data"
    import Section from "./Section.svelte"
    import Button from "./Button.svelte"
    import Comment from "./Comment.svelte"
    import { ChevronLeftIcon, ChevronRightIcon } from "../icons"

    let Carousel
    onMount(
        async () =>
            (Carousel = (await import("svelte-carousel/src/components/Carousel/Carousel.svelte"))
                .default)
    )
</script>

<Section rootProps={{ class: "bg-light" }} class="space-y-4 pt-32 pb-20">
    <h2 class="text-center uppercase font-bold text-3xl">
        What Film Makers Are Saying About Vista
    </h2>
    {#if Carousel}
        <Carousel duration={600} let:showPrevPage let:showNextPage>
            <div
                slot="prev"
                class="m-auto flex items-center justify-center w-8 md:w-24 h-8 md:h-24"
                style="background-color: rgba(0,0,0, 0.02)"
            >
                <Button on:click={showPrevPage}><ChevronLeftIcon strokeWidth={0.5} /></Button>
            </div>
            {#each comments as comment}
                <div class="flex justify-center">
                    <Comment {...comment} />
                </div>
            {/each}
            <div
                slot="next"
                class="m-auto flex items-center justify-center w-8 md:w-24 h-8 md:h-24"
                style="background-color: rgba(0,0,0, 0.02)"
            >
                <Button on:click={showNextPage}><ChevronRightIcon strokeWidth={0.5} /></Button>
            </div>
        </Carousel>
    {/if}
</Section>
