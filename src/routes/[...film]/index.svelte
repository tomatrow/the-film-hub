<script lang="ts" context="module">
    import { graphql } from "$lib/scripts/apollo"
    import { loadPage } from "$lib/scripts/router"
    import {
        PageFragment,
        LandingPageFieldsPsuedoFragment,
        DiscountSectionPsuedoFragment,
        FormFragment,
        CaptionFragment,
        TestimonialFragment
    } from "$lib/queries/pages"
    import {
        MenuItemFragment,
        LandingPageMenuFragment,
        LandingPageFooterMenuFragment
    } from "$lib/queries/menus"
    import { MediaItemFragment } from "$lib/queries/utility"

    export const load = loadPage(
        "Film",
        graphql`
            query FilmPageQuery($id: ID!, $isPreview: Boolean!) {
                page(id: $id, asPreview: $isPreview) {
                    ...PageFragment
                    template {
                        ... on Template_Film {
                            landingPageFields {
                                ${LandingPageFieldsPsuedoFragment}
                            }
                            filmPageFields {
                                testimonials {
                                    ...TestimonialFragment
                                }
                                discountSection {
                                    ${DiscountSectionPsuedoFragment}
                                }
                                locations {
                                    ...MediaItemFragment
                                    ...CaptionFragment
                                }
                                gallery {
                                    ...MediaItemFragment
                                }
                                contactSection {
                                    title 
                                    contentHtml
                                    logo {
                                        ...MediaItemFragment
                                    }
                                    form {
                                        ...FormFragment
                                    }
                                }
                            }
                        }
                    }
                }
                primary: menu(idType: NAME, id: "Primary Film") {
                    ...LandingPageMenuFragment
                }
                secondary: menu(idType: NAME, id: "Secondary Film") {
                    ...LandingPageMenuFragment
                    ...LandingPageFooterMenuFragment
                }
            }
            ${PageFragment}
            ${MenuItemFragment}
            ${LandingPageMenuFragment}
            ${MediaItemFragment}
            ${LandingPageFooterMenuFragment}
            ${FormFragment}
            ${TestimonialFragment}
            ${CaptionFragment}
        `
    )
</script>

<script lang="ts">
    import Gallery from "./_Gallery.svelte"
    import { Footer } from "$lib/app"
    import { assets } from "$app/paths"
    import { defaults } from "$lib/components/Field.svelte"
    import { interpretPrimaryMenu, createMenuLinkProps } from "../_utility"
    import { smoothEdges } from "$lib/scripts/utility"
    import { brandImage, navLinks } from "$lib/app/Nav.svelte"
    import {
        Link,
        Section,
        LogoSection,
        VideoSection,
        DiscountSection,
        FormSection,
        Hero,
        Form,
        Button,
        Field,
        TestimonialSection,
        Meta,
        Fields
    } from "$lib/components"

    export let page: any
    export let primary: any
    export let secondary: any

    $brandImage = primary.landingPageMenuFields.logo
    $navLinks = interpretPrimaryMenu(primary.menuItems)
</script>

<Meta title={page.title} />

<Hero {...page.template.landingPageFields.heroSection}>
    <Form formId={page.template.filmPageFields.contactSection.form.formId} class="w-full md:w-1/2">
        <h2 class="text-4xl">{page.template.filmPageFields.contactSection.form.title}</h2>
        <Fields fullForm={page.template.filmPageFields.contactSection.form.fullForm} />
    </Form>
</Hero>

<VideoSection {...page.template.landingPageFields.videoSection} />

<DiscountSection {...page.template.filmPageFields.discountSection} />

<TestimonialSection
    testimonials={page.template.filmPageFields.testimonials.map(
        ({ testimonialFields }) => testimonialFields
    )}
/>

<Section class="space-y-4">
    <h2 class="text-primary text-center uppercase font-bold text-3xl">
        Popular Vista public locations
    </h2>
    <div class="grid-cols-1 sm:grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-6 grid">
        {#each page.template.filmPageFields.locations as { captionHtml, ...image }}
            <div class="space-y-4 flex flex-col justify-start w-full h-full">
                <img class="h-44 object-cover" {...image} />
                {#if captionHtml}
                    <span class="text-secondary text-center uppercase">{@html captionHtml}</span>
                {/if}
            </div>
        {/each}
    </div>
</Section>

<Section class="flex py-4">
    <Gallery items={page.template.filmPageFields.gallery} />
</Section>

<Section
    rootProps={{ class: "bg-primary" }}
    class="space-y-4 md:space-y-0 flex flex-col md:flex-row p-6 text-white"
>
    <div class="space-y-2 flex flex-col justify-around">
        <div class="space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
            <div
                class="h-44 flex-shrink-0 w-full sm:w-5/12 sm:h-auto bg-center bg-contain bg-no-repeat"
                style="background-image: url({page.template.filmPageFields.contactSection.logo
                    .src})"
            />
            <h2 class="py-12 pr-4 uppercase font-bold text-5xl md:text-4xl">
                {page.template.filmPageFields.contactSection.title}
            </h2>
        </div>
        <div class="injected-content text-white">
            {@html page.template.filmPageFields.contactSection.contentHtml}
        </div>
    </div>
    <Form formId={page.template.filmPageFields.contactSection.form.formId} class="md:ml-4 md:w-1/2">
        <h2 class="text-4xl">{page.template.filmPageFields.contactSection.form.title}</h2>
        <Fields fullForm={page.template.filmPageFields.contactSection.form.fullForm} />
    </Form>
</Section>

<Footer
    blurb={secondary.landingPageFooterMenuFields.blurb}
    logo={secondary.landingPageMenuFields.logo}
>
    {#each smoothEdges(secondary.menuItems).map(createMenuLinkProps) as { ...props }}
        <Link plain {...props} />
    {/each}
</Footer>
