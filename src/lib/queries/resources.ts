import { graphql } from "$lib/scripts/apollo"

export const ResourcesPsuedoFragment = graphql`
    pages(first: 500) {
        edges {
            node {
                __typename
                id
                href: uri
                template {
                    templateName
                }
            }
        }
    }
`
