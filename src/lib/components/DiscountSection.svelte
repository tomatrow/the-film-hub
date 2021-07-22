<script>
    import { Hotel, Camera, Dining, People, Sun, Tree } from "../../lib/discount-icons"
    import LogoSection from "./LogoSection.svelte"
    const logos = [
        { title: "Dining", icon: Dining },
        { title: "Lodging", icon: Hotel },
        { title: "Filming Locations", icon: Tree },
        { title: "Cast & Crew", icon: People },
        { title: "Equipment", icon: Camera },
        { title: "And More", icon: Sun }
    ]
</script>

<LogoSection>
    <h2 class="text-primary uppercase font-bold text-3xl">
        Discounts Exclusively for Film Makers*
    </h2>

    <div class="text-secondary flex flex-wrap p-8 uppercase">
        {#each logos as { title, icon }}
            <div class="space-x-2 flex items-center p-8 w-full sm:w-1/2">
                <svelte:component this={icon} class="flex-shrink-0 w-24 h-24 text-black" />
                <h3 class="font-bold text-xl">{title}</h3>
            </div>
        {/each}
    </div>
    <p class="text-secondary normal-case">
        *Must have a valid film permit or a stage booked at the Film Hub.
    </p>
</LogoSection>
