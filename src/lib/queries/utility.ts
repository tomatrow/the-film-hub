import { graphql } from "$lib/scripts/apollo"

export const AcfLinkFragment = graphql`
    fragment AcfLinkFragment on AcfLink {
        href: url
        title
        target
    }
`

export const MediaItemFragment = graphql`
    fragment MediaItemFragment on MediaItem {
        id
        alt: altText
        src: mediaItemUrl
        srcset: srcSet
    }
`

export const TermFragment = graphql`
    fragment TermFragment on TermNode {
        id
        href: uri
        name
    }
`
