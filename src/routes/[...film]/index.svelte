<script lang="ts" context="module">
    import { graphql } from "$lib/scripts/apollo"
    import { loadPage } from "$lib/scripts/router"
    import { PageFragment } from "$lib/queries/pages"

    export const load = loadPage(
        "Film",
        graphql`
            query FilmPageQuery($id: ID!, $isPreview: Boolean!) {
                page(id: $id, asPreview: $isPreview) {
                    ...PageFragment
                    template {
                        ... on Template_Film {
                            filmPageFields {
                                test
                            }
                        }
                    }
                }
            }
            ${PageFragment}
        `
    )
</script>

<script lang="ts">
    import Gallery from "./_Gallery.svelte"
    import { Footer } from "$lib/app"
    import { links } from "$lib/common/stores"
    import { assets } from "$app/paths"
    import { defaults } from "$lib/components/Field.svelte"
    import { locations } from "$lib/common/data"
    import DiscountSection from "$lib/components/DiscountSection.svelte"
    import {
        Link,
        Section,
        LogoSection,
        VideoSection,
        FormSection,
        Hero,
        Form,
        Button,
        Field,
        TestimonialSection,
        Meta
    } from "../../lib/components"

    export let page: any

    $links = [
        { href: "/stages", title: "Stages & Set", rel: "external" },
        { href: "/vendvista", title: "Are you a vendor?" }
    ]
</script>

<Meta title={page.title} />

<Hero>
    <svelte:fragment slot="title"
        >Register to get your Film Friendly Badge for Discounts</svelte:fragment
    >
    <svelte:fragment slot="blurb"
        >Vista, Ca is the perfect, versatile, film-friendly backdrop for all film projects that need
        a viable and competitive alternative.</svelte:fragment
    >
    <Form formId="10311" class="w-full md:w-1/2">
        <Field
            required
            name="confimation_documentation"
            type="file"
            accept="image/*,.doc,.docx,.pdf"
        >
            Upload Image: Permit number document
        </Field>
        <Field {...defaults.text} required name="full_name">Name</Field>
        <Field {...defaults.text} required name="company">Company</Field>
        <Field {...defaults.text} required name="phone" type="tel">Phone</Field>
        <Field {...defaults.text} required name="email" type="email">Email</Field>
        <Field {...defaults.text} required name="project_name">Project Name</Field>
        <Field {...defaults.text} required name="filming_dates">Filming Dates</Field>

        <Button
            type="submit"
            class="mt-auto mx-auto text-black text-center uppercase font-bold text-3xl md:text-xl lg:text-3xl"
            slot="submit"
        >
            Register Your Permit Number Here
        </Button>
    </Form>
</Hero>

<VideoSection>
    <h2 class="text-primary uppercase font-bold text-3xl">
        Vista California - A Rare Find for Film makers <br /> Every Street is a Unique Movie Set
    </h2>
    <p>
        The historic district is a premier “Americana” Film Set; comprised of independent and family
        owned restaurants, pubs and shops. Its charm lies in the preservation of its historic
        buildings and its underlying artistic vibe.
    </p>
    <p>
        Through the years, Musicians, painters, sculptors and writers have all added to its unique
        look and feel. Every street is a unique movie set. As a cinematographer, you will feel like
        a kid in a candy shop in this one of a kind environment.
    </p>
    <p>
        The surrounding hillsides provide stunning locations such as French Farmhouse estates,
        castles, western sets and other unique and hard to find locations.
    </p>
    <p>
        Vista is a Climactic Wonderland and has been rated the best weather in the country; boasting
        340 exterior shooting days out of the year.
    </p>
</VideoSection>

<DiscountSection />

<TestimonialSection />

<Section class="space-y-4">
    <h2 class="text-primary text-center uppercase font-bold text-3xl">
        Popular Vista public locations
    </h2>
    <div class="grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6 grid">
        {#each locations as { title, image }}
            <div class="space-y-4 flex flex-col justify-start w-full h-full">
                <img class="h-44 object-cover" src={image} alt="" />
                <span class="text-secondary text-center uppercase">{title}</span>
            </div>
        {/each}
    </div>
</Section>

<Section class="flex py-4">
    <Gallery />
</Section>

<FormSection>
    <svelte:fragment slot="title">Register Your Permit number Now</svelte:fragment>
    <svelte:fragment slot="blurb"
        >Receive a complete directory of all “Film Friendly” vendors who offer exclusive discounts
        to film makers.
        <br />
        Film Permits for City locations are handled professionally by our quick and courteous Chirmere
        Harris at the city of Vista. She is your go to girl for any questions on permits, <Link
            plain
            href="https://www.cityofvista.com/business/special-event-permits">click here</Link
        > for permit info or call Chirmere at <Link href="tel:760-643-5206">760-643-5206</Link>.
    </svelte:fragment>
    <Form formId="10311" class="md:ml-4 md:w-1/2">
        <Field
            required
            name="confimation_documentation"
            type="file"
            accept="image/*,.doc,.docx,.pdf"
        >
            Upload Image: Permit number document
        </Field>
        <Field {...defaults.text} required name="full_name">Name</Field>
        <Field {...defaults.text} required name="company">Company</Field>
        <Field {...defaults.text} required name="phone" type="tel">Phone</Field>
        <Field {...defaults.text} required name="email" type="email">Email</Field>
        <Field {...defaults.text} required name="project_name">Project Name</Field>
        <Field {...defaults.text} required name="filming_dates">Filming Dates</Field>

        <Button
            type="submit"
            class="mt-auto mx-auto text-black text-center uppercase font-bold text-3xl md:text-xl lg:text-3xl"
            slot="submit"
        >
            Register Your Permit Number Here
        </Button>
    </Form>
</FormSection>

<Footer>
    <span>Interested in becoming a featured film friendly vendor?</span>
    <Link class="font-bold" href="/vendvista" plain>click here</Link>
</Footer>
