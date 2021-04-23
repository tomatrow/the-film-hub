<script lang="ts">
    import Section from "./Section.svelte"
    import { logo } from "../common/data"
    export let bgImage: string
    export let hideLogo = false

    let clazz = ""
    export { clazz as class }

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
        style="background-image: url({bgImage})"
    >
        <div
            style={hideLogo ? "" : `background-image: url(${logo})`}
            class="w-full h-full bg-center bg-contain bg-no-repeat"
        />
    </div>
</Section>
