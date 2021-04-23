<script lang="ts">
    import type { ButtonClassOptions } from "./Button.svelte"
    import { makeClasses } from "./Button.svelte"

    export let primary = false
    export let secondary = false
    export let light = false
    export let blob = false
    export let plain = false
    let clazz = ""
    export { clazz as class }

    export let href: string

    function makeClassesPrime(options: ButtonClassOptions) {
        return makeClasses(options)
    }

    $: classes = makeClassesPrime({ primary, secondary, light, blob, plain })
</script>

<a class="{classes} {clazz}" {href} on:click {...$$restProps}><slot /></a>
