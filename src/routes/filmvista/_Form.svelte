<script>
    import { Button, Form } from "../../lib/components"
    import Field from "./_Field.svelte"
</script>

<Form formId="10364">
    <svelte:fragment>
        <Field required name="full_name">*Name</Field>
        <Field required name="email" type="email">*Email</Field>
        <Field required name="phone" type="tel">*Phone</Field>
    </svelte:fragment>
    <Button
        type="submit"
        class="mt-auto mx-auto text-black text-center uppercase font-bold text-3xl md:text-xl lg:text-3xl"
        slot="submit"
    >
        Register Your Permit Reservations Here
    </Button>
</Form>
