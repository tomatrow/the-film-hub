<script lang="ts" context="module">
    import type { Load } from "@sveltejs/kit"

    export const load: Load = async input => {
        return {
            status: 200
        }
    }
</script>

<script lang="ts">
    import { session } from "$app/stores"

    console.log({ session: $session })
</script>

<div>Hello</div>
