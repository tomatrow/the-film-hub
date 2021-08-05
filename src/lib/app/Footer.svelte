<script lang="ts">
    import type { AcfImage } from "$lib/index.type"
    import { filmHubLogo } from "$lib/common/data"
    import { Link } from "$lib/components"

    export let blurb: string
    export let logo: AcfImage
</script>

<footer class="bg-secondary text-light p-4 text-center uppercase">
    <nav
        class="max-w-screen-lg space-x-2 space-y-4 sm:space-y-0 sm:space-x-4 flex items-center flex-col sm:flex-row mx-auto"
    >
        <Link class="flex-shrink-0 sm:mr-auto" href="/"><img class="w-auto h-12" {...logo} /></Link>
        <span>{blurb}</span>
        <slot />
    </nav>
</footer>
