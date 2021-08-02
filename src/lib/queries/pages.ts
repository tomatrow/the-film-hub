import { graphql } from "$lib/scripts/apollo"

export const PageFragment = graphql`
    fragment PageFragment on Page {
        id
        slug
        title
        seo {
            title
            fullHead
        }
    }
`
