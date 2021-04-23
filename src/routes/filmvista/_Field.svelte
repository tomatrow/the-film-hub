<script>
    import { Field } from "../../lib/components"
</script>

<Field
    {...$$restProps}
    class="flex flex-col lg:flex-row"
    inputProps={{
        class: "border-light border lg:w-1/2"
    }}
>
    <span class="lg:w-1/2">
        <slot />
    </span>
</Field>
