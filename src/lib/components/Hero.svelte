<script>
    import { backgrounds } from "../common/data"
    import Section from "./Section.svelte"
</script>

<Section
    rootProps={{
        style: `--background: url(${backgrounds.about})`,
        class: "hero"
    }}
    class="space-y-4 md:space-y-0 md:space-x-8 flex items-center flex-col md:flex-row p-6"
>
    <div class="text-light space-y-2">
        <p class="uppercase font-bold text-5xl">
            <slot name="title" />
        </p>
        <p class="text-3xl">
            <slot name="blurb" />
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
