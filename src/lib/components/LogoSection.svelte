<script lang="ts">
    import Section from "./Section.svelte"
    import { logo } from "../common/data"
    import type { AcfMedia } from "$lib/index.type"

    let clazz = ""
    export { clazz as class }
    export let hideLogo = false
    export let backgroundImage: AcfMedia
    export let foregroundImage: AcfMedia

    export let rootProps: {
        class?: string
    } = {}
</script>

<Section full class="flex flex-col-reverse md:flex-row" {rootProps}>
    <div class="{clazz} flex-grow-0 flex-shrink-0 pt-32 px-4 pb-20 md:w-7/12" {...$$restProps}>
        <slot />
    </div>
    <div
        class="h-44 p-4 md:w-5/12 md:h-auto bg-center bg-cover"
        style={backgroundImage ? `background-image: url(${backgroundImage.src})` : ""}
    >
        <div
            style={!hideLogo && foregroundImage
                ? `background-image: url(${foregroundImage.src})`
                : ""}
            class="w-full h-full bg-center bg-contain bg-no-repeat"
        />
    </div>
</Section>
