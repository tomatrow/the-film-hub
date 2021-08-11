<script context="module">
</script>

<script lang="ts">
    import { createForm } from "felte"
    import reporter from "@felte/reporter-tippy"

    export let formId: number
    export let origin: string

    let successMessage: string
    const { form } = createForm<Record<string, string>>({
        extend: [reporter()],
        // @ts-ignore
        onError: error => error,
        async onSubmit(values) {
            const formData = new FormData()
            for (const key of Object.keys(values)) formData.append(key, values[key])

            const result = await fetch(
                `${origin}/wp-json/contact-form-7/v1/contact-forms/${formId}/feedback`,
                {
                    method: "post",
                    body: formData
                }
            )

            const json = await result.json()
            console.log("json response", json)

            if (json.invalid_fields?.length > 0) {
                const { into, message } = json.invalid_fields[0]
                const name = into.split(".").slice(-1)[0]
                throw {
                    [name]: message
                }
            }

            successMessage = json.message
        }
    })
</script>

<form use:form {...$$restProps}>
    {#if successMessage}
        <slot name="success" message={successMessage} />
    {:else}
        <slot />
    {/if}
</form>
