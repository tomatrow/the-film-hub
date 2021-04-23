<script>
    import { filmHubLogo } from "../../lib/common/data"
    import { Link } from "../components"
</script>

<footer class="bg-secondary text-light p-4 text-center uppercase">
    <nav
        class="max-w-screen-lg space-x-2 space-y-4 sm:space-y-0 sm:space-x-4 flex items-center flex-col sm:flex-row mx-auto"
    >
        <Link class="sm:mr-auto" href="/"><img class="w-auto h-12" src={filmHubLogo.white} /></Link>
        <slot />
    </nav>
</footer>
