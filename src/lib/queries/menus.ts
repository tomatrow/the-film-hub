import { graphql } from "$lib/scripts/apollo"

export const MenuItemFragment = graphql`
    fragment MenuItemFragment on MenuItem {
        id
        title: label
        href: url
        target
    }
`

export const LandingPageMenuFragment = `
    fragment LandingPageMenuFragment on Menu {
        id
        menuItems(where: { parentDatabaseId: 0 }) {
            edges {
                node {
                    ...MenuItemFragment
                }
            }
        }
        landingPageMenuFields {
            logo {
                ...MediaItemFragment
            }
        }
    }
`

export const LandingPageFooterMenuFragment = `
    fragment LandingPageFooterMenuFragment on Menu {
        landingPageFooterMenuFields {
            blurb
        }
    }
`
