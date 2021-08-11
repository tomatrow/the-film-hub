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
        "Vend",
        graphql`
            query VendPageQuery($id: ID!, $isPreview: Boolean!) {
                page(id: $id, asPreview: $isPreview) {
                    ...PageFragment
                    template {
                        ... on Template_Vend {
                            landingPageFields {
                                ${LandingPageFieldsPsuedoFragment}
                            }
                            vendPageFields {
                                aboutSection {
                                    title
                                    contentHtml
                                    logo {
                                        ...MediaItemFragment
                                    }
                                }
                                ctaSection {
                                    contentHtml
                                    image {
                                        ...MediaItemFragment
                                    }
                                }
                                testimonials {
                                    ...TestimonialFragment
                                }
                                discountSection {
                                    ${DiscountSectionPsuedoFragment}
                                }
                                formSection {
                                    title
                                    blurb
                                    logo {
                                        ...MediaItemFragment
                                    }
                                    forms {
                                        ...FormFragment
                                    }
                                }
                            }
                        }
                    }
                }
                primary: menu(idType: NAME, id: "Primary Vend") {
                    ...LandingPageMenuFragment
                }
                secondary: menu(idType: NAME, id: "Secondary Vend") {
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
    import { assets } from "$app/paths"
    import { Footer } from "$lib/app"
    import { brandImage, navLinks } from "$lib/app/Nav.svelte"
    import { defaults } from "$lib/components/Field.svelte"
    import {
        Button,
        DiscountSection,
        Form,
        Hero,
        Link,
        Field,
        Fields,
        Section,
        LogoSection,
        VideoSection,
        TestimonialSection,
        Meta
    } from "$lib/components"
    import { session } from "$app/stores"
    import { interpretPrimaryMenu, createMenuLinkProps } from "../_utility"
    import { smoothEdges } from "$lib/scripts/utility"

    export let page: any
    export let primary: any
    export let secondary: any

    let discounts = {}

    $brandImage = primary.landingPageMenuFields.logo
    $navLinks = interpretPrimaryMenu(primary.menuItems)

    console.log({ page })
</script>

<Meta title={page.title} />

<Hero {...page.template.landingPageFields.heroSection} />

<VideoSection {...page.template.landingPageFields.videoSection} />

<LogoSection
    class="flex flex-col justify-center"
    foregroundImage={page.template.vendPageFields.aboutSection.logo}
>
    <div class="contents injected-content injected-content__large-base">
        {@html page.template.vendPageFields.aboutSection.contentHtml}
    </div>
</LogoSection>

<TestimonialSection
    testimonials={page.template.vendPageFields.testimonials.map(
        ({ testimonialFields }) => testimonialFields
    )}
/>

<LogoSection
    rootProps={{ class: "md:flex-row-reverse" }}
    class="space-y-4 flex items-start flex-col justify-center"
    foregroundImage={page.template.vendPageFields.ctaSection.image}
>
    <div class="contents injected-content injected-content__large-base">
        {@html page.template.vendPageFields.ctaSection.contentHtml}
    </div>
</LogoSection>

<DiscountSection {...page.template.vendPageFields.discountSection} />

<Section
    rootProps={{ class: "bg-primary" }}
    class="space-y-4 md:space-y-0 flex flex-col md:flex-row p-6 text-white"
>
    <div class="space-y-2 flex flex-col justify-around">
        <div class="space-y-2 sm:space-y-0 sm:space-x-2 flex flex-col sm:flex-row">
            <div
                class="h-44 flex-shrink-0 w-full sm:w-5/12 sm:h-auto bg-center sm:bg-right bg-contain bg-no-repeat"
                style="background-image: url({page.template.vendPageFields.formSection.logo.src})"
            />
            <h2 class="py-12 pr-4 uppercase font-bold text-5xl md:text-4xl">
                {page.template.vendPageFields.formSection.title}
            </h2>
        </div>
        <p class="text-2xl">
            {page.template.vendPageFields.formSection.blurb}
        </p>
    </div>
</Section>

<Section class="grid gap-4 grid-cols-1 lg:grid-cols-3">
    {#each page.template.vendPageFields.formSection.forms as { formId, title, fullForm }}
        <Form {formId}>
            <h2 class="text-4xl">{title}</h2>
            <Fields {fullForm} />
        </Form>
    {/each}
</Section>

<Footer
    blurb={secondary.landingPageFooterMenuFields.blurb}
    logo={secondary.landingPageMenuFields.logo}
>
    {#each smoothEdges(secondary.menuItems).map(createMenuLinkProps) as { fancy, ...props }}
        <Link
            {...fancy ? { class: "font-bold", blob: true, primary: true } : { plain: true }}
            {...props}
        />
    {/each}
</Footer>
