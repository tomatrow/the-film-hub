<script lang="ts">
    import Button from "$lib/components/Button.svelte"
    import Field, { defaults } from "$lib/components/Field.svelte"

    export let type: string = "text"
    export let name: string
    export let required = false
    export let label: string
    export let labels: string[] = []
    export let values: string[] = []
    export let accept: string = undefined
    export let value: any
</script>

{#if ["text", "tel", "email"].includes(type)}
    <Field {type} {...defaults.text} {name} required>{label}</Field>
{:else if type === "file"}
    <Field {type} {name} {accept} required>{label}</Field>
{:else if type === "checkbox"}
    <Field
        {type}
        class="mr-2"
        {name}
        rootProps={{ class: "flex flex-row-reverse justify-end items-center" }}>{label}</Field
    >
{:else if type === "radio"}
    <div>
        <h4>{label}</h4>
        <div class="flex flex-col">
            {#each values as value, index}
                <Field {...defaults.toggle} type="radio" bind:group={value} {name} {value}
                    >{labels[index]}</Field
                >
            {/each}
        </div>
    </div>
{:else if type === "textarea"}
    <Field {type} {name} {required} {...defaults.text}>{label}</Field>
{:else if type === "submit"}
    <hr class="h-px bg-black" />
    <div class="flex justify-center mx-auto pt-6 w-full" style="margin-top:auto">
        <Button
            {type}
            class="mx-auto text-white text-center uppercase font-bold text-3xl"
            blob
            secondary
        >
            {label}
        </Button>
    </div>
{/if}
