<script lang="ts">
    import _ from "lodash"
    import ContactForm7Field from "$lib/components/ContactForm7Field.svelte"

    export let fullForm: string

    function parse(fullForm: string) {
        let fields

        try {
            fields = JSON.parse(fullForm)
        } catch (error) {
            console.error(error)
            fields = []
        }

        const flattenedFields = fields.flatMap(field => {
            if (field.basetype !== "checkbox") return [field]

            const { basetype, labels, values, raw_values, ...rest } = field

            return [
                {
                    basetype: "header",
                    labels,
                    values,
                    raw_values,
                    ...rest
                },
                ...labels.map((_, index) => ({
                    basetype,
                    labels: [labels[index]],
                    values: [values[index]],
                    raw_vlaues: [raw_values[index]],
                    ...rest
                }))
            ]
        })

        return flattenedFields.map(
            ({ basetype, type, name, labels, options, values, raw_values }) => {
                const parsedOptions = Object.fromEntries(options.map(option => option.split(":")))
                const required = type.includes("*") || type === "radio"

                let rawLabel = parsedOptions?.label
                if (!rawLabel) {
                    if (basetype === "header") rawLabel = name
                    else rawLabel = labels[0] ? labels[0] : name
                }

                const result = {
                    type: basetype === "url" ? "text" : basetype,
                    name,
                    required,
                    label: _.startCase(rawLabel),
                    labels,
                    values,
                    options: parsedOptions
                }

                if (parsedOptions.accept && basetype === "file")
                    result.accept = parsedOptions.accept.split("|").join(",")
                if (parsedOptions.default !== undefined && basetype === "radio")
                    result.value = values[parsedOptions.default]

                return result
            }
        )
    }
</script>

{#each parse(fullForm) as field}
    {#if field.type === "header"}
        <div>{field.label}</div>
    {:else}
        <ContactForm7Field {...field} />
    {/if}
{/each}
