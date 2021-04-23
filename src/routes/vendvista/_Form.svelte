<script>
    import { Button, Form } from "../../lib/components"
    import Field from "../filmvista/_Field.svelte"
</script>

<Form formId="10363">
    <svelte:fragment>
        <Field required name="full_name">*Name</Field>
        <Field name="business_name">Business Name</Field>
        <Field name="business_type">Business Type</Field>
        <Field required name="email" type="email">*Email</Field>
        <Field required name="phone" type="tel">*Phone</Field>
        <Field name="address">Address</Field>
    </svelte:fragment>
    <div class="flex justify-center mt-auto mx-auto pt-6" slot="submit">
        <Button
            type="submit"
            class="mx-auto text-black text-center uppercase font-bold text-3xl"
            blob
            secondary
        >
            Learn More
        </Button>
    </div>
</Form>
