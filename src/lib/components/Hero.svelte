<script lang="ts">
    import { backgrounds } from "$lib/common/data"
    import Section from "./Section.svelte"
    import type { AcfMedia } from "$lib/index.type"

    export let backgroundImage: AcfMedia
    export let title: string
    export let blurb: string
</script>

<Section
    --background="url({backgroundImage.src})"
    rootProps={{ class: "hero" }}
    class="space-y-4 md:space-y-0 md:space-x-8 flex items-center flex-col md:flex-row p-6"
>
    <div class="text-light space-y-2">
        <p class="uppercase font-bold text-5xl">
            {title}
        </p>
        <p class="text-3xl">
            {blurb}
        </p>
    </div>

    <slot />
</Section>

<style global>
    .hero {
        background-image: linear-gradient(
                to bottom,
                rgba(136, 167, 149, 0.75),
                rgba(136, 167, 149, 0.75)
            ),
            var(--background);
        background-size: cover, cover;
        background-repeat: no-repeat, no-repeat;
    }
</style>
