import { graphql } from "$lib/scripts/apollo"

export const PageFragment = graphql`
    fragment PageFragment on Page {
        id
        slug
        title
        #seo {
        #    title
        #    fullHead
        #}
    }
`

export const LandingPageFieldsPsuedoFragment = `
    heroSection {
        title
        blurb
        backgroundImage {
            ...MediaItemFragment
        }
    }
    videoSection {
        contentHtml
        video {
            ...MediaItemFragment
        }
    }
`

export const CaptionFragment = `
    fragment CaptionFragment on MediaItem {
        captionHtml: caption
    }
`

export const DiscountSectionPsuedoFragment = `
    title
    caveat
    image {
        ...MediaItemFragment
    }
    discounts {
        ...MediaItemFragment
        ...CaptionFragment
    }
`

export const FormFragment = `
    fragment FormFragment on Form {
        formId
        title
        fullForm
    }
`

export const TestimonialFragment = `
    fragment TestimonialFragment on Testimonial {
        id
        testimonialFields {
            contentHtml
            name
            position
            image {
                ...MediaItemFragment
            }
        }
    }
`
