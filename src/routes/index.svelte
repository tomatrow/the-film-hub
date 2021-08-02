<script lang="ts" context="module">
    import { graphql } from "$lib/scripts/apollo"
    import { loadPage } from "$lib/scripts/router"
    import { PageFragment } from "$lib/queries/pages"
    import type { Load } from "@sveltejs/kit"

    export const pageLoad = loadPage(
        "Template_Vend",
        graphql`
            query VendPageQuery($id: ID!, $isPreview: Boolean!) {
                page(id: $id, asPreview: $isPreview) {
                    ...PageFragment
                    template {
                        ... on Template_Vend {
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

    export const load: Load = async input => {
        const mockInput = { ...input }
        mockInput.page = { ...mockInput }
        mockInput.page.path = "/vend"

        const result = await pageLoad(mockInput)
        console.log({ result })

        return {
            staus: 200
        }
    }
</script>

<script lang="ts">
    import { session } from "$app/stores"

    console.log({ session: $session })
</script>

<div>Hello</div>
