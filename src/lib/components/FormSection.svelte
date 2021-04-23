<script>
    import Section from "./Section.svelte"
    import { logo } from "../common/data"
</script>

<Section
    rootProps={{ class: "bg-primary" }}
    class="space-y-4 md:space-y-0 flex flex-col md:flex-row p-6 text-white"
>
    <div class="space-y-2 flex flex-col justify-around">
        <div class="space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
            <div
                class="h-44 flex-shrink-0 w-full sm:w-5/12 sm:h-auto bg-center bg-contain bg-no-repeat"
                style="background-image: url({logo})"
            />
            <h2 class="py-12 pr-4 uppercase font-bold text-5xl md:text-4xl">
                <slot name="title" />
            </h2>
        </div>
        <p class="text-2xl">
            <slot name="blurb" />
        </p>
    </div>

    <slot />
</Section>
