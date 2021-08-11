<script lang="ts">
    import LogoSection from "./LogoSection.svelte"
    import type { AcfMedia } from "$lib/index.type"

    export let title: string
    export let caveat: string
    export let image: AcfMedia
    export let discounts: (AcfMedia & { captionHtml: string })[]
</script>

<LogoSection foregroundImage={image}>
    <h2 class="text-primary uppercase font-bold text-3xl">
        {title}
    </h2>

    <div class="text-secondary flex flex-wrap p-8 uppercase">
        {#each discounts as { captionHtml, ...icon }}
            <div class="space-x-2 flex items-center p-8 w-full sm:w-1/2">
                <img class="flex-shrink-0 w-24 h-24" {...icon} />
                <h3 class="font-bold text-xl">{@html captionHtml}</h3>
            </div>
        {/each}
    </div>
    <p class="text-secondary normal-case">
        {caveat}
    </p>
</LogoSection>
