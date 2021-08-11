<script lang="ts">
    import Section from "./Section.svelte"
    import { hero } from "$lib/common/data"
    import type { AcfMedia } from "$lib/index.type"

    export let video: AcfMedia
    export let contentHtml: string
</script>

<Section full class="grid grid-cols-1 md:grid-cols-2">
    <div class="h-full bg-black">
        <video autoplay loop class="h-full object-cover object-center" muted playsinline>
            <source {...video} />
        </video>
    </div>
    <div class="injected-content text-secondary m-auto pt-32 px-4 pb-20 max-w-xl">
        {@html contentHtml}
    </div>
</Section>
