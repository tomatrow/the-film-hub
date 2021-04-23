<script>
    import Section from "./Section.svelte"
    import { hero } from "../common/data"
</script>

<Section full class="grid grid-cols-1 md:grid-cols-2">
    <div class="h-full bg-black">
        <video autoplay loop class="h-full object-cover object-center" muted playsinline>
            <source src={hero} />
        </video>
    </div>

    <div class="space-y-2 text-secondary m-auto pt-32 px-4 pb-20 max-w-xl">
        <slot />
    </div>
</Section>
